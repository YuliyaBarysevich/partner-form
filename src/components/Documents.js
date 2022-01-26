import React, { useEffect } from 'react';
import { Form, Row, Col, Container, FloatingLabel } from 'react-bootstrap'

const Documents = (props) => {

  return (
    <>
    <Row>
      <h4><span className="number">4</span> Documents </h4>
      <Col>
      <FloatingLabel
            controlId="floatingInput"
            label="Retails Certificate Number"
            className="mb-3"
          >
            <Form.Control
              type="text" 
              placeholder="Retails Certificate Number" 
              name="retailsCertificateNumber"
              required={props.partnerType === "1"} 
              onChange={props.onChange} />
          </FloatingLabel>

      </Col>
      <Col>
      <FloatingLabel
            controlId="floatingInput"
            label="Tax ID"
            className="mb-3"
          >
            <Form.Control 
              type="text" 
              placeholder="Tax ID" 
              name="taxId" 
              required={props.partnerType === "1"}
              onChange={props.onChange} />
          </FloatingLabel>

      </Col>
      <Col>
      <FloatingLabel
            controlId="floatingInput"
            label="Insurance Number (optional)"
            className="mb-3"
          >
            <Form.Control 
              type="text" 
              placeholder="Insurance Number" 
              name="insuranceNumber" 
              onChange={props.onChange} />
          </FloatingLabel>

      </Col>
    </Row>
      
    
    </>
  )
}

export default Documents;