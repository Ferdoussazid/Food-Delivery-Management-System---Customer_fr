import Link from "next/link";
import Layout from "@/pages/Layout/layout";
import Title from "@/pages/Layout/title";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "@/pages/Layout/header";

export default function Profile() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/customer', {
          withCredentials: true,
        });
        console.log(response);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getData();
  }, []);

  return (
    <Layout>
      <Title page="Profile" />

      {data !== null && (
        <div className="max-w-md mx-auto p-6 bg-white border rounded-md shadow-md mt-10">
          {Array.isArray(data) ? (
            <ul>
              {data.map((item, index) => (
                <li key={index} className="mb-4">
                  <h1 className="text-xl font-bold">{item.name}</h1>
                  <p className="text-gray-700">Email: {item.email}</p>
                  <p className="text-gray-700">Address: {item.address}</p>
                  <p className="text-gray-700">Phone: {item.phone}</p>
                  <p className="text-gray-700">Status: {item.status}</p>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-xl font-bold">No data available</p>
          )}
        </div>
      )}
    </Layout>
  );
}
