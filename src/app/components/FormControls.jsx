// External Dependencies
import React from 'react';
import {
  TextField,
  Checkbox,
  FormControlLabel,
  FormControl,
  Select,
  InputLabel,
  FormHelperText,
  Radio,
  RadioGroup,
} from '@material-ui/core';
import { Field } from 'react-final-form';
import { makeStyles } from '@material-ui/core/styles';
import InputMask from 'react-input-mask';

// Create the styles for the properties panel
export const useStyles = makeStyles(theme => ({
  form: {
    width: '100%',
  },
}));

/**
 * Text Field Form component
 * @param {Object} props -- Contains form meta and field props
 */
export const Text = ({ name, fieldProps, mask, ...custom }) => {
  return (
    <Field name={name} {...fieldProps}>
      {({ input, meta: { touched, error } }) => {
        const Control = controlProps => (
          <TextField
            {...controlProps}
            fullWidth
            error={touched && Boolean(error)}
            helperText={touched && error}
            name={name}
            variant="outlined"
            id={name}
            autoComplete={name}
            {...custom}
          />
        );

        return mask ? (
          <InputMask disabled={mask === undefined} mask={mask} {...input}>
            {InputProps => Control(InputProps)}
          </InputMask>
        ) : (
          Control(input)
        );
      }}
    </Field>
  );
};

/**
 * Check Box Form component
 * @param {Object} props -- Contains form meta and field props
 */
export const Check = ({ input, label }) => (
  <div>
    <FormControlLabel control={<Checkbox checked={input.value ? true : false} onChange={input.onChange} />} label={label} />
  </div>
);

/**
 * Radio Button Form component
 * @param {Object} props -- Contains form meta and field props
 */
export const RadioButton = ({ input, ...rest }) => (
  <FormControl>
    <RadioGroup {...input} {...rest}>
      {options.map(option => (
        <FormControlLabel value={option.value} control={<Radio />} label={option.label} />
      ))}
    </RadioGroup>
  </FormControl>
);

/**
 * Form Helper Form component renders errors when present
 * @param {Object} props -- Contains form meta and field props
 */
export const FormHelper = ({ touched, error }) => touched && error && <FormHelperText>{touched && error}</FormHelperText>;

/**
 * Dropdown Form component
 * @param {Object} props -- Contains form meta and field props
 */
export const SelectField = ({ id, name, input, label, meta: { touched, error }, children, ...custom }) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor={id}>Age</InputLabel>
    <Select
      {...input}
      {...custom}
      inputProps={{
        name,
        id,
      }}
    >
      {children}
    </Select>
    <FormHelper touched={touched} error={error} />
  </FormControl>
);
