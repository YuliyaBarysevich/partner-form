import React, { useState, useEffect } from 'react';
import { ButtonGroup, Button, ToggleButton, Row, Col } from 'react-bootstrap';
import useForm from '../hooks/form';
import UserInfo from './UserInfo';
import Address from './Address';
import ContactInfo from './ContactInfo';
import Documents from './Documents';
import FileUpload from './DocumentsUpload';
import OrderHandling from './OrderHandling';
import MarketPlace from './Marketplace';
import RetailsInfo from './Retailsinfo';

const Profiles = (props) => {

  const [profileType, setProfileType] = useState('1');
  


  const profiles = [
    { name: 'Dealer', value: '1'},
    { name: 'Dropshipper', value: '2'},
    { name: 'Designer', value: '3'},
    { name: 'Builder', value: '4'},
  ]

  const handleInputChange = (e) => {
    const value = e.target.value;
    setProfileType(value)
  }

  return (
    <>
      <h4><span className="number">1</span>Please Select Type of Partnership</h4>
      <Row>
      <ButtonGroup className="mb-2" name="dealer-type" onChange={props.onChange}>
        {profiles.map((profile, idx) => (
          <ToggleButton
            key={idx}
            id={profile.name}
            type="radio"
            name="dealerType"
            variant="outline-primary"
            value={profile.value}
            checked={profile.value === profileType}
            onChange={handleInputChange}
          >
            {profile.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
      </Row>
      <UserInfo onChange={props.onChange} />
      <Address onChange={props.onChange} />
      <ContactInfo onChange={props.onChange} />
      <Documents onChange={props.onChange} partnerType={profileType} />
      <FileUpload onChange={props.onChange} partnerType={profileType} />
      <OrderHandling onChange={props.onChange} partnerType={profileType}/>
      <Row className="last-row">
        <Col xs={5} className="marketplace">
          <MarketPlace onChange={props.onChange} partnerType={profileType}/>
        </Col>
        <Col xs={1}></Col>
        <Col xs={6} className="retails-info">
          <RetailsInfo onChange={props.onChange} />
        </Col>
      </Row>
      
    </>
  )
}

export default Profiles;