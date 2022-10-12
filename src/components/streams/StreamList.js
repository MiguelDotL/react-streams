import { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }

    renderEditButtons = (stream) => {
        if (stream.userId === this.props.currentUserId) {
            return (
                <div className="right floated content">
                    <Link
                        to={`/streams/edit/${stream.id}`}
                        className="ui button"
                    >
                        Edit
                    </Link>
                    <Link
                        to={`/streams/delete/${stream.id}`}
                        className="ui basic red button"
                    >
                        Delete
                    </Link>
                </div>
            );
        }
    };

    renderList = () => {
        return this.props.streams.map((stream) => {
            return (
                <div className="item" key={stream.id}>
                    {this.renderEditButtons(stream)}
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <div className="header">{stream.title}</div>
                        <div className="description">{stream.description}</div>
                    </div>
                </div>
            );
        });
    };

    renderCreateStreamButton = (stream) => {
        if (this.props.isSignedIn) {
            return (
                <div className="content" style={{ textAlign: "right" }}>
                    <Link
                        to={"/streams/new"}
                        className="ui primary labeled icon button"
                    >
                        <i class="plus icon"></i>
                        Create Stream
                    </Link>
                </div>
            );
        }
    };

    render() {
        // console.log("streams: ", this.props.streams);
        return (
            <div className="ui segment">
                <h2>Streams</h2>
                <div className="ui middle aligned celled list">
                    {this.renderList()}
                </div>
                {this.renderCreateStreamButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams), //array of streams
        currentUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
