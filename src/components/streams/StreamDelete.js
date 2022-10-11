import React from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
    const onDismiss = () => history.push("/");
    // TODO => logic for onDelete
    const onDelete = () => {};

    const modalButtons = (
        <React.Fragment>
            <div className="ui black deny button" onClick={onDismiss}>
                Nope
            </div>
            <div
                className="ui negative right labeled icon button"
                onClick={onDelete}
            >
                Yep, Delete It!
                <i class="trash alternate icon"></i>
            </div>
        </React.Fragment>
    );

    const modalConfig = {
        onDismiss,
        size: "small", // ["fullscreen", "large", "", "small", "tiny", "mini"]
        title: "Delete Stream",
        header: "🐥 Cheese and Quackers!",
        body: "Are you sure you want to delete this stream?",
        buttons: modalButtons
    };

    return (
        <div>
            Stream Delete
            <Modal config={modalConfig} />
        </div>
    );
};

export default StreamDelete;
