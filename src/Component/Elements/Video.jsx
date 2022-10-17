import React from 'react'

function Video() {
  return (
    // <div className='container-fluid'>
    <div className='video pt-5'>
        <iframe
        width="100%"
        height="580"
        src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4"
        allow="accelerometer"
        title="video"
        />
        </div>
    // </div>
  )
}

export default Video