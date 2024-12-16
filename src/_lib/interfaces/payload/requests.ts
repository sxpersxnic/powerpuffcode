import HttpMethod from 'lib/enums/EHttpMethod';

/**
 * Interface for fetch request
 * 
 * @interface IRequest
 * 
 * |Property|Type|Description|
 * |--------|----|-----------|
 * |url|`string`|URL to fetch|
 * |id|`string`|ID param to append to URL|
 * |checkStatus|`boolean`|Check status of response|
 * |expectedStatus|`number`|Expected status code|
 * |method|{@link HttpMethod}|HTTP method|
 * |headers|`Record<string, string>`|Request headers|
 * |body|`unknown`|Request body|
 */
interface IRequest {
	url: string;
	id?: string;
	checkStatus?: boolean;
	expectedStatus?: number;
	method: HttpMethod | 'get';
	headers?: Record<string, string>;
	body?: unknown;
}

export default IRequest;
