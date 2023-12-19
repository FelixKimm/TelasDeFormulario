import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const TableInfo = ({ id, email, name, surname }) => {
  return (
    <tbody>
      <tr key={id}>
        <td>{id}</td>
        <td>{name}</td>
        <td>{surname}</td>
        <td>{email}</td>
        <td>
          <Link to="/edit">
            <Button
              style={{ marginRight: "10px" }}
              variant="primary"
              type="submit"
            >
              Edit
            </Button>
          </Link>
          <Button variant="primary" type="submit">
            Delete
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default TableInfo;
