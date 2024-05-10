import React, { useState } from "react";

const MessageInput = ({ label, placeholder, maxLength, onValueChange }) => {
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);

    if (onValueChange) {
      onValueChange(newText);
    }
  };

  return (
    <div>
      <label style={styles.label}>{label}</label>
      <div style={styles.container}>
        <textarea
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder={placeholder}
          onBlur={() => setIsInputEmpty(text.trim() === "")}
          style={styles.messageInput}
          maxLength={maxLength}
        />
        {isInputEmpty && <p style={styles.errorText}>This field is required</p>}
        <p>
          {text.length}/{maxLength} characters
        </p>
      </div>
    </div>
  );
};

export default MessageInput;

const styles = {
  container: {
    flexDirection: "column", // Arrange items vertically
    alignItems: "center", // Center items horizontally
  },
  label: {
    fontWeight: "bold",
    width: 150,
  },
  messageInput: {
    borderColor: "gray",
    padding: 10,
    borderWidth: 1, // Changed border to borderWidth
    borderRadius: 4,
    width: 300,
    height: 300,
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
};
