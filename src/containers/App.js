import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop/index";

import RegisterIndex from "../pages/Auth/Register/index";
import LoginIndex from "../pages/Auth/Login/index";
import HomeIndex from "../pages/Home/index";

// //Account
import DoctorAccountMaster from "../pages/Account/Doctor/Master/index";
import PatientAccountMaster from "../pages/Account/Patient/Master/index";
import AdminMaster from "../pages/Account/Admin/Master/index";
import PrivateRoute from "../components/PrivateRoute/index";

// Chat
import FourOFour from "../pages/FourOFour/index";

function App() {
	return (
		<div className="App">
			<Router>
				<ScrollToTop>
					<Switch>
						<Route exact path="/" component={HomeIndex} />
						<Route exact path="/login" component={LoginIndex} />
						<Route exact path="/register" component={RegisterIndex} />

						{/* Doctor Master */}
						<PrivateRoute path="/doctor" role="doctor">
							<DoctorAccountMaster />
						</PrivateRoute>

						{/* Patient Master */}
						<PrivateRoute path="/patient" role="patient">
							<PatientAccountMaster />
						</PrivateRoute>

						{/* Admin Master */}
						<PrivateRoute exact path="/admin" role="super_admin">
							<AdminMaster />
						</PrivateRoute>

						<PrivateRoute exact path="/admin" role="admin">
							<AdminMaster />
						</PrivateRoute>

						<PrivateRoute exact path="/admin" role="manager">
							<AdminMaster />
						</PrivateRoute>
						<Route path="/admin" role="admin">
							<AdminMaster />
						</Route>

						<Route path="*" component={FourOFour} />
					</Switch>
				</ScrollToTop>
			</Router>
		</div>
	);
}

export default App;
