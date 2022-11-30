import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LoginIndex from "../pages/Login"
import HomeIndex from "../pages/Homepage"

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/Login" component={LoginIndex} />
					<Route exact path="/Homepage" component={HomeIndex} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
