import "./Header.css";

interface HeaderProps {
  onClick: () => void;
}

const Header = ({ onClick }: HeaderProps) => {
  return (
    <div className="header">
      <span className="header-title" onClick={onClick}>
        {" "}
        Michigan Python
      </span>
    </div>
  );
};

export default Header;
