import { Label } from './Textarea.styles';
import { TextareaProps } from '../../../interfaces/interfaces';

export const Textarea = ({
  id,
  error,
  name,
  onChange,
  onBlur,
  value,
  placeholder,
}: TextareaProps) => {
  return (
    <Label className={error.condition ? 'error' : ''} htmlFor={id}>
      {error.condition ? (
        <div className="formikMessage">{error.message}</div>
      ) : null}
      <textarea
        name={name}
        id={id}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        placeholder={placeholder}
      />
    </Label>
  );
};
