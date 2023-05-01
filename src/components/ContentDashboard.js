import React from "react";
import { Button, Row, Col } from "react-bootstrap";
import { AiOutlinePlus } from "react-icons/ai";
import { GiPolarStar } from "react-icons/gi";
import AdminUsers from "./AdminUsers";
import AccountUsers from "./AccountUsers";

const ContentDashboard = () => {
  return (
    <>
      <div className="content-dashboard p-3 mx-1 rounded-4">
        <div className="d-flex justify-content-between flex-warp heading-container pb-2">
          <div>
            <h2>
              <GiPolarStar className="fs-1" />{" "}
              <span className="title fw-bold">Team members</span>
            </h2>
            <h6 className="para">
              Manage your team memnbers and their account permissions here.
            </h6>
          </div>
          <Button
            variant="outline-secondary"
            className="h-25 fw-bold text-dark"
          >
            <AiOutlinePlus className="fs-5" />{" "}
            <span className="page-title">Add team member</span>
          </Button>
        </div>

        <Row className="p-3 admin-container">
          <Col lg="4" xs='12'>
            <div>
              <p className="mb-1 fw-bold title">Admin Users</p>
              <h6 className="text-muted para" >
                Admins can add and remove users and manage.They have some features.
              </h6>
            </div>
          </Col>
          <Col lg="8" xs='12'>
            <AdminUsers />
          </Col>
        </Row>


        <Row className="p-3">
          <Col lg="4" xs='12'>
            <div>
              <p className="mb-1 fw-bold title">Account Users</p>
              <h6 className="text-muted para" >
                Users can edit and remove data and manage.They have some features.
              </h6>
            </div>
          </Col>
          <Col lg="8" xs='12'>
            <AccountUsers />
          </Col>
        </Row>
      </div>
    </>
  );
};

export default ContentDashboard;
