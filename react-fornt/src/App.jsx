import { BrowserRouter } from "react-router-dom";
import Router from "./router/index.jsx";
function App() {
    return (
        <>
            <BrowserRouter>
                <Router />
            </BrowserRouter>
        </>
    );
}

export default App;
