import React from "react";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

export default function Item({ toDo, updateList }) {
  const handleDelete = () => {
    fetch(`http://localhost:3100/todo/${toDo.id}`, {
      method: "DELETE",
    }).then(() => updateList())
  };

  const switchIsDone = () => {
    fetch(`http://localhost:3100/todo/${toDo.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ value: toDo.value, done: !toDo.done }),
    }).then(() => updateList())
  };

  return (
    <div className="d-flex gap-1 justify-content-between mt-1 fs-4">
      <Card className="text-start w-100">
        <ListGroup variant="flush">
          <ListGroup.Item className="p-1 d-flex align-items-center justify-content-between">
            <Form.Check
              className="custom-checkbox"
              checked={toDo.done}
              type="checkbox"
              id={toDo.id}
              label={toDo.value}
              onChange={switchIsDone}
            />
            <div>
            <svg
              onClick={handleDelete}
              className="delete-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M9.25 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.75H19a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1 0-1.5h4.25V3Z"
              />
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M6.24 7.945a.5.5 0 0 1 .497-.445h10.526a.5.5 0 0 1 .497.445l.2 1.801a44.213 44.213 0 0 1 0 9.771l-.02.177a2.603 2.603 0 0 1-2.226 2.29a26.788 26.788 0 0 1-7.428 0a2.603 2.603 0 0 1-2.227-2.29l-.02-.177a44.239 44.239 0 0 1 0-9.77l.2-1.802Zm4.51 3.455a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0v-7Zm4 0a.75.75 0 0 0-1.5 0v7a.75.75 0 0 0 1.5 0v-7Z"
                clipRule="evenodd"
              />
            </svg>
            </div>
          </ListGroup.Item>
        </ListGroup>
      </Card>
    </div>
  );
}
