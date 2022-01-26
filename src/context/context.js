import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children });
const [firstName, setFirstName] = useState('');
const [lastName, setLastName] = useState('');
const [businessName, setBusinessName] = useState('');
const [businessWebsite, setBusinessWebsite] = useState('');
const [businessName, setBusinessName] = useState('');
const [retailsCertificateNumber, setRetailsCertificateNumber] = useState('')
const [taxId, setTaxId] = useState('');
const [insuranceNumber, setInsuranceNumber] = useState('');
