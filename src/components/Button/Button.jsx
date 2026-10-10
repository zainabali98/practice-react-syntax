import React from 'react'
import './Button.css'

function handleClick(){
    console.log('Button Clicked')
}
function Button() {
  return (
    <div>

<p onClick={handleClick}>Upload</p>

    </div>
  )
}

export default Button