import React from 'react';
import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
componentDidMount=()=>{
  axios.get('http://localhost:3001/books').then(result=>{
console.log(result.data)
this.setState({
  books:result.data
})
  }).catch(err=>{
    console.log(err)
  })
}
  /* TODO: Make a GET request to your API to fetch all the books from the database  */

  render() {

    /* TODO: render all the books in a Carousel */

    return (
      <>
        

        {this.state.books.length ? (
          
           
              <Carousel fade>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
                  alt="First slide" width={'200px'} height='800px'
                />
                <Carousel.Caption>
                  <h3>{this.state.books[0].title}</h3>
                  <p>{this.state.books[0].description}</p>
                  <p>{this.state.books[0].status}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
                  alt="Second slide" width={'200px'} height='800px'
                />
        
                <Carousel.Caption>
                <h3>{this.state.books[1].title}</h3>
                  <p>{this.state.books[1].description}</p>
                  <p>{this.state.books[1].status}</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/640px-A_black_image.jpg"
                  alt="Third slide" width={'200px'} height='800px'
                />
        
                <Carousel.Caption>
                <h3>{this.state.books[2].title}</h3>
                  <p>{this.state.books[2].description}</p>
                  <p>{this.state.books[2].status}</p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            

          
        ) : (
          <h3>No Books Found :(</h3>
        )}  
      </>
    )
  }
}

export default BestBooks;
