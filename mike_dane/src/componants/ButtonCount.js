import React, {useState} from 'react';

export default function ButtonCount(props) {

    const [count, updateCount] = useState(0)

  return (
   
    <div>
        <button onClick={() => updateCount(count + props.incrimentBy)}>+</button>
        {count}
        {count > 0 && <button onClick={() => updateCount(count - props.incrimentBy)}>-</button>}
    </div>
    
  )
  
}
