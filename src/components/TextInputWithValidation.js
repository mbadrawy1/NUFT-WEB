import React, { useState } from "react";
import "./css/TextInputWithValidation.css"; // Import the CSS file for styling (create this file with the provided styles)

const TextInputWithValidation = ({
  label,
  placeholder,
  maxLength,
  onValueChange,
  type = "text", // Added type prop with default value "text"
}) => {
  const [isInputEmpty, setIsInputEmpty] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState(true); // Added state to track email validity
  const [text, setText] = useState("");

  const handleTextChange = (newText) => {
    setText(newText);

    // Check if the input is empty
    setIsInputEmpty(newText.trim() === "");

    // Check email validity if the input type is "email"
    if (type === "email") {
      setIsValidEmail(newText.includes("@")); // Simple check for "@" symbol
    }

    // Call the onValueChange callback if provided
    if (onValueChange) {
      onValueChange(newText);
    }
  };

  return (
    <div>
      <div>
        <label className="label">{label}</label>
        <input
          type={type} // Set input type
          value={text}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder={placeholder}
          onBlur={() => setIsInputEmpty(text.trim() === "")}
          className={`textInput ${
            isInputEmpty || !isValidEmail ? "errorInput" : ""
          }`} // Add error class for invalid email
          maxLength={maxLength}
        />
        {/* Show error message for empty input */}
        {isInputEmpty && <p className="errorText">This field is required</p>}
        {/* Show error message for invalid email */}
        {!isValidEmail && (
          <p className="errorText">Please enter a valid email address</p>
        )}
        <p>
          {text.length}/{maxLength} characters
        </p>
      </div>
    </div>
  );
};

export default TextInputWithValidation;
