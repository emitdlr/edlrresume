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
                          <h2>{item.name}</h2>
                          <h5>{item.description}</h5>
                          <h3><a href= {item.purl} target="_blank" rel="noopener noreferrer"> <i className={item.className}></i></a></h3>
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
