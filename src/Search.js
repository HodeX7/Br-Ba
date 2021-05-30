import React,{useState} from 'react'
import './Search.css'

function Search({getQuery}) {
    const [text, setText] = useState('')
    const clickHandler = (query) => {
        setText(query)
        getQuery(query)
    }
    return (
        <div className='search'>
            <input type='text' className='search__bar' placeholder='Search Characters' autoFocus onChange={(e) => clickHandler(e.target.value)} />
        </div>
    )
}

export default Search
