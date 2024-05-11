import React, { ChangeEvent } from 'react';
import { IRModel } from '../customHooks/useRModel';

interface TextBoxProps {
  rModel: IRModel<any>;
  onInputChange?: (newValue: string) => void;
  className?: string;
  type: string;
}

const TextBox: React.FC<TextBoxProps> = ({
  rModel,
  onInputChange,
  className = '',
  type = 'text',
}) => {

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (type === 'number') {
      rModel.value = Number(newValue);
    } else {
      rModel.value = newValue;
    }

    if (onInputChange) {
      onInputChange(newValue);
    }
  };

  return (
    <input
      type={type}
      value={rModel.state}
      onChange={handleInputChange}
      className={className}
    />
  );
};

export default TextBox;
