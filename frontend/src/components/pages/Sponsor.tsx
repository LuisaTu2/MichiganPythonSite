import "./Sponsor.css";
import python_anywhere_logo from "../../assets/python_anywhere_logo.svg";
import { PYTHON_ANYWHERE_LINK } from "./utils";

const SponsorPage = () => {
  return (
    <div className="sponsor-page">
      Web hosting graciously sponsored by
      <a
        href="https://www.pythonanywhere.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong> PythonAnywhere</strong>
      </a>
      .
      <a href={PYTHON_ANYWHERE_LINK} target="_blank" rel="noopener noreferrer">
        <img src={python_anywhere_logo} className="sponsor-page-logo" />
      </a>
    </div>
  );
};

export default SponsorPage;
