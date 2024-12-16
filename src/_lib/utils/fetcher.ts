import IRequest from 'lib/interfaces/payload/requests';
import IResponse from '../interfaces/payload/responses';

// Implementation
export async function fetcher(req: IRequest): Promise<IResponse> {
	let checkStatus = false;

	if (req.checkStatus) {
		checkStatus = true;
	}

	const response = await fetch(
		req.id ? req.url + `/${req.id}` : req.url, {
		method: req.method,
		headers: req.headers,
		body: req.body ? JSON.stringify(req.body) : undefined
	});
	const data = await response.json();
	
	if (checkStatus) {
		if (response.status !== 200 && response.status !== req.expectedStatus) {
			throw new Error(data.message || response.statusText);
		}
	}

	const fetchResponse: IResponse = {
		status: response.status,
		message: data.message || response.statusText,
		data: data
	};

	return fetchResponse;
}
