import React from 'react';
import './TextField.css';

interface TextFieldProps {
  placeholder?: string;
  type?: string;
  required?: boolean;
}

const TextField = (props: TextFieldProps) => {
  return (
    <>
      <input
        className="custom-input"
        placeholder={props.placeholder}
        type={props.type}
        required={props.required}
      />
    </>
  );
};

export default TextField;
