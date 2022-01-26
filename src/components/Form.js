import React, { useEffect, useState } from 'react';
import { FloatingLabel, Form, Container, Row, Col, ToggleButton, ToggleButtonGroup, ButtonGroup, Button} from 'react-bootstrap';

import useForm from '../hooks/form';
import Profiles from './Profiles';




const ProfileForm = (props) => {

  const [ handleSubmit, handleChange ] = useForm(profile)

  function profile(partner){
    props.handleSubmit(partner);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <Profiles onChange={handleChange}/>
        <Button variant="primary" size="lg" type="submit">Submit</Button>
      </Container>
    </Form>
  )
  
}

export default ProfileForm;