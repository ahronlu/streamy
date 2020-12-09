import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Form } from "semantic-ui-react";

class StreamCreate extends Component {
  renderInput({ input, label }) {
    return (
      <Form.Field>
        <label>{label}</label>
        <input {...input} />
      </Form.Field>
    );
  }
  render() {
    return (
      <Form>
        <Field name="Title" component={this.renderInput} label="Enter Title" />
        <Field
          name="Description"
          component={this.renderInput}
          label="Enter Description"
        />
      </Form>
    );
  }
}

export default reduxForm({ form: "stramCreate" })(StreamCreate);
