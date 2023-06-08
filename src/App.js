import * as React from "react";
import {RouterComponent} from "./Routes";
import { BrowserRouter as Router } from "react-router-dom";
import {store} from "./Helpers";
import { Provider } from "react-redux";
import ErrorBoundary from "./Components/ErrorBoundary";
import "./Assets/Style/main.scss";

export const App = (props) => {
	return (
		<>
			<ErrorBoundary>
				<Provider store={store}>
					<Router>
						<RouterComponent/>
					</Router>
				</Provider>
			</ErrorBoundary>
		</>
	)
};

export default App;
