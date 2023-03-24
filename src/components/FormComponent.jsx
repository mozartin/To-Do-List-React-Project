import React, { useRef, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export default function FormComponent(props) {
  const [value, setValue] = useState("");
  const [isError, setIsError] = useState(true);
  const [isBlured, setIsBlured] = useState(false);
  const inputRef = useRef(null);

  const handleSubmit = (e) => {
    setIsError(false);
    e.preventDefault();
    if (value.length > 5) {
      fetch("http://localhost:3100/todo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value, done: false }),
      }).then(() => {
        props.updateList();
        setValue("");
        setIsError(true);
        inputRef.current.blur(); 
        setIsBlured(false);
      });
    } else {
      setIsError(true);
    }
  };
  
  const handleValidation = (e) => {
    e.target.value.length > 5 ? setIsError(false) : setIsError(true);
  };

  return (
    <div>
      <Form className="my-form">
        <Form.Label htmlFor="body" className="second-header">
          New To Do:
        </Form.Label>
        <div className="d-flex gap-1 justify-content-between align-items-start">
          <Form.Group className="w-100" controlId="formBasicEmail">
            <Form.Control
              className="form-control invalid"
              type="textarea"
              placeholder="Enter your next To Do here"
              value={value}
              ref={inputRef}
              isValid={isBlured && !isError} 
              isInvalid={isBlured && isError} 
              onChange={(e) => {
                setValue(e.target.value);
                handleValidation(e);
              }}
              onBlur={() => setIsBlured(true)}
            />
            <Form.Control.Feedback type="invalid" className="feedback">
             Please enter at least 6 characters
            </Form.Control.Feedback>
          </Form.Group>
          <Button type="submit" className="sbmit-btn" onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
