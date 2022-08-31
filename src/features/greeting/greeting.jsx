import { useState, useEffect } from 'react';

const Greeting = () => {
  const [greeting, setGreeting] = useState('Fetching');
  const fetchGreeting = async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
      });
      const json = await response.json();
      setGreeting(() => (json.greeting));
      return greeting;
    } catch (e) {
      setGreeting(() => ('Generic greeting'));
      return greeting;
    }
  };
  useEffect(() => {
    fetchGreeting();
  }, []);

  return (
    <>
      <h1>{greeting}</h1>
    </>
  );
};

export default Greeting;
