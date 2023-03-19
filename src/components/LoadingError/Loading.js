import React from 'react'

const Loading = () => {
  return (
    <div className='fl justify-center'>
        <div className='spinner-border text-success' 
            role="status" 
            style={{width: "50px", height: "50px"}}
        >
            <span className='sr-only'>Đang tải vui lòng chờ ...</span>
        </div>
    </div>
  )
}

export default Loading
