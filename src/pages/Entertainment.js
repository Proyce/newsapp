import React, { Component } from "react";
import Footer from "../components/Footer";

class Entertainment extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=955552661b2a4d018ca8db24cf87012b"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ articles: data.articles }))
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    const { articles } = this.state;
    return (
      <>
        <section className="jumbotron">
          <h1 className="text-danger text-center">Entertainment News</h1>
        </section>

        <section className="container-fluid">
          {this.state.articles.map((item, index) => {
            return (
              <section className="card">
                <img
                  src={
                    item.urlToImage ||
                    "https://www.nairaland.com/attachments/4408186_entertainmentnewslogo500x281_jpeg415a64151099751aa41fc0df6a422e9f"
                  }
                  className="card-img-top"
                  alt="News Img"
                />
                <section className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  {/* <p className="card-text">{item.content}</p> */}
                  <p className="card-text">
                    <small className="text-muted">{item.author}</small>
                  </p>
                  <p className="card-text">
                    <small className="text-success">
                      Published {new Date(item.publishedAt).toDateString()}
                    </small>
                  </p>
                  <p className="card-text">
                    <small className="text-muted">{item.name}</small>
                  </p>
                  <a href={item.url} className="btn btn-primary">
                    News Details
                  </a>
                </section>
              </section>
            );
          })}
        </section>
        <Footer/>
      </>
    );
  }
}

export default Entertainment;
