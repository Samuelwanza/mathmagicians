import React, { useEffect, useState } from 'react';
import '../styles/calculator.css';

const Quotes = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          'https://api.api-ninjas.com/v1/quotes?category=inspirational',
          {
            headers: {
              'X-Api-Key': 'eTy/ISKiRfAAbB6sUbiIjg==zt7w5VMJK5uZk6Tz',
              'Content-type': 'application/json; charset=UTF-8',
            },
            method: 'GET',
          },
        );
        const quotes = await res.json();
        setData(quotes);
      } catch (error) {
        setHasError(false);
      }
      setLoading(false);
    };
    fetchData();
  }, [setData, setLoading]);
  console.log(data);
  if (hasError) return <div>Something went wrong!</div>;

  if (loading) return <div>Loading...</div>;

  return (
    <div className="Quotes">
      <ul>
        {data.map((item) => (
          <li key={item.quote}>{`${item.quote}-${item.author}`}</li>
        ))}
      </ul>
    </div>
  );
};

export default Quotes;
