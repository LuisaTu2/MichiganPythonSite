import "./Sponsor.css";
import python_anywhere_logo from "../../assets/python_anywhere_logo.svg";

const SponsorPage = () => {
  return (
    <div className="sponsor-page">
      Our sponsor is
      <a
        href="https://www.pythonanywhere.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong> PythonAnywhere </strong>
      </a>
      a cloud platform that makes it easy to build and run Python applications.{" "}
      <a
        href="https://www.pythonanywhere.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>PythonAnywhere</strong>
      </a>{" "}
      lets developers write code directly in the browser using a web-based
      editor or launch a full Python console from any modern device. Files and
      session state are securely stored on{" "}
      <a
        href="https://www.pythonanywhere.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <strong>PythonAnywhere</strong>
      </a>
      's servers, eliminating the need to configure or maintain infrastructure.
      This makes it easy to start coding on one device and seamlessly continue
      later from another, with the same environment always ready and accessible.{" "}
      <a
        href="https://www.pythonanywhere.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={python_anywhere_logo} className="sponsor-page-logo" />
      </a>
    </div>
  );
};

export default SponsorPage;
