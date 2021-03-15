import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Porfolio extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Some coding projects</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            resumeData.portfolio && resumeData.portfolio.map((item)=>{
              return(
                <div className="columns portfolio-item">
                    <a href={item.url} target="_blank" rel="noopener noreferrer">
                      <img src={`${item.imgurl}`} />
                      <div className="overlay">
                        <div className="portfolio-item-meta">
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </a>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}
