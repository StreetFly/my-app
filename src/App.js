import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";
import Counter from './Counter';
import Timer from './Timer';
import List from './List';
import Detail from './Detail';
import { BrowserRouter, Link, Route, Routes } from 'react-router';

function App() {

  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
      fetch("https://api.restful-api.dev/objects")
          .then(response => response.json())
          .then(data => {
              setItems(data);
              console.log("Fetched data:", data);
          })
          .catch(error => console.error("Error fetching data:", error))
          .finally(() => setLoading(false));
  }, []);
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
      </nav>
      <Routes>
        <Route path="/" element={<List items={items} />} />
        <Route path="/detail/:id" element={<Detail items={items} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
