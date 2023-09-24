import { Col, Button, Row, Container } from "react-bootstrap";
import PropTypes from "prop-types";

function TodoDeleteButton({ resetData, resetDoneData }) {
  return (
    <Container>
      <Row className="align-items-center d-flex md-5">
        <Col>
          <Button onClick={() => resetDoneData()} className="button-red border">
            Delete Done Tasks
          </Button>
        </Col>
        <Col>
          <Button onClick={() => resetData()} className="button-red border">
            Delete All Tasks
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

TodoDeleteButton.propTypes = {
  resetData: PropTypes.func,
  resetDoneData: PropTypes.func,
};

export default TodoDeleteButton;
