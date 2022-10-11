import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from "./StreamForm";

class StreamEdit extends Component {
    constructor(props) {
        super(props);
        this.streamId = this.props.match.params.id;
    }

    componentDidMount() {
        this.props.fetchStream(this.streamId);
    }
    onSubmit = async (formValues) => {
        await this.props.editStream(this.streamId, formValues);
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
