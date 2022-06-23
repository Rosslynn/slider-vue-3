import environment from "../environment/environment";

export class SiteService {

  constructor(client) {
    this.client = client;
    this.baseURL = environment.baseURL;
  }

  getEntries(spaceId, typeId) {
    const url = `${this.baseURL}/content/spaces/${spaceId}/types/${typeId}/entries`;
    return this.client.makeGetRequest(url);
  }
}
