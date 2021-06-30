import React from "react";
import { Field, reduxForm } from "redux-form";

class UserCreate extends React.Component {
    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }
    renderInput = ({ input, label, type, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} type={type} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        )
    }
    onSubmit(formValues) {
        console.log(formValues)
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                <Field name="name" label="Enter a name" type="text" component={this.renderInput} />
                <Field name="surname" label="Enter a surname" type="text" component={this.renderInput} />
                <Field name="email" label="Enter an email" type="email" component={this.renderInput} />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.name) {
        errors.name = "You must enter a name"
    }
    if (!formValues.surname) {
        errors.surname = "You must enter a surname"
    }
    if (!formValues.email) {
        errors.email = "You must enter a valid email"
    }
    return errors;
};

export default reduxForm({
    form: "userCreate",
    validate
})(UserCreate);