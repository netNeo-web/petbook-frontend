import React from 'react';
import './TextField.css';

interface TextFieldProps {
  placeholder?: string;
  type?: string;
}

const TextField = (props: TextFieldProps) => {
  return (
    <>
      <input 
        className="custom-input"
        placeholder={props.placeholder} 
        type={props.type}
      />
    </>
  );
};

export default TextField;
