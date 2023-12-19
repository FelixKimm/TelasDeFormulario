import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import TableInfo from "../components/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const Home = () => {
  const [change, setChange] = useState(true);
  const [selectValues, setSelectValues] = useState();
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

  const changeRender = (v) => {
    setChange(!change);
    setSelectValues(v);
    console.log(v);
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
          <tbody>
            {dataBase.map((m) => (
              <TableInfo
                key={m.id}
                id={m.id}
                email={m.email}
                name={m.name}
                surname={m.surname}
                deletar={() => deleteBtn(m.id)}
                trocar={() => changeRender(m)}
              />
            ))}
          </tbody>
        </Table>
      ) : (
        <Edit
          id={selectValues.id}
          email={selectValues.email}
          name={selectValues.name}
          surname={selectValues.surname}
          trocar={changeRender}
        />
      )}
    </>
  );
};

const Edit = ({ id, email, name, surname, trocar }) => {
  const [newData, setNewData] = useState({
    newEmail: email,
    newName: name,
    newSurname: surname,
    newPassword: "",
  });

  const onChange = (e) => {
    setNewData({
      ...newData,
      [e.target.name]: e.target.value,
    });
  };

  const submitEdit = (e) => {
    e.preventDefault();

    trocar();
  };

  return (
    <Form onSubmit={submitEdit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Email address</Form.Label>
        <Form.Control
          name="newEmail"
          required
          value={newData.newEmail}
          type="email"
          placeholder={email}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>New Name</Form.Label>
        <Form.Control
          name="newName"
          required
          value={newData.newName}
          type="text"
          placeholder={name}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>New Surname</Form.Label>
        <Form.Control
          name="newSurname"
          required
          value={newData.newSurname}
          type="text"
          placeholder={surname}
          onChange={onChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>New Password</Form.Label>
        <Form.Control
          name="newPassword"
          required
          value={newData.newPassword}
          type="password"
          placeholder="Submit a new password"
          onChange={onChange}
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

export default Home;
