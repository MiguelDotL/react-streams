import "../assets/styles/Modal.css";
import React from "react";
import ReactDOM from "react-dom";
import logoStroke from "../assets/images/logo-stroke-512.png";

const Modal = (props) => {
    const modal = props.config;
    const stopBubbleUp = (e) => e.stopPropagation();

    return ReactDOM.createPortal(
        <div
            className="ui dimmer transition visible active"
            onClick={modal.onDismiss}
        >
            <div // modal sizes ["fullscreen", "large", "", "small", "tiny", "mini"]
                className={`ui modal ${modal.size} transition visible active`}
                onClick={stopBubbleUp}
            >
                <i className="close icon" onClick={modal.onDismiss}></i>
                <div className="header">{modal.title}</div>

                <div className="image content">
                    <div className="ui medium image">
                        <img src={logoStroke} alt="streamling logo" />
                    </div>

                    <div className="description">
                        <div className="ui header">{modal.header}</div>
                        <p>{modal.body}</p>
                        <div className="">{props.description}</div>
                    </div>
                </div>

                <div className="actions">{modal.buttons}</div>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default Modal;
