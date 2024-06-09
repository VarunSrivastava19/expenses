import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";
/**
 * The Alert component.
 *
 * @param {Object} props Alert props.
 * @param {"primary"|"secondary"|"success"|"danger"|"warning"|"info"|"light"|"dark"} props.severity The severity of alert.
 * @param {string?} props.heading The heading of Alert.
 * @param {string} props.message The message of Alert.
 * @param {Object} rest Other props for underlying React-Bootstrap Alert component
 * @returns {import("react-bootstrap").Alert}
 */
const Alerter = ({ severity, heading, message, rest }) => (
  <Alert variant={severity} {...rest}>
    {heading && <Alert.Heading>{heading}</Alert.Heading>}
    {message}
  </Alert>
);

Alerter.propTypes = {
  severity: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "light",
    "dark",
  ]).isRequired,
  heading: PropTypes.string,
  message: PropTypes.string.isRequired,
};

export default Alerter;
