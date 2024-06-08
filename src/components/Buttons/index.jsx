import { Button } from "react-bootstrap";
import BtnGroup from "./Group";
import { Link } from "react-router-dom";
/**
 * @typedef {Object} button
 * @property {boolean} isPrimary Primary button.
 * @property {string?} to Route of page to visit by this button click.
 * @property {string} title Title of button.
 * @property {("submit"|"reset"|"button")?} type Type of button.
 * @property {React.MouseEvent<HTMLButtonElement>?} onClick Click event handler.
 * @property {Object} Bprops Other Button props.
 *
 * @param {Object} props Buttons props.
 * @param {boolean} props.isLink Button as a link? 
 * @param {Array<button>} props.buttons List of buttons.
 * @param {Object} rest React-Bootstrap Button props
 * @returns {JSX.Element}
 */
export const Buttons = ({ buttons, isLink, ...rest }) => {
  if (isLink)
    return (
      <BtnGroup>
        {buttons.map((button, idx) => (
          <Button
            key={`idx-${idx}`}
            as={Link}
            to={`${button.to}`}
            variant={`outline-${button.isPrimary ? "primary" : "secondary"}`}
            className="mx-2"
            {...rest}
            {...button.Bprops}
          >
            {button.title}
          </Button>
        ))}
      </BtnGroup>
    );
  return (
    <BtnGroup>
      {buttons.map((button, idx) => (
        <Button
          key={`idx-${idx}`}
          onClick={button?.onClick}
          type={button?.type}
          variant={`outline-${button.isPrimary ? "primary" : "secondary"}`}
          className="mx-2"
          {...rest}
          {...button.Bprops}
        >
          {button.title}
        </Button>
      ))}
    </BtnGroup>
  );
};
