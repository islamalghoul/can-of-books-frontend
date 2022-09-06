import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
export class Forms extends Component {
  render() {
    return (<>
       
      <Modal show={this.props.show} onHide={this.props.handelClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={this.props.handelUpdate}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name='title'  defaultValue={this.props.updateBook.title}  />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name='description' defaultValue={this.props.updateBook.description}  />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">

        <Form.Control type="text" name='status' defaultValue={this.props.updateBook.status} />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        </Modal.Body>
        <Modal.Footer>
         
        </Modal.Footer>
      </Modal>
        </>
    )
  }
}

export default Forms