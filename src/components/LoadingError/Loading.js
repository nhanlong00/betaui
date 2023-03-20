import React from 'react'

const Loading = () => {
  return (
    <div className='fl justify-center'>
        <div className='spinner-border text-dark' 
            role="status" 
            style={{width: "50px", height: "50px"}}
        >
            <span className='sr-only'></span>
        </div>
    </div>
  )
}

export default Loading
