import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../pages/Login";
import Homepage from "../pages/Homepage";

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/login" component={LoginIndex} />
					<Route exact path="/" component={HomeIndex} />
				</Switch>
			</Router>
		</div>
	);
}

export default App;
