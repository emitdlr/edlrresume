import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    //eslint-disable-next-line
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions!</p>
            </div>
          </div>
          <div className="row">
            <aside className="six columns footer-widgets">
              <div className="widget">
                <h1>Email Me at:</h1>
                <p>emit@utexas.edu</p>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}