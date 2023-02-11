import React from 'react'
import data from './data.js'
import './Content.css'

export default function Content(){
    const [val ,setVal] = React.useState({
        RandImg:'https://images.pexels.com/photos/1822605/pexels-photo-1822605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        topText: '',
        bottomText: ''
    })  
    function Clicked(){
        const Numberi = data.length 
        const Rand = Math.floor(Math.random() * Numberi)
        const url = data[Rand].img
        setVal(prevVal =>({
            ...prevVal,
            RandImg: url
        }))
    }
    function Altered(event){
        const {name, value} = event.target
        setVal(prevData =>{
            return {
            ...prevData,
            [name]: value
            }
        })
    }
    return (
        <main>
            <div className='form'>
                <input 
                    placeholder='Top text'
                    type="text"
                    className='input1'
                    name = 'topText'
                    value={val.topText}
                    onChange={Altered}
                    />
                <input 
                    placeholder='Bottom text'
                    type="text"
                    className='input2'
                    name = 'bottomText'
                    value={val.bottomText}
                    onChange={Altered}
                    />
            </div>
            <button onClick={Clicked} className='buttoninput' >Get a new image <i className="uil uil-image con"></i></button>
            <div className='Memer'>
                <img className='Image' src={val.RandImg} alt='img1'/>
                <div className='Topper'>{val.topText}</div>
                <h2 className='bottomer'>{val.bottomText}</h2>
            </div>
        </main>        
    )
}