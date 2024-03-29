import React from 'react';
import { Form, Select, Label } from 'semantic-ui-react';

const SelectInput = ({
  input,
  type,
  placeholder,
  multiple,
  options,
  meta: { touched, error }
}) => {
  return (
    <Form.Field>
      <Select
        error={touched && !!error}
        onChange={(e, data) => input.onChange(data.value)}
        options={options}
        multiple={multiple}
      />
      {touched && error && (
        <Label basic color='red'>
          {error}
        </Label>
      )}
    </Form.Field>
  );
};

export default SelectInput;
