import React from 'react';
import { Row, Col, Form } from 'react-bootstrap';

const FileUpload = (props) => {
  return (
    <Row>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Upload Certificate</Form.Label>
          <Form.Control 
            type="file" 
            name="retailsCertificateNumberFile" 
            required={props.partnerType === "1"}
            onChange={props.onChange} 
            />
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Upload Tax Document</Form.Label>
          <Form.Control 
            type="file" 
            name="taxDocumentNumberFile" 
            required={props.partnerType === "1"}
            onChange={props.onChange} 
            />
        </Form.Group>
        <Form.Group as={Col} className="mb-3">
          <Form.Label>Upload Insurance</Form.Label>
          <Form.Control 
            type="file" 
            name="insuranceCertificateNumberFile" 
            onChange={props.onChange} 
            />
        </Form.Group>
    </Row>
  )
}

export default FileUpload;