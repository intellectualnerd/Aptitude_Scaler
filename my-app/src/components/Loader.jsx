import { Loader } from "lucide-react";
import "./loader.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-content">
        <Loader className="loader-icon" />
        <div className="loading-bar">
          <div className="loading-fill"></div>
        </div>
        <h2 className="loading-text">Loading...</h2>
      </div>
    </div>
  );
};

export default LoadingScreen;
