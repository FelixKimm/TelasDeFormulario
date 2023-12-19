import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Edit = ({ id, email, name, surname, trocar }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Email address</Form.Label>
        <Form.Control required type="email" placeholder="email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Name</Form.Label>
        <Form.Control required type="email" placeholder="name" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Surname</Form.Label>
        <Form.Control required type="email" placeholder="surname" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          required
          type="password"
          placeholder="Submit a new password"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button className="m-2" variant="primary" type="submit" onClick={trocar}>
        Go Back
      </Button>
    </Form>
  );
};

export default Edit;
