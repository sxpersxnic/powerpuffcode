import IRequest from "lib/interfaces/payload/requests";
import { fetcher } from "lib/utils/fetcher";
import HttpMethod from "lib/enums/EHttpMethod";
import IResponse from "../interfaces/payload/responses";

export async function fetchSession(): Promise<IResponse> {
  const request: IRequest = {
    url: "/api/auth/session",
    method: HttpMethod.GET,
  };
  
  const response = await fetcher(request);

  if (response.status !== 200) {
    throw new Error("Failed to fetch session");
  }

  return response;
}