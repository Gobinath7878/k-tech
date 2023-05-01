import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LoginImg from "../assets/kthome.png";
import AnotherImg from '../assets/kthome2.jpg'
import "../styles/Login.css";
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [dancingImageReachedBottom, setDancingImageReachedBottom]=useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      toast.error("Input fields can't be empty");
    } else {
      toast.success("Login Success");
      setTimeout(() => {
        navigate("/home");
      }, 1000); // wait for 2 seconds before showing the success toast and navigating
    }
  };

  const handleDancingImgLoad = () => {
    setDancingImageReachedBottom(true);
  };
  return (
    <>
      <Container className="my-5">
        <Row className="m-0 login-container">
          {/* <Col lg="6" className="login-leftside p-0">
            <img src={LoginImg} alt="Loading..." className="login-img dancing" />
          </Col> */}
          <Col lg="6" className="login-leftside p-0">
            {dancingImageReachedBottom ? (
              <img src={AnotherImg} alt="Another" className="login-img" />
            ) : null}
            <img
              src={LoginImg}
              alt="Loading..."
              className={`login-img dancing ${
                dancingImageReachedBottom ? "dancing-bottom" : ""
              }`}
              onLoad={handleDancingImgLoad}
            />
          </Col>
          <Col lg="6" className="login-rightside px-5 my-5">
            <h3 className="mt-3 fw-bold">Login</h3>

            <Form className="mt-5" onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Remember Password" />
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 text">
                Submit
              </Button>
            </Form>
            <h6 className="mt-4">
              Don't have an account?{" "}
              <span className="text-primary">Sign up</span>
            </h6>
            <div className="d-flex my-4">
              <hr className="w-50 mx-2" />
              <h6 className="text-muted">or</h6>
              <hr className="w-50 mx-2" />
            </div>
            <div className="G-button mb-5">
              <h6 className="text-center fw-bold">
                <FcGoogle style={{ marginRight: "5px" }} />
                Authorize with Google
              </h6>
            </div>
          </Col>
        </Row>
      </Container>
      <ToastContainer />
    </>
  );
}

export default Login;
