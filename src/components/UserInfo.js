import React, { useEffect, useState } from 'react';
import Profiles from './Profiles';
import { FloatingLabel, Form, Container, Row, Col} from 'react-bootstrap';

const UserInfo = (props) => {


  return (
    <>
        <Row>
          <h4><span className="number">2</span> Personal Information</h4>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="First Name*"
              className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="First Name" 
                name="firstName" 
                required 
                onChange={props.onChange}  />
            </FloatingLabel>
          </Col>
           <Col>
            <FloatingLabel
               controlId="floatingInput"
               label="Last Name*"
               className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Last Name" 
                name="lastName" 
                required 
                onChange={props.onChange} />
            </FloatingLabel>
          </Col>
        </Row>
        <Row>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              label="Business Name*"
              className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Business Name" 
                name="businessName" 
                required 
                onChange={props.onChange} />
            </FloatingLabel>
          </Col>
          <Col>
            <FloatingLabel
              controlId="floatingInput"
              abel="Business Website*"
              className="mb-3">
              <Form.Control 
                type="text" 
                placeholder="Business Website" 
                name="website" 
                required 
                onChange={props.onChange} />
            </FloatingLabel>
          </Col>
        </Row>
    </>
  )
}

export default UserInfo;