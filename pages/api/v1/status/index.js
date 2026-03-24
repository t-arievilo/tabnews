import { createRouter } from "next-connect";
import database from "infra/database";
import controller from "infra/controller";

const router = createRouter();

router.get(getHandler);

export default router.handler(controller.errorHandlers);

async function getHandler(request, response) {
  const databaseVersionResult = await database.query("SHOW server_version;");
  const databaseVersionValue = databaseVersionResult.rows[0].server_version;

  const databaseMaxConnection = await database.query("SHOW max_connections");
  const databaseMaxConnectionValue =
    databaseMaxConnection.rows[0].max_connections;

  const databaseName = process.env.POSTGRES_DB;
  const databaseOpenedConnectionResult = await database.query({
    text: "SELECT count(*)::int FROM pg_stat_activity WHERE datname = $1;",
    values: [databaseName],
  });
  const databaseOpenedConnectionValue =
    databaseOpenedConnectionResult.rows[0].count;

  const updateAt = new Date().toISOString();
  response.status(200).json({
    update_at: updateAt,
    dependencies: {
      database: {
        version: databaseVersionValue,
        max_connections: parseInt(databaseMaxConnectionValue),
        opened_connections: databaseOpenedConnectionValue,
      },
    },
  });
}
