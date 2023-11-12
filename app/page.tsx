"use client"
import { useState } from 'react';

export default function Home() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>안녕하세요 {counter} </h1>
      <button onClick ={() => setCounter((prev:any) => prev + 1)}>+</button>
    </div>
  )
}
