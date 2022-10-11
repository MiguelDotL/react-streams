import { Component } from "react";
import { Field, reduxForm } from "redux-form";

class StreamForm extends Component {
    renderError({ touched, error }) {
        if (touched && error) {
            return (
                <div className="ui small warning message">
                    <div className="header">{error.head}</div>
                    <div className="">{error.body}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, label, meta }) => {
        const className = `field ${meta.error && meta.touched ? "error" : ""}`;
        return (
            <div className={className}>
                <label>{label}</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    };

    onSubmit = (formValues) => {
        // console.log("formValues: ", formValues);
        this.props.onSubmit(formValues);
    };

    render() {
        console.log("props: ", this.props);
        return (
            <form
                className="ui form warning"
                onSubmit={this.props.handleSubmit(this.onSubmit)}
            >
                <Field
                    name="title"
                    label="Stream Title"
                    component={this.renderInput}
                />
                <Field
                    name="description"
                    label="Stream Description"
                    component={this.renderInput}
                />
                <button className="ui primary button">Submit</button>
            </form>
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.title) {
        errors.title = {
            head: " 🐣 Wait!",
            body: " Your stream needs a!"
        };
    }
    if (!formValues.description) {
        errors.description = {
            head: "🐥 Quackers!",
            body: "Don't forget to add a description to your stream to help others find you!"
        };
    }
    return errors;
};

export default reduxForm({
    form: "streamForm",
    validate
})(StreamForm);
