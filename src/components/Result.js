import React, {useEffect, useState} from 'react'
import ProfileForm from './Form';
import {Row, Col, Container} from 'react-bootstrap'

import useAjax from '../hooks/ajax';

function Result (props) {
  const [list, setList] = useState([]);

  const [getItems, addNewItem, updateItem, deleteItem] = useAjax(list)

 
  const _addItem = async (item) => {
    addNewItem(item, (newItem) => setList([...list, newItem]))
    console.log(item)

  }

  const _putItem = async (id) => {
    updateItem(id, (update) => setList(update));
  };

  const _deleteItem = async (id) => {
    deleteItem(id, (del) => setList(del));
  };

  // GET ALL DATA FROM DB
  // FETCH DATA IS SIDE EFFECT
  useEffect(() => {
    getItems((items) => setList(items))
  }, []);

  return (
    <>
    <Container>
      <Row>
        <h1>Partnership form</h1>
      </Row>
    </Container>
    <ProfileForm handleSubmit={_addItem} />
    </>
  )


}

export default Result;