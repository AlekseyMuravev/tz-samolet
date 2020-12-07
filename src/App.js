import { Route } from "react-router-dom";
import RegionsPage from "./pages/RegionsPage";
import RegionPage from "./pages/RegionPage";

function App() {
    return (
        <div className="App">
            <Route path="/" component={RegionsPage} exact />
            <Route path="/region/:id" component={RegionPage} exact />
        </div>
    );
}

export default App;
