import React from 'react';
import { Row, Col } from 'react-bootstrap';
import Sidebar from '../components/Sidebar';
import ContentDashboard from '../components/ContentDashboard';
import '../styles/Dashboard.css';

const Dashboard = () => {
  return (
    <>
      <Row className='m-0'>
        <Col lg='2' md='3' sm='3' xs='4' className='py-4 my-3'>
          <Sidebar />
        </Col>
        <Col lg='10' md='9' sm='9' xs='8' className='my-3'>
          <ContentDashboard />
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
