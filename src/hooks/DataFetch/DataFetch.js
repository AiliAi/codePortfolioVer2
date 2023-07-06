import {useState, useEffect} from 'react';

const DataFetch = (url) => {
  const [jsonData, setJsonData] = useState();

  /**
   * Fetches data from json
   *
   * @returns {Object}
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        };
        const response = await fetch(url, options);
        const json = await response.json();
        setJsonData(json);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [url]);

  return jsonData;
};

export default DataFetch;
