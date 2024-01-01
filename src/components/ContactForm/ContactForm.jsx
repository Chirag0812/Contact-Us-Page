import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { MdMessage } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { useState } from "react";

// let myImg= require('./myImg.jpg')

const ContactForm = () => {
  const [name, setName] = useState("Name_Appears_here");
  const [email, setEmail] = useState("Email_Appears_here");
  const [text, setText] = useState("Text_Appears_here");

  const submitHandler = (event) => {
    event.preventDefault(); //prevent from Reloading page on submit

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (<>
    <section className={styles.container}>

      {/* Contact Form and buttons */}

      <div className={styles.contact_form}>
        <div className={styles.top_btn}>
          <Button text="VIA SUPPORT CHAT" icon={<MdMessage fontSize="24px" />} />
          <Button text="VIA CALL" icon={<FaPhoneAlt fontSize="24px" />} />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" icon={<HiMail fontSize="24px" />} />

        <form onSubmit={submitHandler}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "centre",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

        
        </form>
      </div>

      {/* IMAGES ADDED HERE  */}
      <div className={styles.FormImg}>
        {/* <img src={myImg} alt="contact_image" width="450px" height="538px"/> */}
      </div>
      
    </section>
            <div className={styles.FormData}> 
           <div>{name}</div>
          <div>{`${email}`}</div>
          <div>{`${text}`}</div>
          </div>
    </> 
  );
};

export default ContactForm;
