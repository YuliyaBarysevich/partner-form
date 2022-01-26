import React, { useState, useEffect } from 'react';
import {Row, Col, Form, FloatingLabel} from 'react-bootstrap';

const Address = (props) => {
  const [ selectValue, setSelectValue ] = useState('')

  const handleChange = (e) => {
    setSelectValue(e.currentTarget.value);
  }

  useEffect(() => {
    if(selectValue){
      console.log(selectValue)
    }
  }, [selectValue])
  const usStates = [
    { name: 'Select State', value: ''},
    { name: 'Alabama', value: 'AL' },
    { name: 'Alaska', value: 'AK' },
    { name: 'Arizona', value: 'AZ' },
    { name: 'Arkansas', value: 'AR' },
    { name: 'California', value: 'CA' }
  ]
  return (
    <Row>
      <Col xs={6}>
      <FloatingLabel
               controlId="floatingInput"
               label="Address*"
               className="mb-3"
                >
              <Form.Control type="text" placeholder="Address" name="address" required onChange={props.onChange} />
             </FloatingLabel>
      </Col>
      <Col xs={3}>
      <FloatingLabel
               controlId="floatingInput"
               label="City*"
               className="mb-3"
                >
              <Form.Control type="text" placeholder="City" name="city" required onChange={props.onChange} />
             </FloatingLabel>
      </Col>
      <Col>
      <FloatingLabel
               controlId="floatingInput"
               label="State*"
               className="mb-3"
                >
              <Form.Select name="state" required onChange={handleChange} onChange={props.onChange}>
                {usStates.map((st, idx) => (
                  <option key={idx} value={st.value}>{st.name}</option>
                ))}
              </Form.Select>
             </FloatingLabel>
      </Col>
      <Col>
      <FloatingLabel
               controlId="floatingInput"
               label="Zip*"
               className="mb-3"
                >
              <Form.Control type="text" placeholder="Zip" name="zip" required onChange={props.onChange} />
             </FloatingLabel>
      </Col>
      <p>{selectValue}</p>
    </Row>
  )
}

export default Address;