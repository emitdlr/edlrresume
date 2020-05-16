import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    // eslint-disable-next-line
    // let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head center">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          <div className="row">
            <aside className="eight columns footer-widgets">
              <div className="widget">
                <h1>Contact Me</h1>
              </div>
            </aside>
          </div>
        </section>
        );
  }
}
