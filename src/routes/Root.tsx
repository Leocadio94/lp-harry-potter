import { Outlet } from "react-router-dom";
import AudioPlayer from "../components/common/AudioPlayer/AudioPlayer";
import BackToTop from "../components/common/BackToTop";
import Footer from "./Footer";
import Header from "./Header";

export default function Root() {
  return (
    <>
      <Header />

      <main className="container">
        <Outlet />
      </main>

      <Footer />

      <BackToTop />

      <AudioPlayer />
    </>
  );
}
