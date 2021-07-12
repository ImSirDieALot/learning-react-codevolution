import React, { useState } from 'react'

function Interview() {
  const [phoneNumber, setPhoneNumber] = useState('219-793-6032');
  const [editButton, setEditButton] = useState('Edit Phone Number');
  const [buttonState, setButtonState] = useState(false);

  const changeButton = () => {
    setButtonState(!buttonState);
    if(!buttonState){
      setPhoneNumber('')
    } else {
      setPhoneNumber(phoneNumber)
    }
    setEditButton(buttonState ? 'Edit Phone Number' : 'Save');
  }

  if(buttonState) {
    return (
      <div>
        <div>
          <input type='text' value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}/>
        </div>
        <div>
          <button onClick={changeButton}>{editButton}</button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div>{phoneNumber}</div>
      <button onClick={changeButton}>{editButton}</button>
    </div>
  )
}

export default Interview
