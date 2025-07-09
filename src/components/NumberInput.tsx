import React from 'react';

interface NumberInputProps {
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange }) => (
  <input
    type="number"
    value={value}
    onChange={onChange}
    placeholder="Enter a prime number"
    min={2}
    step={1}
  />
);

export default NumberInput;