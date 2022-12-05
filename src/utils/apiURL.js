import { DEVELOPMENT, PRODUCTION } from "./node.env";

const setBaseUrl = () => {
	const { REACT_APP_ENV } = process.env;

	console.log(REACT_APP_ENV);
	if (REACT_APP_ENV == DEVELOPMENT) return "http://localhost:8080/api/v1";
	if (REACT_APP_ENV == PRODUCTION) return "http://api.alodoctor.space/api/v1";

	return "http://localhost:8080/api/v1";
};

<<<<<<< HEAD
export const apiURL = setBaseUrl();
=======

export const apiURL = setBaseUrl();


>>>>>>> 5e0a5d3f13c38349cd2f4bda8e830499089fad15
