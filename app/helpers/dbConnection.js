import clientPromise from "@/components/mongo/client";

export async function getDbConnection() {
  const client = await clientPromise;
  const db = client.db("roads");
  return db;
}

const db = await getDbConnection();

export default db;
