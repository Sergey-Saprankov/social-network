import {render} from "react-dom";
import {App} from "./app/App";
import {store} from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

render(
    <BrowserRouter><Provider store={store}>
        <App/>
    </Provider></BrowserRouter>,

    document.getElementById("root")
);
