import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/Login";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        {/* <Route path="/">
          <BasicExample />
        </Route> */}
      </Switch>
    </Router>
  );
}

export default App;
