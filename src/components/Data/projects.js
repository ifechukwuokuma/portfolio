// src/data/projectData.js
export const fetchGitHubProjects = async () => {
  try {
    const response = await fetch("https://api.github.com/users/ifechukwuokuma/repos");
    if (!response.ok) throw new Error(`HTTP Error: ${response.status}`);

    const data = await response.json();

    // Filter only starred repos
    const starredRepos = data.filter(repo => repo.stargazers_count > 0);

    const projects = await Promise.all(
      starredRepos.map(async (repo) => {
        let description = repo.description || "";
        let thumbnail = "";

        try {
          // Fetch README
          const readmeRes = await fetch(
            `https://api.github.com/repos/ifechukwuokuma/${repo.name}/readme`
          );

          if (readmeRes.ok) {
            const readmeData = await readmeRes.json();
            const decoded = decodeURIComponent(escape(atob(readmeData.content)));

            // 🔍 Extract the first image from the README (Markdown format)
            const imgMatch = decoded.match(/!\[.*?\]\(([^)]+)\)/); // Match Markdown image syntax
            if (imgMatch && imgMatch[1]) {
              let imgUrl = imgMatch[1].trim(); // Extract image URL

              // Handle relative paths by converting them to absolute URLs
              if (!imgUrl.startsWith("http")) {
                imgUrl = `https://raw.githubusercontent.com/ifechukwuokuma/${repo.name}/${repo.default_branch}/${imgUrl.replace(/^\.?\//, "")}`;
              }

              thumbnail = imgUrl;
            }

            // 📝 Description fallback - Only capture text content, ignoring markdown formatting
            if (!description) {
              const textLines = decoded
                .split("\n")
                .map(line => line.trim()) // trim whitespace
                .filter(line => line && !line.startsWith("#") && !line.startsWith("!") && !line.startsWith("[") && !line.startsWith("<")); // Remove Markdown and HTML elements

              description = textLines.join(" ") || "No description provided.";
            }

            // Truncate the description to a specific length
            const maxLength = 250;
            if (description.length > maxLength) {
              description = description.slice(0, maxLength) + "...";
            }
          }
        } catch (err) {
          console.error(`Error fetching README for ${repo.name}:`, err);
        }

        return {
          id: repo.id,
          name: repo.name,
          description,
          stars: repo.stargazers_count,
          branch: repo.default_branch,
          repoUrl: repo.html_url,
          liveUrl: `https://ifechukwuokuma.github.io/${repo.name}`,
          thumbnail: thumbnail || "/fallback-thumbnail.png", // fallback if no image found
        };
      })
    );

    return projects;
  } catch (error) {
    console.error("Error fetching GitHub projects:", error);
    return [];
  }
};
