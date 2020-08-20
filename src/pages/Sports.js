import React, { Component } from "react";
import Footer from "../components/Footer";

class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey=955552661b2a4d018ca8db24cf87012b"
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
          <h1 className="text-danger text-center">Sports News</h1>
        </section>

        <section className="container-fluid">
          {this.state.articles.map((item, index) => {
            return (
              <section className="card">
                <section className="card-body">
                  <img
                    src={
                      item.urlToImage || "https://thehearup.com/wp-content/uploads/2020/05/Sports-News.jpg" ||
                      "https://ak.picdn.net/shutterstock/videos/2705165/thumb/10.jpg" 
                    }
                    className="card-img-top"
                    alt="News Img"
                  />
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

export default Sports;
