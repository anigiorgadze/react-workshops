import React from 'react'

function Badge() {
    const spans = Array(4).fill(null);

    return (
      <div className='block-listing' >
        {spans.map((_, i) => (
          <span className={"badge-" + (i+1)}>{`Random ${i+1}`}</span>
        ))}
      </div>
    );

}

export default Badge
