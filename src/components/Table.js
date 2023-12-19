import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

const TableInfo = ({ id, email, name, surname, deletar, trocar }) => {
  return (
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
  );
};

export default TableInfo;
