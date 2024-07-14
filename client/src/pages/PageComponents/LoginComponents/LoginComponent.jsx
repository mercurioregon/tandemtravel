import { useState } from "react";
import {Form, Button, Stack} from 'react-bootstrap';

const LoginPageComponent = () => {
  const bgImg = "https://www.tomerazabi.com/wp-content/uploads/2022/09/IMG_7922-1000px-JPEG-Q7.jpg"
  const high = '100vh';
  
  return (
    <Stack gap={3}>
      <div className="bg-light border">First item</div>
      <div className="bg-light border">Second item</div>
      <div className="bg-light border">Third item</div>
    </Stack>
    // <div className="content">
    //   <div className="loginTitle">
    //     <h1>Login</h1>
    //     <h5>Your adventure starts here</h5>
    //   </div>
    //   <div className="loginForm">
    //     <Form className="form">
    //       <Form.Group controlId="formUsername">
    //         <Form.Control type="Username" placeholder="Username" />
    //       </Form.Group>

    //       <Form.Group controlId="formPassword">
    //         <Form.Control type="password" placeholder="Password" />
    //       </Form.Group>
    //     </Form>
    //   </div>
    // </div>
  )
}

export default LoginPageComponent