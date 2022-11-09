import React from 'react'

function Info() {
  return (
    <div className='info'>
    <div className='image'></div>
    <div className='info-names'>
    <h1>Melaku A</h1>
    <h2>Frontend Developer</h2>
    <a><p>melaku.website</p></a>
    </div>
    <div className='buttons'>
    <a href='mailto:melakualehegn34@gmail.com' target="_blank"><button className='email'><i className='fa fa-envelope'/> Email</button></a>
    <a href='https://www.linkedin.com/in/melakualehegn/' target="_blank"><button className='linkedin'><i className='fab fa-linkedin'/> Linkedin</button></a>
    </div>
    </div>
  )
}

export default Info