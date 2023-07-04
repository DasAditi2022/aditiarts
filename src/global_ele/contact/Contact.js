import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import "./Contact.css"
function Contact() {
    const form = useRef();   
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_xu6hlr8', 'template_g3ayx6b', form.current, 'Fc64tLHLntgVEDJ4J')
        .then((result) => {
            console.log(result.text);
            window.location.reload(false);
        }, (error) => {
            console.log(error.text);
        });
        
    };
    return (
      <section className='contact section' id='contact'>
        <h2 className='section-title'>Get in Touch</h2>
        <span className='section-subtitle'>Contact Me</span>

        <div className='contact-container container grid'>
            <div className='contact-content'>
                <h3 className='contact-title'>Talk to me</h3>
                <div className='contact-info'>
                    <div className='contact-card'>
                        <i className='bx bx-mail-send contact-card-icon'></i>
                        <h3 className='contact-card-title'>Email</h3>
                        <span className='contact-card-data'>user1234@gmail.com</span>
                        <a href="mailto:aditidashgly2002@gmail.com" className='contact-button'>Write me{" "}<i className='bx bx-right-arrow-al contact-button-icon'></i></a>
                    </div>
                    <div className='contact-card'>
                        <i className='bx bxl-whatsapp contact-card-icon'></i>
                        <h3 className='contact-card-title'>Whatsapp</h3>
                        <span className='contact-card-data'>1234567890</span>
                        <a href="http://api.whatsapp.com/send?phone=8293924362&text=Hello, more information!" className='contact-button'>Write me{" "}<i className='bx bx-right-arrow-al contact-button-icon'></i></a>
                    </div>
                </div>
            </div>
            <div className='contact-content'>
                <h3 className='contact-title'>Give your feedback</h3>
                <form ref={form} onSubmit={sendEmail} className='contact-form'>
                    <div className='contact-form-div'>
                        <label className='contact-form-tag'>Name</label>
                        <input type='text' name='name'
                        className='contact-form-input' placeholder='Enter your name'/>
                    </div>
                    <div className='contact-form-div'>
                        <label className='contact-form-tag'>Email</label>
                        <input type='email' name='email'
                        className='contact-form-input' placeholder='Enter your email'/>
                    </div>
                    <div className='contact-form-div contact-form-area'>
                        <label className='contact-form-tag'>Feedback</label>
                        <textarea name='feedback' cols='30' rows='10' 
                        className='contact-form-input' placeholder='Enter your feedback'></textarea>
                    </div>

                    <input type='submit' value ='Send message'  
                    className="button button-flex"/>
        
                </form>
            </div>
        </div>
      </section>
    );
  }
  
  export default Contact;