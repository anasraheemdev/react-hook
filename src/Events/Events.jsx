import React from 'react'

const Events = () => {

    const handleClcik = (name)=>{
        console.log(`Salam ${name}`)
    }
  return (
    <>
    <h2>
      Events
    </h2>
    <button onClick={()=>handleClcik('ali')} className="btn btn-info">Click Here</button>
    </>
  )
}

export default Events
