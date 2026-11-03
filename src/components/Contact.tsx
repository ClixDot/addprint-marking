import './Contact.css';
import { MapPin, Phone, Mail, Smartphone, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Let's Talk About Your Project</h2>
            <p className="contact-subtitle">Get in touch with our team of experts to find the perfect solution for your business.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="contact-icon"><MapPin size={24} /></div>
                <div className="contact-text">
                  <strong>ADDPRINT</strong><br />
                  ADDPRINT MARKING SYSTEMS TRADING LLC<br />
                  AL KHUBAISI. DEIRA DUBAI
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Phone size={24} /></div>
                <div className="contact-text">
                  <strong>Phone</strong><br />
                  +971 4 2985655
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Smartphone size={24} /></div>
                <div className="contact-text">
                  <strong>Mobile</strong><br />
                  +971 50 598 9716
                </div>
              </div>
              
              <div className="contact-item">
                <div className="contact-icon"><Mail size={24} /></div>
                <div className="contact-text">
                  <strong>Email</strong><br />
                  <a href="mailto:trotec@addprint.net">trotec@addprint.net</a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" placeholder="John Doe" required />
              </div>
              <div className="form-group">
                <label htmlFor="company">Company</label>
                <input type="text" id="company" placeholder="Your Company Ltd." />
              </div>
              <div className="form-group-row">
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="john@example.com" required />
                </div>
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="+971 XX XXX XXXX" />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="project">Project / Requirement</label>
                <input type="text" id="project" placeholder="E.g., Laser Cutting Machine" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea id="message" rows={4} placeholder="How can we help you?" required></textarea>
              </div>
              <button type="submit" className="btn btn-primary form-submit">
                <span>Send Enquiry</span>
                <span className="btn-arrow-circle">
                  <ArrowRight size={14} />
                </span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
