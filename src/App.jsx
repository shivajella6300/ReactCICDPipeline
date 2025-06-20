import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [data ,setData]=useState([]);
  const fetchData=async()=>{
    const getData=await fetch('https://dummyjson.com/products',
    {
      method:"GET",
      headers:{
        "Content-Type":"application/json",
        "Accept":"application/json"
      }
    })
    const dummyData=await getData.json();
    setData(dummyData.products)
  }
useEffect(()=>{
fetchData();
},[])
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">User Table</h2>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="border border-gray-300 px-4 py-2">Title</th>
              <th className="border border-gray-300 px-4 py-2">Category</th>
              <th className="border border-gray-300 px-4 py-2">Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user) => (
              <tr key={user.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 px-4 py-2">{user.title}</td>
                <td className="border border-gray-300 px-4 py-2">{user.category}</td>
                <td className="border border-gray-300 px-4 py-2">{user.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App
