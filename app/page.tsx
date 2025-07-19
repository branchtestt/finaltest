"use client";

import { useEffect, useState } from "react"
import axios from "axios";

export default function Home() {

  const [joke , setJoke] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api-playapi.vercel.app/api/v1/jokes/random");

      setJoke(response.data.content);      

    }
    fetchData();
  } , [])

  return (
    <div className="text-center flex min-h-screen justify-center items-center p-5 font-extrabold md:text-4xl text-xl bg-cyan-300">
      <div>
        {joke}
      </div>
    </div>
  )
}