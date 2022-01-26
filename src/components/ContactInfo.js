import React from 'react';
import { Row, Col, Form , FloatingLabel} from 'react-bootstrap';

const ContactInfo = (props) => 
<>
    <Row>
      <h4><span className="number">3</span> Contact Information</h4>
      <Col>
      <FloatingLabel
               controlId="floatingInput"
               label="Email #1*"
               className="mb-3"
                >
              <Form.Control 
                type="email" 
                placeholder="Email #1" 
                name ="email1" 
                required 
                onChange={props.onChange} />
             </FloatingLabel>
        
      </Col>
      <Col>
      <FloatingLabel
               controlId="floatingInput"
               label="Email #2"
               className="mb-3"
                >
              <Form.Control 
                type="email" 
                placeholder="Email #2" 
                name="email2" 
                onChange={props.onChange} />
             </FloatingLabel>
        
      </Col>
    </Row>
    <Row>
    <Col>
    <FloatingLabel
             controlId="floatingInput"
             label="Phone #1*"
             className="mb-3"
              >
            <Form.Control 
              type="text" 
              placeholder="Phone #1" 
              name="phone1" 
              required 
              onChange={props.onChange} />
           </FloatingLabel>
      
    </Col>
    <Col>
    <FloatingLabel
             controlId="floatingInput"
             label="Phone #2"
             className="mb-3"
              >
            <Form.Control 
              type="text" 
              placeholder="Phone #2" 
              name="phone2" 
              onChange={props.onChange} />
           </FloatingLabel>
      
    </Col>
  </Row>
  </>
  
export default ContactInfo;