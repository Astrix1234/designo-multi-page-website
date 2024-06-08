import { Label } from './LabelInput.styles';
import { LabelInputProps } from '../../../interfaces/interfaces';
import { IconError } from '../../../Icons/IconError/IconError';

export const LabelInput = ({
  id,
  error,
  type,
  name,
  onChange,
  onBlur,
  value,
  placeholder,
}: LabelInputProps) => {
  return (
    <Label className={error.condition ? 'error' : ''} htmlFor={id}>
      {error.condition ? (
        <div className="formikMessage">
          {error.message}
          <IconError />
        </div>
      ) : null}
      <input
        type={type}
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
