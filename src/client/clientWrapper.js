export class ClientWrapper {
  async makeGetRequest(url) {
    try {
      return await (await fetch(url)).json();
    } catch (error) {
      throw new Error(error);
    }
  }
}
