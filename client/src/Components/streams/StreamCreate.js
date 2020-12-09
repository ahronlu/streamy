import React from "react";
import { Field, reduxForm } from "redux-form";
import { Button, Form, Header, Message } from "semantic-ui-react";

const StreamCreate = (props) => {
  const renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <Message negative>
          <Message.Header>{error}</Message.Header>
        </Message>
      );
    }
  };

  const renderInput = ({ input, label, meta }) => {
    return (
      <Form.Field error={meta.error && meta.touched}>
        <label>{label}</label>
        <input {...input} autoComplete="off" />
        {renderError(meta)}
      </Form.Field>
    );
  };

  const onSubmit = (formValues) => {
    console.log(formValues);
  };

  return (
    <Form onSubmit={props.handleSubmit(onSubmit)}>
      <Field name="title" component={renderInput} label="Enter Title" />
      <Field
        name="description"
        component={renderInput}
        label="Enter Description"
      />
      <Button primary>Submit</Button>
    </Form>
  );
};

const validate = (formValues) => {
  const errors = {};

  if (!formValues.title) {
    errors.title = "You must enter a title";
  }

  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};

export default reduxForm({ form: "stramCreate", validate })(StreamCreate);
