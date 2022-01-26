import React, { useState } from 'react';
import {Col, Row, Form, FloatingLabel} from 'react-bootstrap';

const OrderHandling = (props) => {

  const [isEdiChecked, setEdiChecked] = useState(false);
  const [isPortalChecked, setPortalChecked] = useState(false);
  const [isManualChecked, setManualChecked] = useState(false);

  const changeEDI = (event) => {
    props.onChange(event);
    setEdiChecked(!isEdiChecked);
  }

  const changePortal = (event) => {
    props.onChange(event);
    setPortalChecked(!isPortalChecked);
  }

  const changeManual = (event) => {
    props.onChange(event);
    setManualChecked(!isManualChecked);
  }
  return (
    <>
    <Row className="order-handling">
    <h4><span className="number">5</span> Order Handling option</h4>
      <Col>
        <Form.Check
          type="switch"
          label="EDI"
          id="orderHandlingEdi"
          name="orderHandlingEdi"
          value={isEdiChecked ? "0" : "1"}
          required={!isPortalChecked && !isManualChecked}
          onChange={changeEDI}
         />
         <FloatingLabel
             controlId="floatingInput"
             label="Contact Person"
             className="mb-3"
              >
            <Form.Control 
              type="text" 
              placeholder="Contact Person" 
              name="orderHandlingEdiContactPerson" 
              disabled={!isEdiChecked}
              required={isEdiChecked} 
              onChange={props.onChange}/>
         </FloatingLabel>
         <FloatingLabel
             controlId="floatingInput"
             label="Phone"
             className="mb-3"
              >
            <Form.Control 
              type="text" 
              placeholder="Phone" 
              name="orderHandlingEdiPhone" 
              disabled={!isEdiChecked}
              required={isEdiChecked} 
              onChange={props.onChange}/>
         </FloatingLabel>
         <FloatingLabel
             controlId="floatingInput"
             label="Email"
             className="mb-3"
              >
            <Form.Control 
              type="text" 
              placeholder="Email" 
              name="orderHandlingEdiEmail" 
              disabled={!isEdiChecked}
              required={isEdiChecked} 
              onChange={props.onChange}/>
         </FloatingLabel>
      </Col>
      <Col>
        <Form.Check
          type="switch"
          label="Portal"
          id="orderHandlingPortal"
          name="orderHandlingPortal"
          value={isPortalChecked ? "0" : "1"}
          required={!isEdiChecked && !isManualChecked}
          onChange={changePortal}
         />
         <FloatingLabel
             controlId="floatingInput"
             label="Contact Person"
             className="mb-3"
              >
            <Form.Control 
              type="text" 
              placeholder="Contact Person" 
              name="orderHandlingPortalContactPerson" 
              disabled={!isPortalChecked}
              required={isPortalChecked} 
              onChange={props.onChange}/>
         </FloatingLabel>
         <FloatingLabel
             controlId="floatingInput"
             label="Phone"
             className="mb-3"
              >
            <Form.Control 
              type="text" 
              placeholder="Phone" 
              name="orderHandlingPortalPhone" 
              disabled={!isPortalChecked}
              required={isPortalChecked}  
              onChange={props.onChange}/>
         </FloatingLabel>
         <FloatingLabel
             controlId="floatingInput"
             label="Email"
             className="mb-3"
              >
            <Form.Control 
              type="text" 
              placeholder="Email" 
              name="orderHandlingPortalEmail" 
              disabled={!isPortalChecked}
              required={isPortalChecked}  
              onChange={props.onChange}/>
         </FloatingLabel>
         <FloatingLabel
             controlId="floatingInput"
             label="Portal URL"
             className="mb-3"
              >
            <Form.Control 
              type="text" 
              placeholder="Url" 
              name="orderHandlingPortalUrl" 
              disabled={!isPortalChecked}
              required={isPortalChecked}  
              onChange={props.onChange}/>
         </FloatingLabel>
      </Col>
      <Col>
        <Form.Check
          type="switch"
          label="Manual"
          name="orderHandlingManual"
          id="orderHandlingManual"
          value={isManualChecked ? "0" : "1"}
          required={!isPortalChecked && !isEdiChecked}
          onChange={changeManual}
         />
         <Form.Group
             controlId="controlTextArea"
             className="mb-3"
              >
            <Form.Control 
              as="textarea" 
              rows={3} 
              placeholder="Description" 
              name="orderHandlingManualTextArea" 
              required={isManualChecked} 
              disabled={!isManualChecked} 
              onChange={props.onChange}/>
         </Form.Group>
      </Col>
      
    </Row>
    </>
  )
}

export default OrderHandling;