import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Home = () => {
  const [change, setChange] = useState(true);
  const [dataBase, setDataBase] = useState([
    {
      id: 1,
      email: "felix@gmail.com",
      name: "Felix",
      surname: "Kim",
    },
    {
      id: 2,
      email: "teste@gmail.com",
      name: "Teste",
      surname: "Sob",
    },
    {
      id: 3,
      email: "teste2@gmail.com",
      name: "Teste2",
      surname: "Sob2",
    },
    {
      id: 4,
      email: "mockup@email.com",
      name: "Mock",
      surname: "Up",
    },
    {
      id: 5,
      email: "asdf@gmail.cooooooooooom",
      name: "LongName",
      surname: "ShortSur",
    },
  ]);

  const deleteBtn = (id) => {
    setDataBase(dataBase.filter((i) => i.id !== id));
  };

  const changeRender = () => {
    setChange(!change);
  };

  return (
    <>
      {change ? (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          {dataBase.map((m) => (
            <TableInfo
              key={m.id}
              id={m.id}
              email={m.email}
              name={m.name}
              surname={m.surname}
              deletar={() => deleteBtn(m.id)}
              trocar={changeRender}
            />
          ))}
        </Table>
      ) : (
        <Edit trocar={changeRender} />
      )}
    </>
  );
};

const TableInfo = ({ id, email, name, surname, deletar, trocar }) => {
  return (
    <tbody>
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>
          <Button
            style={{ marginRight: "10px" }}
            variant="primary"
            type="submit"
            onClick={trocar}
          >
            Edit
          </Button>
          <Button variant="primary" type="submit" onClick={deletar}>
            Delete
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

const Edit = ({ id, email, name, surname, deletar, trocar }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Email address</Form.Label>
        <Form.Control required type="email" placeholder={email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Name</Form.Label>
        <Form.Control required type="email" placeholder={name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Surname</Form.Label>
        <Form.Control required type="email" placeholder={surname} />
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
    </Form>
  );
};

export default Home;
