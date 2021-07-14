import React, { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';
// import './App.css';

interface AppProps {}

function App({}: AppProps) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  return (
    <div className="max-w-sm rounded">
      <img src="https://source.unsplash.com/random" className="w-full" />
      <p>
        Page has been open for <code>{count}</code> seconds.
      </p>
    </div>
  );
}

export default App;
