import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import StreamList from "./streams/StreamList";

const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Route path="/" exact component={StreamList} />
            </BrowserRouter>
        </div>
    );
};

export default App;
