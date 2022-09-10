import React, { Component } from 'react';
export default class ContactMe extends Component {
  render() {
    // pulls info from resume data 
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me on <a href={resumeData.linkedinId} target="blank"> LinkedIn</a> or send me an email at <a href={resumeData.email} target="blank">Daisan@mail.com</a>
              </p>
            </div>
          </div>

        </section>
        );
  }
}