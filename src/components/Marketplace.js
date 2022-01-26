import React, {useState} from 'react';
import { Row, Col, Form, FloatingLabel } from 'react-bootstrap'

const MarketPlace = (props) => {

  const [isOtherChecked, setOtherChecked] = useState(false)
  const [isEbayChecked, setEbayChecked] = useState(false)
  const [isAmazonChecked, setAmazonChecked] = useState(false)
  const [isWalmartChecked, setWalmartChecked] = useState(false);
  
  const changeEbay = (e) => {
    props.onChange(e);
    setEbayChecked(!isEbayChecked)
  }

  const changeAmazon = (e) => {
    props.onChange(e);
    setAmazonChecked(!isAmazonChecked);
  }

  const changeWalmart = (e) => {
    props.onChange(e);
    setWalmartChecked(!isWalmartChecked)
  }

  const changeOther = (e) => {
    props.onChange(e)
    setOtherChecked(!isOtherChecked)

  }

  return (

    <Row>
      <h4><span className="number">6</span> 3rd MarketPlace</h4>
      <Col>
        <Form.Check
          type="switch"
          label="Ebay"
          id="marketPlaceEbay"
          name="marketPlaceEbay"
          value={isEbayChecked ? "0" : "1"}
          required={props.partnerType === "1" && !isAmazonChecked && !isWalmartChecked && !isOtherChecked}
          onChange={changeEbay}
        />
        <Form.Check
          type="switch"
          label="Amazon"
          id="marketPlaceAmazon"
          name="marketPlaceAmazon"
          value={isAmazonChecked ? "0" : "1"}
          required={props.partnerType === "1" && !isEbayChecked && !isWalmartChecked && !isOtherChecked}
          onChange={changeAmazon}
        />
        <Form.Check
          type="switch"
          label="Walmart"
          id="marketPlaceWalmart"
          name="marketPlaceWalmart"
          value={isWalmartChecked ? "0" : "1"}
          required={props.partnerType === "1" && !isAmazonChecked && !isEbayChecked && !isOtherChecked}
          onChange={changeWalmart}
        />
      </Col>
      <Col>
        <Form.Check 
          type="switch"
          label="Other"
          id="marketPlaceOther"
          name="marketPlaceOther"
          value={isOtherChecked ? "0" : "1"}
          required={props.partnerType === "1" && !isAmazonChecked && !isWalmartChecked && !isEbayChecked}
          onChange={changeOther}
        />
        <FloatingLabel
          controlId="floatingInput"
          label="Marketplace Name"
          className="mb-3"
        >
          <Form.Control 
            type="text" 
            placeholder="Marketplace Name" 
            name="marketPlaceName1"
            disabled={!isOtherChecked}
            required={isOtherChecked} 
            onChange={props.onChange} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Marketplace Name"
          className="mb-3"
        >
          <Form.Control 
            type="text" 
            placeholder="Marketplace Name" 
            name="marketPlaceName2" 
            disabled={!isOtherChecked}
            onChange={props.onChange} />
        </FloatingLabel>
        <FloatingLabel
          controlId="floatingInput"
          label="Marketplace Name"
          className="mb-3"
        >
          <Form.Control 
            type="text" 
            placeholder="Marketplace Name" 
            name="marketPlaceName3"
            disabled={!isOtherChecked}
            onChange={props.onChange} />
        </FloatingLabel>
      </Col>
    </Row>
    
  )
}

export default MarketPlace;