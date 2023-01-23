import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function Restview({reviews}) {
    const [open, setOpen] = useState(false);
    console.log(reviews);
  return (
<>
      <Button variant="secondary"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
        Click to see reviews
      </Button>
      <Collapse className='review' in={open}>
        <div id="example-collapse-text">
          {
            reviews.map(item=>(
                <>
                    <p>{item.name} <span>{item.date}</span></p>
                    <h4>Rating : {item.rating}</h4>
                    <h6>Comments : {item.comments}</h6>
                </>
            ))
          }
        </div>
      </Collapse>
    </>  )
}

export default Restview