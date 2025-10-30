import PhotoCarousel from "./PhotoCarousel";
import "./WelcomePage.css";
import photo1 from "../../assets/photo1.png";
import photo2 from "../../assets/photo2.png";
import photo3 from "../../assets/photo3.png";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <br />
      <PhotoCarousel images={[photo1, photo2, photo3]} />
      <br />
      <div className="welcome-page-content">
        Welcome to the Michigan Python users group! We are an open community
        whose mission is to connect people who love writing Python code.
        Everyone is welcome to join the group and contribute to our mission.
        <br />
        If you would like to chat with us, come join the Michigan Python
        Discord. Thanks for joining!
        <br />
        See our latest videos:
      </div>
    </div>
  );
};

export default WelcomePage;
