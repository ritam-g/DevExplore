import React from 'react'
import AxiosInstance from './config/AxiosInstence.jsx';
import {useState} from "react"
const App = () => {
  const [data, setData] = useState(1);
  const fetchData = async () => {
    try {
      const response = await AxiosInstance.get(`/${data}`);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  return (
    <>
      <button onClick={fetchData}>Fetch Data</button>
      <input
        type="number"
        value={data}
        onChange={(e) => setData(parseInt(e.target.value))}
      />
    </>
  )
}

export default App
