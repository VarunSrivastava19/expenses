import { Container } from "react-bootstrap";
import styled from "styled-components";

const JumboBox = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  /* margin: 2rem 0; */
  text-align: center;
  border-radius: 0.5rem;
`;

export default JumboBox;
