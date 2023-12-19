import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const registry = [{ id: 1, email: "felix@gmail.com", password: "felix" }];

const Login = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePass = (e) => {
    setPass(e.target.value);
  };

  const logIn = (e) => {
    e.preventDefault();
    const checkCredentials = registry.find(
      (user) => user.email === email && user.password === pass
    );

    if (checkCredentials) {
      console.log("success");
      navigate("/");
    } else {
      console.log("Wrong email or password");
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          required
          value={email}
          onChange={onChangeEmail}
          type="email"
          placeholder="Enter email"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          value={pass}
          onChange={onChangePass}
          type="password"
          placeholder="Password"
        />
      </Form.Group>
      <Button className="m-2" variant="primary" type="submit" onClick={logIn}>
        Login
      </Button>
      <Link to="/signup">
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Link>
    </Form>
  );
};

export default Login;
