import React, { useState, useEffect, useCallback } from "react";
import Table from "react-bootstrap/Table";
import "bootstrap/dist/css/bootstrap.min.css";
import TableInfo from "../components/Table";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

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

  const updateDB = useCallback(
    (id, newEmail, newName, newSurname) => {
      setDataBase((data) =>
        data.map((i) =>
          i.id === id
            ? { ...i, email: newEmail, name: newName, surname: newSurname }
            : i
        )
      );
    },
    [setDataBase]
  );

  const deleteBtn = (id) => {
    setDataBase(dataBase.filter((i) => i.id !== id));
  };

  const changeRender = (v) => {
    setChange(!change);
    setSelectValues(v);
    // console.log(v);
  };

  return (
    <>
      {change ? (
        <>
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
          <Link to="/login">
            <Button className="m-2" type="submit">
              Sign off
            </Button>
          </Link>
        </>
      ) : (
        <Edit
          id={selectValues.id}
          email={selectValues.email}
          name={selectValues.name}
          surname={selectValues.surname}
          trocar={changeRender}
          updateDB={updateDB}
        />
      )}
    </>
  );
};

const Edit = ({ id, email, name, surname, trocar, updateDB }) => {
  const [newEmail, setNewEmail] = useState(email);
  const [newName, setNewName] = useState(name);
  const [newSurname, setNewSurname] = useState(surname);

  useEffect(() => {
    updateDB(id, newEmail, newName, newSurname);
  }, [newEmail, newName, newSurname, id, updateDB]);

  const submitEdit = (e) => {
    console.log(e);
    e.preventDefault();
    setNewEmail(e.target[0].value);
    setNewName(e.target[1].value);
    setNewSurname(e.target[2].value);

    // const newEmail = e.target[0].value;
    // const newName = e.target[1].value;
    // const newSurname = e.target[2].value;
    // const newPassword = e.target[3].value;

    updateDB(id, newEmail, newName, newSurname);

    e.target[0].placeholder = newEmail;
    e.target[0].value = "";

    e.target[1].placeholder = newName;
    e.target[1].value = "";

    e.target[2].placeholder = newSurname;
    e.target[2].value = "";

    e.target[3].value = "";
  };

  return (
    <Form onSubmit={submitEdit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>New Email address</Form.Label>
        <Form.Control required type="email" placeholder={email} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>New Name</Form.Label>
        <Form.Control required type="text" placeholder={name} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicSurname">
        <Form.Label>New Surname</Form.Label>
        <Form.Control required type="text" placeholder={surname} />
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

export default Home;
