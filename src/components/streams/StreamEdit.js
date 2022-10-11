import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
    componentDidMount() {
        const streamId = this.props.match.params.id;

        this.props.fetchStream(streamId);
    }
    onSubmit = async (formValues) => {
        console.log(formValues);
        const streamId = this.props.match.params.id;
        await this.props.editStream(streamId, formValues);
    };

    render() {
        const stream = this.props.stream;

        if (!stream) {
            return (
                <div className="ui active inverted dimmer">
                    <div className="ui large text loader">Loading</div>
                </div>
            );
        }

        const INITIAL_VALUES = {
            title: stream.title,
            description: stream.description
        };

        return (
            <div>
                <h3>Edit Stream</h3>
                <StreamForm
                    initialValues={INITIAL_VALUES}
                    onSubmit={this.onSubmit}
                />
            </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    const streamId = ownProps.match.params.id;

    return {
        stream: state.streams[streamId]
    };
};

export default connect(mapStateToProps, { fetchStream, editStream })(
    StreamEdit
);
