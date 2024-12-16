
/**
 * Interface for fetch response
 * 
 * @interface IResponse
 * 
 * |Property|Type|Description|
 * |--------|----|-----------|
 * |status|`number`|Response status code|
 * |message|`string`|Response message|
 * |body|`unknown`|Response body|
 */
interface IResponse {
	status: number;
	message?: string;
	data: unknown;
}

export default IResponse;