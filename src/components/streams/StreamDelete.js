import React from "react";
import Modal from "../Modal";
import history from "../../history";
import { fetchStream, deleteStream } from "../../actions";
import { connect } from "react-redux";
import StreamList from "./StreamList";

class StreamDelete extends React.Component {
    constructor(props) {
        super(props);

        this.streamId = this.props.match.params.id;

        this.modalConfig = {
            onDismiss: this.onDismiss,
            size: "small",
            title: "Delete Stream",
            header: "🐥 Cheese and Quackers!",
            body: "Are you sure you want to delete this stream?",
            buttons: this.renderButtons()
            // description: this.renderDescription(),
        };
    }

    componentDidMount() {
        this.props.fetchStream(this.streamId);
        // this.modalConfig.description = this.renderDescription();
    }

    onDismiss = () => history.push("/");
    onDelete = () => this.props.deleteStream(this.streamId);

    renderContent() {
        const stream = this.props.stream;

        if (stream) {
            return (
                <h3>
                    <span>Title:</span>
                    <div className="ui teal label">{stream.title}</div>
                </h3>
            );
        }
    }

    renderButtons() {
        return (
            <React.Fragment>
                <div className="ui black deny button" onClick={this.onDismiss}>
                    Nope
                </div>
                <div
                    className="ui negative right labeled icon button"
                    onClick={this.onDelete}
                >
                    Yep, Delete It!
                    <i className="trash alternate icon"></i>
                </div>
            </React.Fragment>
        );
    }

    render() {
        return (
            <div>
                <StreamList />
                <Modal
                    config={this.modalConfig}
                    description={this.renderContent()}
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

export default connect(mapStateToProps, { fetchStream, deleteStream })(
    StreamDelete
);
