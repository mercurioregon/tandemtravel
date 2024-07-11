import React from 'react'
import background from "../../public/Heron.svg";



function HeroImg() {
    console.log('hero')
  return (
    <header style={{paddingLeft: 0}}>
        <div
        id='hero'
        className="p-5 text-center"
        style={{backgroundImage: `url(${background})`, height: 500}}
        >
        <div>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className='hero-text mask'>
                    <h1 className="mb-3">Tandem</h1>
                    <h4 className="mb-3">Travel with friends</h4>
                </div>
            </div>
        </div>
        </div>
    </header>
  )
}

export default HeroImg