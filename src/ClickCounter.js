import React, { useState } from 'react';

function ClickCounter(){
  const [clickCounter, setClickCounter] = useState(0);

  // debugger
  return(
    <div className="extra">
      <div>Clicks: {clickCounter}</div>
      <button onClick={() => setClickCounter(clickCounter + 1)}>Click me</button>
    </div>
      )
}

export { ClickCounter };
