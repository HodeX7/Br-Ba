import './App.css';
import Header from './Header';
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import Characters from './Characters'
import Search from './Search';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true) 
  const [query, setQuery] = useState('') 

  useEffect(() => {
     const fetchItems = async() => {
       const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
       setItems(result.data)
       setIsLoading(false)

      //  console.log(result.data)
     }
     fetchItems()
  },[query])
  return (
    <div className="app">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <Characters isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
//https://www.breakingbadapi.com/api/

