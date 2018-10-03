import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import DeleteBtn from "../components/DeleteBtn";


class SavedArticles extends Component {
  state = {
    articles:[]
  };

  componentDidMount() {
    this.loadArticles();
  };

  loadArticles = () => {
    API.getArticles()
      .then(res =>
        this.setState({articles: res.data})
      )
      .catch(err => console.log(err));
  };

  deleteArticles = id => {
    API.deleteArticle(id)
      .then(res => this.loadArticles())
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
            <Jumbotron>
              <h1>What Article Should I Read?</h1>
              </Jumbotron>
        </Row>
        <Row>
        <div className="list-group" >
          {this.state.articles.length ? (
           this.state.articles.map(article => (
            <div className="list-group-item" key={article._id}>
              <div className="row">
                <h5 className="col-sm-8">{article.title}</h5>
                <div className="col-sm-4 text-right">
                  <a className="mr-5" href={article.url}>view</a>
                  <DeleteBtn onClick={() => this.deleteArticles(article._id)} />
                </div>
              </div>
              <div className="row ml-auto">
                <p>{article.byline}</p>
              </div>
            </div>
          ))
        ) : (
          <h3>No Saved Articles Found</h3>
        )
        }
        </div>
        </Row>

      </Container>
    );
  }
}

export default SavedArticles;
