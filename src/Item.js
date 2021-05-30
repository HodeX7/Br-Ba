import React from 'react'
import './Item.css'

function Item({item}) {
    return (
        <div className='card'>
            <div className='card__content'>
                <div className = 'card__front'>
                    <img src = {item.img} alt='' />
                </div>
                <div className='card__back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Actor Name:</strong> {item.portrayed}
                        </li>
                        <li>
                            <strong>Nickname:</strong> {item.nickname}
                        </li>
                        <li>
                            <strong>Birthday:</strong> {item.birthday}
                        </li>
                        <li>
                            <strong>Life Status:</strong> {item.status}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Item
