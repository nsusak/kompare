import React from "react";
import { Field, reduxForm } from "redux-form";

class UserCreate extends React.Component {
    renderInput({ input, label }) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input} />
            </div>

        )
    }
    onSubmit(formValues) {
        console.log(formValues)
    }
    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
                <Field name="name" label="Enter a name" component={this.renderInput} />
                <Field name="surname" label="Enter a surname" component={this.renderInput} />
                <Field name="email" label="Enter an email" component={this.renderInput} />
                <button className="ui button primary">Submit</button>
            </form>
        )
    }
}

export default reduxForm({
    form: "userCreate"
})(UserCreate);