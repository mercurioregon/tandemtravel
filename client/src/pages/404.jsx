import React from 'react'
import './404.css'

function PageNotFound() {
  return (

    <div className='error'>
        <span className='bg'></span>
        <div className='content'>
            <h1>404</h1>
            <h2>Page not Found</h2>
            <h4>It looks like the page that you're looking for doesn't exist or has been removed.</h4>
            <div className="help">
                <h4>Need help?</h4>
                <h5>Try navigating to the <a href="/#Contact-us">'Contact us'</a> page for inquiries.</h5>
            </div>
        </div>
    </div>
  )
}

export default PageNotFound