import { Component } from "react";
import { connect } from "react-redux";
import { fetchStreams } from "../../actions";

class StreamList extends Component {
    componentDidMount() {
        this.props.fetchStreams();
    }
    renderList() {
        return this.props.streams.map((stream) => {
            return (
                <div className="item" key={stream.id}>
                    <i className="large middle aligned icon camera" />
                    <div className="content">
                        <div className="header">{stream.title}</div>
                        <div className="description">
                            {stream.description}
                            {/* <div className="right floated content">
                                <button className="ui button secondary">
                                    delete
                                </button>
                                <button className="ui button secondary">
                                    edit
                                </button>
                            </div> */}
                        </div>
                    </div>
                </div>
            );
        });
    }
    render() {
        console.log("streams: ", this.props.streams);
        return (
            <div>
                <h2>Streams</h2>
                <div className="ui middle aligned celled list">
                    {this.renderList()}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        streams: Object.values(state.streams) //array of streams
    };
};

export default connect(mapStateToProps, { fetchStreams })(StreamList);
