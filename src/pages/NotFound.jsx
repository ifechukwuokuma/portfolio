import { useNavigate } from "react-router-dom";

export const NotFound = () =>{
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center text-center">
      <h1 className="text-[120px] font-bold">
        <span className="text-[#F9B233]">4</span>
        <span className="text-[#203B2E]">0</span>
        <span className="text-[#F9B233]">4</span>
      </h1>

      <h2 className="text-2xl font-semibold mt-4">
        Oops! <span className="text-[#F9B233] italic font-normal">Page not Found</span>
      </h2>

      <p className="text-gray-600 mt-3 max-w-md">
        The page you are looking for cannot be found. Take a break before trying again.
      </p>

      <button
        onClick={() => navigate("/")}
        className="mt-8 bg-[#F9B233] text-white font-medium py-2 px-6 rounded-full hover:bg-[#203B2E] transition-all"
      >
        Go to Home Page
      </button>
    </div>
  );
}
