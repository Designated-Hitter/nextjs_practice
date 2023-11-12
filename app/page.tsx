"use client"
import { useState } from 'react';
import NavBar from '../components/NavBar';
export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <NavBar />
      <h1>안녕하세요 {counter} </h1>
      <button onClick ={() => setCounter((prev:number) => prev + 1)}>+</button>
    </div>
  )
}
