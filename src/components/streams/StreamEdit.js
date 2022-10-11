import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";

class StreamEdit extends Component {
    componentDidMount() {
        const streamId = this.props.match.params.id;

        this.props.fetchStream(streamId);
    }

    render() {
        const stream = this.props.stream;

        if (!stream) {
            return (
                <div className="ui active inverted dimmer">
                    <div className="ui large text loader">Loading</div>
                </div>
            );
        }

        return (
            <div>
                <h2>Edit Stream</h2>
                <div>Title: {stream.title}</div>
                <div>Description: {stream.description}</div>
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
