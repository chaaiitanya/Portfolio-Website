import { useEffect } from "react";
import { useLoading } from "../../context/LoadingProvider";
import { setProgress } from "../Loading";
import { setCharTimeline, setAllTimeline } from "../utils/GsapScroll";

const Scene = () => {
  const { setLoading } = useLoading();

  useEffect(() => {
    const progress = setProgress((value) => setLoading(value));
    progress.loaded().then(() => {
      setTimeout(() => {
        setCharTimeline();
        setAllTimeline();
      }, 2500);
    });
  }, []);

  return (
    <div className="character-container">
      <div className="character-model">
        <div className="character-rim"></div>
        <div className="landing-image">
          <img src="/images/profile.jpg" alt="Chaitanya Surabattuni" />
        </div>
      </div>
    </div>
  );
};

export default Scene;
