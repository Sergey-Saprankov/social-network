import {render} from "react-dom";
import {App} from "./app/App";
import {store} from "./store/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import {ThemeProvider} from "./style/theme/ThemeProvider";

render(
    <BrowserRouter><Provider store={store}>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </Provider></BrowserRouter>,

    document.getElementById("root")
);
