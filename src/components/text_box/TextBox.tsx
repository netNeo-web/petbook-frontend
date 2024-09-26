import React, { useState } from 'react';
import './TextBox.css';

interface TextAreaProps {
  placeholder?: string;
  maxLength?: number;
}

const TextBox = (props: TextAreaProps) => {
  const [text, setText] = useState('');

  const onLengthChange = (e: any) => {
    const newValue = e.target.value;
    if (newValue.length <= (props.maxLength || 500)) {
      setText(newValue);
    }
  };

  return (
    <>
      <textarea
        className="text-box"
        placeholder={props.placeholder}
        value={text}
        onChange={onLengthChange}
        maxLength={props.maxLength || 500}
      />
      {/* TODO: separation between textarea & label */}
      <div>
        <label className="text-box-label">
          {text.length}/{props.maxLength || 500}{' '}
        </label>
      </div>
    </>
  );
};

export default TextBox;
