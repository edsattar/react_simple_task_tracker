import PropTypes from "prop-types";
import Button from "./Button";
import { useLocation } from "react-router-dom";

const Header = ({ title, onClick, showAddForm }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      {useLocation().pathname === "/" &&
      
      <Button
      color={showAddForm ? "black" : "green"}
      text={showAddForm ? "Close" : "Add Task"}
      onClick={onClick}
      />
    }
    </header>
  );
};

Header.defaultProps = {
  title: "TITLE",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};
export default Header;
