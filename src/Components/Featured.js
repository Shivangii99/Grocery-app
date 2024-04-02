import React from 'react'
import './Styles.css'
import onion from '../photos-lib/vege.png'
import Apple from '../photos-lib/Apple.png'
import Tomatoes from '../photos-lib/tomatoes.png'
import Bread from '../photos-lib/bread.png'
import Brocoli from '../photos-lib/brocoli.png'
import Capsicum from '../photos-lib/capsicum.png'

export const Featured = ()=>{
    const cards=[
        {
            Name: 'Onion',
            Price: '10/kg',
            image: onion,

        },
        {
            Name: 'Tomatoes',
            Price: '10/kg',
            image: Tomatoes,

        },
        {
            Name: 'Bread',
            Price: '10/kg',
            image:Bread,

        },
        {
            Name: 'Broccoli',
            Price: '10/kg',
            image: Brocoli,

        },
        {
            Name: 'Capsicum',
            Price: '10/kg',
            image: Capsicum,

        },
        {
            Name: 'Apple',
            Price: '10/kg',
            image: Apple,

        },
    ]
    return(
        <>
        <div className="feature">
            <h3>Featured PRODUCTS</h3>
            <div className="feature-contain">
                {cards.map((card, i)=>
                    <div className="card" key={i}>
                    <img src={card.image}/>
                    <p>{card.Name}</p>
                    <p>{card.Price}</p>
                    <button>Add</button>
                </div>
                )}
                
                
            </div>
            <p class="more">More&gt;</p>
        </div>
        </>
    )
}