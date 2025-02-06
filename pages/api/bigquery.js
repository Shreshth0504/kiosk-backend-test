import { BigQuery } from "@google-cloud/bigquery";
import path from "path";

const bigquery = new BigQuery({
  credentials: JSON.parse(process.env.NEXT_PUBLIC_GOOGLE_CREDENTIALS),
});

export default async function handler(req, res) {
  try {
    // Define your SQL query
    const query = 'SELECT * FROM `light-haven-326712.CPCB.CPCBStations` LIMIT 10';

    // Run the query
    const [rows] = await bigquery.query(query);

    // Send response
    res.status(200).json(rows);
  } catch (error) {
    console.error("Error querying BigQuery:", error);
    // res.status(500).json({ error: "Error fetching data" });
  }
}