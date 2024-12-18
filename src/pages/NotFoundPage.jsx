import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="text-left mt-20 ml-10">
      <MdErrorOutline className="text-6xl" />
      <h1 className="text-4xl font-bold mb-4">Oops! Page Not Found</h1>
      <p className="mb-4">
        Sorry, the requested page is not found. Please check the URL again.
      </p>
    </div>
  );
};

export default NotFoundPage;
