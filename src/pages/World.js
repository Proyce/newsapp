import React, { Component } from "react";
import Footer from "../components/Footer";

class WorldNews extends Component {
  constructor(props) {
    super(props);
    this.state = { articles: [] };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?domains=aljazeera.com,politico.eu&pageSize=99&apiKey=955552661b2a4d018ca8db24cf87012b"
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
          <h1>WorldNews</h1>
        </section>

        <section className="container-fluid">
          {this.state.articles.map((item, index) => {
            return (
              <section className="card row">
                <section className="card-body col-lg-12 col-md-12 col-sm-12">
                  <img
                    src={
                      item.urlToImage || "https://store-images.s-microsoft.com/image/apps.8122.9007199266250472.bd38277b-68a6-495a-b958-d3b3684b1bac.db21ce85-c9cb-4bd9-abd6-dcb9942308ab?mode=scale&q=90&h=300&w=300" || 
                      "https://lh3.googleusercontent.com/proxy/VMrqqNQvBqsBnB9pGEyU5fuaTR2r7_uBXl4L4pP3hjbPnrTIhfFwfrtyVyLGapo0Eb4Q1cMARrhdx40fXFFtjjRzC35WEMKBgIRRe5tDuzRnEoN82M9JEFwXK_qzH8eOif0" || "https://wtxnews.com/wp-content/uploads/2019/10/world_news_breifing-service.jpg"
                    }
                    className="card-img-top"
                    alt="News Img"
                  />
                  <h5 className="card-title">{item.title}</h5>
                  <p className="card-text">{item.description}</p>
                  {/* <p className="card-text">{item.content}</p> */}
                  <p className="card-text">
                    <small className="text-danger">{item.author}</small>
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

export default WorldNews;
