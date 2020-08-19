import React, { Component } from "react";

class Technology extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?domains=techcrunch.com,mashable.com,zdnet.com,wired.com,arstechnica.com,thenextweb.com,engadget.com,theverge.com,gizmodo.com,cnet.com,techradar.com,androidcentral.com&pageSize=99&apiKey=955552661b2a4d018ca8db24cf87012b"
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
          <h1>Technology News</h1>
        </section>

        <section className="container-fluid">
          {this.state.articles.map((item, index) => {
            return (
              <section className="card">
                <section className="card-body">
                  <img
                    src={
                      item.urlToImage ||
                      "https://cloudfront-us-east-1.images.arcpublishing.com/gray/BDFOS4QAH5KYPBL3KPMMGOTIHU.jpg"
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
      </>
    );
  }
}

export default Technology;
