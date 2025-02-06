import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/bigquery");
      const result = await response.json();
      setData(result);
    }
    fetchData();
  }, []);

  return (
    <div>
      <h1>BigQuery Data</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index} style={{fontSize: '20px'}}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  )
}
