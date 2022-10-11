import "../assets/styles/Modal.css";
import logoStroke from "../assets/images/logo-stroke-512.png";

import React from "react";
import ReactDOM from "react-dom";

const Modal = (props) => {
    const modal = props.config;
    const stopBubbleUp = (e) => e.stopPropagation();

    return ReactDOM.createPortal(
        <div
            className="ui dimmer transition visible active"
            onClick={modal.onDismiss}
        >
            <div
                className={`ui modal ${modal.size} transition visible active`}
                onClick={stopBubbleUp}
            >
                <div className="header">{modal.title}</div>

                <div className="image content">
                    <div className="ui medium image">
                        <img src={logoStroke} alt="streamling logo" />
                    </div>

                    <div className="description">
                        <div className="ui header">{modal.header}</div>
                        <p>{modal.body}</p>
                    </div>
                </div>

                <div className="actions">{modal.buttons}</div>
            </div>
        </div>,
        document.getElementById("modal")
    );
};

export default Modal;
