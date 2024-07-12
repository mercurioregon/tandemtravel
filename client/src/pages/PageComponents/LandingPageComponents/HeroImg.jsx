import React from 'react'
import { Button } from 'react-bootstrap';



function HeroImg() {
    console.log('hero')
    const mountain = "https://c.wallhere.com/photos/79/d7/1200x800_px_Hiking_landscape_mist_Morning_mountains_nature_photography-1263873.jpg!d";
    const high = '100vh';
  return (
    <header style={{paddingLeft: 0}}>
        <div
        id='hero'
        className="p-5 text-center"
        style={{backgroundImage: `url(${mountain})`,
        height: `${high}`}}
        >
        <div>
            <div className="d-flex justify-content-center align-items-center h-100">
                <div className='hero-text mask'>
                    <h1 className="mb-3">Tandem</h1>
                    <h4 className="mb-3">Travel with friends</h4>
                    <Button className='button'>
                        Login
                    </Button>
                </div>
            </div>
        </div>
        </div>
    </header>
  )
}

export default HeroImg