import AsyncRetry from "async-retry";
import database from "infra/database";

async function waitForAllServices() {
  await waitForWebServer();

  async function waitForWebServer() {
    return AsyncRetry(fetchStatusPage, {
      retries: 100,
    });

    async function fetchStatusPage() {
      const response = await fetch("http://localhost:3000/api/v1/status");
      const responseBody = await response.json;
    }
  }
}

async function clearDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}
const orchestrator = { waitForAllServices, clearDatabase };
export default orchestrator;
