import { DEVELOPMENT, PRODUCTION } from "./node.env";

const setBaseUrl = () => {
	const { REACT_APP_ENV } = process.env;

	console.log(REACT_APP_ENV);
	if (REACT_APP_ENV == DEVELOPMENT) return "http://localhost:8080/api/v1/";
	if (REACT_APP_ENV == PRODUCTION) return "http://api.fosha.tech/api/v1/";

	return "http://localhost:3001";
};

export const API_URL = setBaseUrl();
