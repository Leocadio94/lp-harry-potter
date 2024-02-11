import Lottie from "react-lottie";
import animationData from "./Loading.json";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="loading">
      <Lottie options={defaultOptions} height={400} width={400} />
    </div>
  );
};

export default Loading;
