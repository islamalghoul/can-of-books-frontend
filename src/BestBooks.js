import React from 'react';
import axios from 'axios'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Forms from './Forms';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showFlag:false,
      updateBook:{}
    }
  }
componentDidMount=()=>{
  axios.get(`${process.env.REACT_APP_URL}books`).then(result=>{
console.log(result.data)
this.setState({
  books:result.data
})
  }).catch(err=>{
    console.log(err)
  })
}
handelSubmit=(e)=>{
  e.preventDefault()
  let obj={
    title:e.target.title.value,
    description:e.target.description.value,
    status:e.target.status.value
  }
 axios.post(`${process.env.REACT_APP_URL}books`,obj).then(result=>{
  this.setState({
    books:result.data
  })

 }).catch(err=>{
  console.log(err)
 })
}
handelDelet=(id)=>{
  axios.delete(`${process.env.REACT_APP_URL}books/${id}`).then(result=>{
    this.setState({
      books:result.data
    })

  }).catch(err=>{
    console.log(err)
  })
}
handelShow=(ele)=>{
this.setState({
  showFlag: true,
  updateBook:ele
})
}
handelClose=()=>{
  this.setState({
    showFlag:false
  })
}
handelUpdate=(e)=>{
e.preventDefault()
let id=this.state.updateBook._id
let obj={
  title:e.target.title.value,
  description:e.target.description.value,
  status:e.target.status.value}
  axios.put(`${process.env.REACT_APP_URL}books/${id}`,obj).then(result=>{
    console.log(result.data)
this.setState({
  books:result.data
})
this.handelClose()
  }).catch(err=>{
    console.log(err)
  })
}
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        {this.state.books.length ? (<div>
          <Form onSubmit={this.handelSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name='title' placeholder="Enter the name of your book" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" name='description' placeholder="Enter the description" />
      
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">

        <Form.Control type="text" name='status' placeholder="Enter the status" />
      </Form.Group>
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
        
          
           <Row xs={1} md={3} className="g-4">
               
          { this.state.books.map(ele =>{
            return(

              <Col>
          <Card>
            <Card.Body>
              <Card.Title>{ele.title}</Card.Title>
              <Card.Text>
                <p> {ele.description}</p>
               <p>{ele.status}</p>
               <Button variant="primary" type="submit" onClick={()=>{this.handelDelet(ele._id)}}>
      Delet the book
      </Button>
      <Button variant="primary" type="submit" onClick={()=>this.handelShow(ele)}>
      Update the book
      </Button>
      <Forms show={this.state.showFlag} handelClose={this.handelClose}  updateBook={this.state.updateBook} handelUpdate={this.handelUpdate} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
          

            )
           })}
          
           </Row>
           </div>
           
           
              
        ) : (
          <h3>No Books Found :(</h3>
        )}  
      </>
    )
  }
}

export default BestBooks;
