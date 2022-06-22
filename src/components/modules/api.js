import ENDPOINTS from "./endpoints";

// const ENDPOINTS = {
//   [JOBS]: {
//       uri: '/jobs',
//       method: 'GET'
//   },
//   [EMPLOYEES]: {
//       uri: '/employees',
//       method: 'GET'
//   },
// }

export const JOBS = "jobs";
export const EMPLOYEES = "employees";

const BASE_URL = "https://5f7998dbe402340016f9321f.mockapi.io/api/v1";
//const BASE_URL = "https://5f7998dbe402340016f9321f.mockapi.io/api";
//https://5f7998dbe402340016f9321f.mockapi.io/jobs;

class Api {
  constructor(baseURL, endpoints) {
    this.baseURL = baseURL;
    this.endpoints = endpoints;
  }

   generateRequest(endpoint, data) {
    const { method, uri,  } = this.endpoints[endpoint]; //endpoint- это JOBS или EMPLOYEES 
    if (this.endpoints) {
      return fetch(
       `${this.baseURL}${uri}`,
        { method, body: data }
      );
    }
  }

  async fetch(endpoint, data) {
    //data в случае отправки POST
   try {
      const response = await this.generateRequest(endpoint, data);
      return response.json();
    } catch {
     throw new Error("Error");
    }
  }
}

export default new Api(BASE_URL, ENDPOINTS);
