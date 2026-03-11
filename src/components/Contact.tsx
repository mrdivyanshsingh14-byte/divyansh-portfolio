import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href="mailto:singhdivyansh835@gmail.com" data-cursor="disable">
                singhdivyansh835@gmail.com
              </a>
            </p>
            <h4>Education</h4>
            <p>Btec in Computer Science</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/mrdivyanshsingh14-byte"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/divyansh-singh-90a391354?utm_source=share_via&utm_content=profile&utm_medium=member_android"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
            <a
              href="https://x.com/DivyanshSi34095"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Twitter <MdArrowOutward />
            </a>
            <a
              href="https://www.instagram.com/divyanshsingh__7"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Instagram <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Divyansh Singh</span>
            </h2>
            <h5>
              <MdCopyright /> 2026 Divyansh Singh. All rights reserved.
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
