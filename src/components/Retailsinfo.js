import React, {useState} from 'react';
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap';

const RetailsInfo = (props) => {

  const [isHasStoreChecked, setHasStoreChecked] = useState(false)

  const storeChange = (e) => {
    props.onChange(e)
    setHasStoreChecked(!isHasStoreChecked)
  }

  return (
    <Row>
      <h4><span className="number">7</span>Retails Information</h4>
      <Col>
        <Form.Check
          type="switch"
          label="Brick and Mortar retail location"
          id="hasStore"
          name="hasStore"
          value={isHasStoreChecked ? "0" : "1"}
          onChange={storeChange}
        />
        <FloatingLabel
          controlId="floatingInput"
          label="Address"
          className="mb-3"
         >
          <Form.Control  
            type="text" 
            placeholder="Address" 
            name="storeAddress"
            disabled={!isHasStoreChecked}
            required={isHasStoreChecked} 
            onChange={props.onChange} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Retail Website"
          className="mb-3"
        >
          <Form.Control  type="text" placeholder="Retail Website" name="retailWebsite1" onChange={props.onChange} />
        </FloatingLabel>
        </Col>
    </Row>
  )
}

export default RetailsInfo;