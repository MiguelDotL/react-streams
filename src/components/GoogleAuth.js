import { Component } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

const { REACT_APP_OAUTH_CLIENT_ID } = process.env;

// TODO Refactor to use Google Identity Services JavaScript library (Sign In With Google or OneTap)
// **** https://developers.google.com/identity/gsi/web/guides/migration

class GoogleAuth extends Component {
    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client
                .init({
                    clientId: REACT_APP_OAUTH_CLIENT_ID,
                    scope: "email",
                    plugin_name: "streamling"
                })
                .then(() => {
                    this.auth = window.gapi.auth2.getAuthInstance();
                    this.user = this.auth.currentUser.get();

                    this.onAuthChange(this.auth.isSignedIn.get());
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.user.getId());
        } else {
            this.props.signOut();
        }
    };

    doSignIn = () => {
        this.auth.signIn();
    };

    doSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return (
                <button className="ui basic labeled loading icon button">
                    Sign Out
                </button>
            );
        } else if (this.props.isSignedIn) {
            return (
                <button
                    onClick={this.doSignOut}
                    className="ui labeled google plus icon button"
                >
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button
                    onClick={this.doSignIn}
                    className="ui labeled google plus icon button"
                >
                    <i className="google icon" />
                    Sign In With Google
                </button>
            );
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
