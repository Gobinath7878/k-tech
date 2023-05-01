import React from "react";
import {
  Button,
  Form,
  InputGroup,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";
import { IoMdAddCircleOutline } from "react-icons/io";
import { AiOutlineSearch, AiOutlineBars } from "react-icons/ai";
import {MdNavigateNext}  from "react-icons/md"
import {GrFormPrevious} from "react-icons/gr"
import UserTable from "./UserTable";

const Users = () => {
  return (
    <>
      <div className="d-flex align-items-center justify-content-between px-5 pt-2 pb-3 flex-wrap">
        <h1 className="fw-bold">
          Users <br />
          <span className="fs-6 fw-normal">38 users</span>
        </h1>
        <Button className="button-home border-0 py-2">
          {" "}
          <span className="rounded border-light mx-2">
            <IoMdAddCircleOutline />
          </span>
          Invite User
        </Button>
      </div>
      <div className="search-container mx-5">
        <div className="d-flex search-box">
          <span className="fs-5">
            <AiOutlineSearch />
          </span>
          <InputGroup className="mb-3">
            <Form.Control
              className="border-0"
              placeholder="Recipient's username"
              aria-label="Recipient's username"
              aria-describedby="basic-addon2"
            />
            <InputGroup.Text id="basic-addon2" className="border-0 bg-light">
              <AiOutlineBars />
            </InputGroup.Text>
          </InputGroup>
        </div>
      </div>

      <UserTable />

      <div className="d-flex justify-content-between align-items-center flex-wrap mx-5 my-2 page-container">
        <h6 className="m-3">1-3 of 23</h6>
        <div className="d-flex align-items-center">
          <h6 className="">Rows per page: </h6>
          <DropdownButton
            id="dropdown-basic-button"
            variant="light"
            className="border-1 mx-2"
            title="3"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <h4 className="border-1 p-2 rounded-3 mx-1"><GrFormPrevious className="text-muted"/></h4>
          <h4 className="border-1 p-2 rounded-3 bg-light mx-2"><MdNavigateNext/></h4>
        </div>
      </div>
    </>
  );
};

export default Users;
