import React from 'react'
import {Form, Button } from 'react-bootstrap';
import {Link} from 'react-router-dom'
import Overview from '../../homepage';
import { useState } from 'react';



function HeroImg() {

    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegistrationForm, setShowRegistrationForm ] = useState(false);

    const handleLoginClick =() => {
        setShowLoginForm(true);
        setShowRegistrationForm(false);
    }

    const handleCreateAccountClick =() => {
        setShowLoginForm(false);
        setShowRegistrationForm(true);
    }



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
                        {!showLoginForm && !showRegistrationForm &&(
                            <Button className='button' onClick={handleLoginClick}>Login</Button>
                        )}
                        {showLoginForm && (
                            <div>
                                <Form>
                                    <Form.Group controlId="formBasicUsername" className='input'>
                                        <Form.Control type="text" placeholder="Username" />
                                    </Form.Group>
                                    
                                    <Form.Group controlId="formBasicPassword" className='input'>
                                        <Form.Control type="text" placeholder="Password" />
                                    </Form.Group>

                                    <Button className='button' type='Submit'>
                                        Submit
                                    </Button>
                                </Form>
                                <Button onClick={handleCreateAccountClick}>Create Account</Button>
                            </div>
                        )}
                        {showRegistrationForm && (
                            <div>
                                <Form>
                                    <Form.Group className='input' controlId="form-group-name">
                                        <Form.Control type="text" placeholder="Name" />
                                    </Form.Group>
                                    <Form.Group className='input' controlId="form-group-email">
                                        <Form.Control type="text" placeholder="Email" />
                                    </Form.Group>
                                    <Form.Group className='input' controlId="form-group-password">
                                        <Form.Control type="text" placeholder="Password" />
                                    </Form.Group>
                                </Form>
                                <button className='button' type='Submit'>Submit</button>
                            </div>
                        )}









                           
                        
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default HeroImg