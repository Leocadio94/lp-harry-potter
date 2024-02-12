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

  const isMobile = window.innerWidth < 768;

  return (
    <div className="loading">
      <Lottie
        options={defaultOptions}
        height={isMobile ? 100 : 400}
        width={isMobile ? 100 : 400}
      />
    </div>
  );
};

export default Loading;
