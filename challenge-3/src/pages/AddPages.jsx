import { Container } from "react-bootstrap";
import AddTask from "../components/AddTask";
import { useState } from "react";
import localData from "../data/todos.json";

const AddPages = () => {
  const [todos, setTodos] = useState(localData);
  const handleAddTodo = (task) => {
    const newTodo = [
      ...todos,
      {
        id: +new Date(),
        task,
        completed: false,
      },
    ];

    setTodos(newTodo);
  };

  return (
    <>
      <Container className="mt-5">
        <AddTask onAddTask={handleAddTodo} />
      </Container>
    </>
  );
};

export default AddPages;
