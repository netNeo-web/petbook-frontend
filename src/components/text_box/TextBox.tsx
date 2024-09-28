import './TextBox.css';

interface TextAreaProps {
  placeholder?: string;
  maxLength?: number;
  value: string;
  onChange: (e: any) => void;
}

const TextBox = (props: TextAreaProps) => {
  return (
    <>
      <textarea
        className="text-box"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        maxLength={props.maxLength || 500}
      />
      {/* TODO: separation between textarea & label */}
      <div>
        <label className="text-box-label">
          {props.value.length}/{props.maxLength || 500}{' '}
        </label>
      </div>
    </>
  );
};

export default TextBox;
