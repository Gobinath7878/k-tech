import React, { useState } from "react";
import { Table, Form, Image, Button } from "react-bootstrap";
import { GoPrimitiveDot } from "react-icons/go";
import { AiOutlineMinusSquare } from "react-icons/ai";

const UserTable = () => {
  const [checkedRows, setCheckedRows] = useState([2]);

  const handleCheckboxChange = (event, id) => {
    if (event.target.checked) {
      setCheckedRows([...checkedRows, id]);
    } else {
      setCheckedRows(checkedRows.filter((rowId) => rowId !== id));
    }
  };

  const isRowChecked = (id) => checkedRows.includes(id);

  const users = [
    {
      id: 1,
      name: "Marry copper",
      email: "marry@gmail.com",
      role: "Admin",
      status: "Active",
      time: "13 min ago",
      image:
        "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1682785288~exp=1682785888~hmac=320c506d8495472bfc65104053a75d8aa8c0fcfe6e496402972c12131f63555d",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@gmail.com",
      role: "User",
      status: "active",
      time: "2 hours ago",
      image:
        "https://img.freepik.com/free-photo/friendly-cheerful-dark-skinned-hipster-man-discusses-interesting-copy-space-points-thumb-away-right-side-shows-some-place-direction-has-curly-trendy-haircut-wears-casual-white-t-shirt_273609-31040.jpg?w=740&t=st=1682785661~exp=1682786261~hmac=da8ff6bc46c09389d4cffff16af3c778a12dd5b088c9391651a9f6a508d95ff5",
    },
    {
      id: 3,
      name: "Adem joes",
      email: "ademjoes@gmail.com",
      role: "User",
      status: "Inactive",
      time: "12 hours ago",
      image:
        "https://img.freepik.com/free-photo/happy-confident-male-entrepreneur-with-postive-smile-has-beard-mustache-keeps-arms-folded-being-high-spirit-after-successful-meeting-with-partners-poses-against-white-wall-dressed-casually_273609-16228.jpg?w=740&t=st=1682785394~exp=1682785994~hmac=11ef6492436249f2321601c9c1734dc8b320b91b78b027951cb7a2dacb400e38",
    },
    
  ];

  return (
    <div className="mx-5 mt-3">
      <h6 onClick={() => setCheckedRows([])}>
        <AiOutlineMinusSquare
          className="text-primary border-0 m-2"
          style={{ cursor: "pointer" }}
        />{" "}
        {checkedRows.length} users selected
      </h6>

      <Table hover responsive>
        <tbody>
          {users.map((user) => (
            <tr
              key={user.id}
              className={isRowChecked(user.id) ? "table-container-checked" : ""}
            >
              <td style={{ width: "5px" }}>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    checked={isRowChecked(user.id)}
                    onChange={(event) => handleCheckboxChange(event, user.id)}
                  />
                </Form.Group>
              </td>
              <td>
                <Image
                  src={user.image}
                  style={{ height: "40px", width: "50px" }}
                  alt="loading"
                  rounded
                  className="mx-2"
                />
                <span className="mx-2">{user.name}</span>
              </td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>
                <Button
                  variant="outline-secondary"
                  className={`fw-bold ${
                    user.status === "Inactive" ? "text-muted" : "text-dark"
                  }`}
                >
                  <GoPrimitiveDot
                    className={`${
                      user.status === "Inactive" ? "text-muted" : "text-success"
                    }`}
                  />{" "}
                  {user.status}
                </Button>
              </td>
              <td>{user.time}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UserTable;
