import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron.jsx";
import {Input, FormBtn, TextArea} from "../components/Form";
import API from "../utils/API.js";
import { List, ListItem } from "../components/List";
import DeleteBtn from "../components/DeleteBtn";

class Home extends Component {
  state = {
    article: {
      title: "An article",
      author: "Sopmebody",
      data: ""
    },
    q: "",
    start_year:"",
    end_year:"",
  };
  
  showArticles = () =>{
    API.getArticles({
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
          <Col size="md-6">
            <Jumbotron>
              <h1>NYT</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Submit
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Articles Saved On My List</h1>
            </Jumbotron>
            {this.state.article.length ? (
              <List>
                {this.state.article.map(article => (
                  <ListItem key={article._id}>
                    <Link to={"/articles/" + article._id}>
                      <strong>
                        {article.title} by {article.author}
                        {article.date}
                        {article.url}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteArticle(article._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
