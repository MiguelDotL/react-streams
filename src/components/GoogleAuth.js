import { Component } from "react";
const { REACT_APP_OAUTH_CLIENT_ID } = process.env;

// TODO Refactor to use Google Identity Services JavaScript library (Sign In With Google or OneTap)
// **** https://developers.google.com/identity/gsi/web/guides/migration

class GoogleAuth extends Component {
    state = { isSignedIn: null };
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
                    this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                    this.auth.isSignedIn.listen(this.onAuthChange);
                });
        });
    }

    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };

    doSignIn = () => {
        this.auth.signIn();
    };

    doSignOut = () => {
        this.auth.signOut();
    };

    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return (
                <button className="ui basic labeled loading icon button">
                    Sign Out
                </button>
            );
        } else if (this.state.isSignedIn) {
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

export default GoogleAuth;
