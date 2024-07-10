import React from 'react'
import heroImage from '../../public/tasmania-1000px.jpg'
import { Button } from 'react-bootstrap/Button';


function HeroImg() {
  return (
    <header style={{paddingLeft: 0}}>
        <div
        className="p-5 text-center bg-image"
        style={{backgroundImage: heroImage, height: 400}}
        >
        <div className="mask" style={{backgroundColor: 'rgba(0, 0, 0, 0.6)'}}>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className="text-white">
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