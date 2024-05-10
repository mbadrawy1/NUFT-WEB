import React, { useState } from "react";
import TextInputWithValidation from "../components/TextInputWithValidation";
import MessageInput from "../components/MessageInput";
import BelowHeader from "../components/BelowHeader";
import { MdEmail } from "react-icons/md";
import {
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTelegram,
  FaTiktok,
  FaYoutube,
} from "react-icons/fa";
import { FaSquareThreads, FaSquareXTwitter } from "react-icons/fa6";

function ContactUs() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = { name, email, message };
    // Simulate form submission (replace with your backend logic)
    setStatus("Thank you for your message! We will be in touch soon.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div style={styles.container}>
      <div style={{ marginTop: 50 }}>
        <BelowHeader title="CONTACT US" goTo="ContactUs"></BelowHeader>
      </div>
      <h1 style={styles.title}>Contact Info</h1>
      <div style={styles.iconContainer}>
        <p>
          <a style={{ height: 100 }} href="mailto:info@nuft.com">
            <MdEmail style={{ marginTop: 30 }} color="black" /> info@nuft.com
          </a>
        </p>
        <p>
          <FaWhatsapp />
          +20 114 3545184
        </p>
        <div style={styles.socialIconsContainer}>
          <a
            href="https://www.facebook.com/NUFT.EG"
            target="_blank"
            rel="noreferrer"
          >
            <FaFacebook color="black" style={styles.icon} />
          </a>
          <a
            href="https://www.instagram.com/nuft.eg/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram color="black" style={styles.icon} />
          </a>
          <a
            href="https://twitter.com/NUFT_EG"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareXTwitter color="black" style={styles.icon} />
          </a>
          <a
            href="https://www.linkedin.com/company/nufteg/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin color="black" style={styles.icon} />
          </a>
          <a
            href="https://t.me/Egyptian_NAT_Universties_bot"
            target="_blank"
            rel="noreferrer"
          >
            <FaTelegram color="black" style={styles.icon} />
          </a>
          <a
            href="https://www.tiktok.com/@NUFT.EG"
            target="_blank"
            rel="noreferrer"
          >
            <FaTiktok color="black" style={styles.icon} />
          </a>
          <a
            href="https://www.youtube.com/@nuft_eg"
            target="_blank"
            rel="noreferrer"
          >
            <FaYoutube color="black" style={styles.icon} />
          </a>
          <a
            href="https://www.threads.net/@nuft.eg"
            target="_blank"
            rel="noreferrer"
          >
            <FaSquareThreads color="black" style={styles.icon} />
          </a>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <TextInputWithValidation
          label="Name:  "
          placeholder="Enter Name"
          maxLength={30}
          onValueChange={(newValue) => setName(newValue)}
        />
        <TextInputWithValidation
          label="Email:  "
          type="email"
          placeholder="Enter Email"
          maxLength={30}
          onValueChange={(newValue) => setEmail(newValue)}
        />
        <MessageInput
          label="Message  "
          placeholder="Enter Message"
          maxLength={30}
          onValueChange={(newValue) => setMessage(newValue)}
        ></MessageInput>
        <button style={styles.button} type="submit">
          Submit
        </button>
        {status && <p style={styles.status}>{status}</p>}
      </form>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    backgroundColor: "#f7f7ff",
    margin: 0,
  },
  title: {
    fontSize: "24px",
    color: "grey",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  iconContainer: {
    marginBottom: "20px",
  },
  socialIconsContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "10px",
  },
  icon: {
    marginRight: 5,
    marginLeft: 5,
  },
  button: {
    padding: "10px 20px",
    backgroundColor: "#4CAF50",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    ShadowRoot: "0.1s",
  },
  status: {
    marginTop: "10px",
    color: "green",
  },
};
export default ContactUs;
