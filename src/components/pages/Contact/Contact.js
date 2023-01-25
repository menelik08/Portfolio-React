import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div >
      <h1 className="contact-header">Contact</h1>
      <div className="contact-form">
      <div className="mb-3 col-3">
  <label for="exampleFormControlInput1" className="form-label">Email</label>
  <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
</div>
<div className="contact-form">
<div className="mb-3 col-3">
  <label for="exampleFormControlTextarea1" className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
</div>
    </div>
  );
}
export default Contact; 