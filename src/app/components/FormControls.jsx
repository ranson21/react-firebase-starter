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
import { makeStyles } from '@material-ui/core/styles';

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
export const Text = ({ label, input, meta: { touched, invalid, error }, ...custom }) => (
  <TextField
    size="small"
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

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
