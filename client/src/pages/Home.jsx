import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron.jsx";
import Form from "../../components/Form";
import API from "../utils/API.js";

class Home extends Component {
  state = {
    article: [],
    q: "",
    start_year:"",
    end_year:"",
  };
  
  showArticle = () =>{
    API.getArticlebyID({
        q: this.state.q,
        start_year: this.state.start_year,
        end_year:this.state.end_year
    })
    .then(res => 
        this.setState({
            article: res.data
        }))
    .catch(e => console.log(e));
  };

  handleInputChange = event => {
      const {name, value} = event.target;
      this.setState({
          [name]:value
      });
  };

  handleFormSubmit = event => {
    event.preventDefault();
      API.saveArticle({
        article: this.state.article,
      })
        .then(res => this.showArticle())
        .catch(err => console.log(err));
  };



  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.article.title} by {this.state.article.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Synopsis</h1>
              <p>
                {this.state.article.synopsis}
              </p>
            </article>
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/">← Back to Home</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
