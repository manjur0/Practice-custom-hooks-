import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //data fetching
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error("Data is Undifined");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        setDatas(data);
        setLoading(false);
        setError(null);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [url]);

  return { datas, loading, error };
};

export default useFetch;
