import React, {Component} from "react";
import Footer from "../components/Footer";

class Home extends Component {
  constructor(props){
    super(props);
    this.state = { articles: []}
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/everything?domains=punchng.com,vanguardngr.com,dailypost.ng,sunnewsonline.com,thisdaylive.com&pageSize=99&apiKey=955552661b2a4d018ca8db24cf87012b"
    )
      .then((response) => response.json())
      .then((data) => this.setState({articles: data.articles})).catch(error => {console.log(error)});
  };

  render() {
    const { articles } = this.state;
    return (
      <>
        <section className="jumbotron">
          <h1 className="text-center">Welcome to ProyceNews</h1>
        </section>

        <section className="container-fluid">
          {this.state.articles.map((item, index)=>{
            return (
              <section className="card">
                <section className="card-body">
                  <img
                    src={
                      item.urlToImage || "https://www.presentation-3d.com/image/maker3d/demos/3dlogo120601.png" ||
                      "https://lh3.googleusercontent.com/proxy/VMrqqNQvBqsBnB9pGEyU5fuaTR2r7_uBXl4L4pP3hjbPnrTIhfFwfrtyVyLGapo0Eb4Q1cMARrhdx40fXFFtjjRzC35WEMKBgIRRe5tDuzRnEoN82M9JEFwXK_qzH8eOif0"
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
                  <p className="card-text"><small className="text-success">Published {new Date(item.publishedAt).toDateString()}</small></p>
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
};

export default Home;