import { Buttons } from "../Buttons";
import JumboBox from "./JumboBox";
import PropTypes from "prop-types";
/**
 * @typedef {Object} button
 * @property {boolean} isPrimary Primary button.
 * @property {string} to Route of page to visit by this button click.
 * @property {string} title Title of button.
 *
 * @param {Object} props Container props.
 * @param {Array<button>} props.buttons List of buttons.
 * @param {string} props.heading Heading of Jumbotron.
 * @param {string} props.leadText Lead text containing description of Jumbotron.
 * @returns {JSX.Element}
 */
export const Jumbotron = ({ heading, leadText, buttons, ...rest }) => (
  <JumboBox {...rest}>
    <h1 className="display-1">{heading}</h1>
    <p className="lead">{leadText}</p>
    <Buttons buttons={buttons} />
  </JumboBox>
);

Jumbotron.propTypes = {
  heading: PropTypes.string.isRequired,
  leadText: PropTypes.string.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      isPrimary: PropTypes.bool.isRequired,
      to: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};
