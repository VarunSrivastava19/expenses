import { Button } from "react-bootstrap";
import BtnGroup from "./Group";
import { Link } from "react-router-dom";
/**
 * @typedef {Object} button
 * @property {boolean} isPrimary Primary button.
 * @property {string} to Route of page to visit by this button click.
 * @property {string} title Title of button.
 *
 * @param {Object} props Buttons props.
 * @param {Array<button>} props.buttons List of buttons.
 * @param {Object} rest React-Bootstrap Button props
 * @returns {JSX.Element}
 */
export const Buttons = ({ buttons, ...rest }) => (
  <BtnGroup>
    {buttons.map((button, idx) => (
      <Button
        key={`idx-${idx}`}
        as={Link}
        to={`${button.to}`}
        variant={`outline-${button.isPrimary ? "primary" : "secondary"}`}
        className="mx-2"
        {...rest}
      >
        {button.title}
      </Button>
    ))}
  </BtnGroup>
);
