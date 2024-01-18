import React from 'react'
import Img from "../img/img.png"
import Attach from "../img/attach.png"


const Input = () => {
  return (
    <div className='input'>
    <input type="text" placeholder='Type a Message' />
    <div className="send">
      
      <input type="file" style={{display:'none'}} id="file"/>
      <label for="file"><img src={Attach} alt="Send" /></label>
      <input type="image" style={{display:'none'}} id="image"/>
      <label for="image"><img src={Img} alt="Send" /></label>
      <button>Send</button>
    </div>      
    </div>
  )
}

export default Input
