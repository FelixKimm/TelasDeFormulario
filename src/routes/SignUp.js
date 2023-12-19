import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const firstRender = useRef(false);
  const [id, setId] = useState(1);

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeSurname = (e) => {
    setSurname(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    setId((i) => i + 1);

    const registry = {
      id: id,
      email,
      name,
      surname,
      password,
    };

    setUsers([...users, registry]);

    setEmail("");
    setName("");
    setSurname("");
    setPassword("");
  };

  useEffect(() => {
    if (firstRender.current) {
      console.log(users);
    } else {
      firstRender.current = true;
    }
  }, [users]);

  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={email}
          onChange={onChangeEmail}
          type="email"
          placeholder="Enter email"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>First name</Form.Label>
        <Form.Control
          value={name}
          onChange={onChangeName}
          type="text"
          placeholder="Enter first name"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>Surname</Form.Label>
        <Form.Control
          value={surname}
          onChange={onChangeSurname}
          type="text"
          placeholder="Enter surname"
          required
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={password}
          onChange={onChangePassword}
          type="password"
          placeholder="Enter password"
          required
        />
      </Form.Group>

      <Button className="m-2" variant="primary" type="submit">
        Signup
      </Button>
      <Link to="/login">
        <Button variant="primary" type="submit">
          Login Screen
        </Button>
      </Link>
    </Form>
  );
};

export default SignUp;
