import React, { useState } from "react";
import { Table, Form, Image } from "react-bootstrap";
import { MdDelete, MdEdit } from "react-icons/md";

const AdmimUsers = () => {
  const [checkedRows, setCheckedRows] = useState([]);

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
      dateAdded: "Feb 22,2023",
      lastActive: "Mar 14,2023",
      image:
        "https://img.freepik.com/free-photo/cheerful-curly-business-girl-wearing-glasses_176420-206.jpg?w=740&t=st=1682785288~exp=1682785888~hmac=320c506d8495472bfc65104053a75d8aa8c0fcfe6e496402972c12131f63555d",
    },
    {
      id: 2,
      name: "John Doe",
      email: "john.doe@gmail.com",
      dateAdded: "May 22,2023",
      lastActive: "Jun 14,2023",
      image:
        "https://img.freepik.com/free-photo/friendly-cheerful-dark-skinned-hipster-man-discusses-interesting-copy-space-points-thumb-away-right-side-shows-some-place-direction-has-curly-trendy-haircut-wears-casual-white-t-shirt_273609-31040.jpg?w=740&t=st=1682785661~exp=1682786261~hmac=da8ff6bc46c09389d4cffff16af3c778a12dd5b088c9391651a9f6a508d95ff5",
    },
    {
      id: 3,
      name: "Adem joes",
      email: "ademjoes@gmail.com",
      dateAdded: "Feb 22,2023",
      lastActive: "Mar 17,2023",
      image:
        "https://img.freepik.com/free-photo/happy-confident-male-entrepreneur-with-postive-smile-has-beard-mustache-keeps-arms-folded-being-high-spirit-after-successful-meeting-with-partners-poses-against-white-wall-dressed-casually_273609-16228.jpg?w=740&t=st=1682785394~exp=1682785994~hmac=11ef6492436249f2321601c9c1734dc8b320b91b78b027951cb7a2dacb400e38",
    },
  ];

  return (
    <div className=" mt-3 table-admin-container">
      <Table responsive  className="mb-0 table-admin">
        <thead>
          <tr className="table-head">
            <th>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Check
                  type="checkbox"
                  onClick={() =>
                    checkedRows.length === 0
                      ? setCheckedRows([1, 2, 3])
                      : setCheckedRows([])
                  }
                />
              </Form.Group>
            </th>
            <th className="text-secondary fw-bold px-3">Name</th>
            <th className="text-secondary fw-bold px-3">Date Added</th>
            <th className="text-secondary fw-bold px-3">Last active</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
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
                  style={{ height: "20px", width: "30px" }}
                  alt="loading"
                  rounded
                  className="mx-2 rounded-5"
                />
                <span className="mx-2 fw-bold">
                  {user.name}
                  <br />
                </span>
                <p className="mx-5 px-2 tr-email">{user.email}</p>
              </td>

              <td className="px-3">{user.dateAdded}</td>
              <td className="px-3">{user.lastActive}</td>
              <td className="px-3">
                <MdDelete />
              </td>
              <td className="px-3">
                <MdEdit />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdmimUsers;
