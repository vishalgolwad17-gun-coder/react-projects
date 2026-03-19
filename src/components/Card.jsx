import React from 'react'


const Card = (props) => {

    console.log(props.company);
  return (
    <div>
      <div className='card'>
        <div>
          <div className="top">
          <img src={props.logo} alt="" />
          <button>Save<img src="https://imgs.search.brave.com/MKjuyrhWHTdaRY-VhVxE8rRj3hTOYldSSYEaJ_NFO3A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNjYv/MzgyLzYyNy9zbWFs/bC9hLXVuaXF1ZS1i/bGFjay1hbmQtd2hp/dGUtaWNvbi1vZi1h/LWJvb2stbWFyay1p/bi13aGl0ZS1iYWNr/Z3JvdW5kLXZlY3Rv/ci5qcGc" alt="" /></button>
        </div>
        <div className="center">
          <h3>{props.company} <span>{props.datePosted}</span></h3>
          <h2>{props.post}</h2>
        <div className="tag">
          <h4>{props.tag1}</h4>
          <h4>{props.tag2}</h4>
        </div>
      </div>
        </div>
        <div className="bottom">
            <div>
              <h3>{props.pay}</h3>
              <p>{props.location}</p>
            </div>
            <button>Apply Now</button>
          </div>
        </div>
    </div>
  )
}

export default Card
