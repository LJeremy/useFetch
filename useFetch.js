import { useState, useEffect } from "react";

function useFetch(url, name) {
  const [data, setData] = useState();

  async function fetchUrl() {
    let data = sessionStorage.getItem(name);

    if (data) {
      data = JSON.parse(data);
      setData(data);
    } else {
      fetch(url)
        .then(res => res.json())
        .then(data => {
          setData(data);
          sessionStorage.setItem(name, JSON.stringify(data));
        });
    }
  }

  useEffect(() => {
    fetchUrl();
  }, []);
  return data;
}
export { useFetch };
