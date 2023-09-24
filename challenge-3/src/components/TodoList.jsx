import { Container, Col } from "react-bootstrap";
import { MdDeleteForever } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import PropTypes from "prop-types";
import { useState } from "react";

const TodoList = ({
  id,
  task,
  status,
  updateCheck,
  deleteOneData,
  editOneData,
}) => {
  const [isTrue, setIsTrue] = useState(status);

  // mengubah nilai dari complete
  const changeHandlerChecked = () => {
    const newStatus = !isTrue;
    setIsTrue(newStatus);
    updateCheck(id, newStatus); // mengambil nilai id serta newStatus untuk filter All Done Todo
  };

  // mengambil id untuk delete
  const deleteThisList = () => {
    deleteOneData(id);
  };

  // mengambil id untuk update
  const editThisList = () => {
    editOneData(id);
  };

  return (
    <Container>
      <Col className="border border-2 rounded d-flex justify-content-between my-2 py-2 mt-4">
        <div className=" ps-3">
          <p className={isTrue ? "complete-task" : ""}>{task}</p>
        </div>
        <div className="d-flex width-custom">
          <input
            type="checkbox"
            className="m-auto input-checkbox"
            checked={isTrue}
            onChange={changeHandlerChecked}
          />
          <FiEdit onClick={editThisList} className="m-auto fs-3 edit" />
          <MdDeleteForever
            onClick={deleteThisList}
            className="m-auto fs-2 delete"
          />
        </div>
      </Col>
    </Container>
  );
};

TodoList.propTypes = {
  id: PropTypes.number,
  task: PropTypes.string,
  status: PropTypes.bool,
  updateCheck: PropTypes.func,
  deleteOneData: PropTypes.func,
  editOneData: PropTypes.func,
};

export default TodoList;
