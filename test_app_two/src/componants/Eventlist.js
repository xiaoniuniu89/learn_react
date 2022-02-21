import React from 'react'

export default function Eventlist({Button, products, handleButton}) {
  return (
      <div style={{textAlign: 'center' }}>
          {Button && (
              <>
              <button onClick={handleButton} style={{padding: '1em', margin: '5em' }}>Hide Products</button>
              {products.map((p) => {
                return (

                    <div className='p-card' key={p.id} style={{border: '1px solid black', width: '80%', maxWidth: '600px', margin: '2em auto', padding: '2em'}}>
                        <h2>{p.title}</h2>
                        <div className='flex-div' style={{display: 'flex',justifyContent: 'space-around'}}>
                            <div className='p-img'>
                                <img style={{width: '200px', height: '200px'}} src={p.image}></img>
                            </div>
                            <div className='p-info' style={{maxWidth: '500px'}} >
                                <p>{p.description}</p>
                                <small>{p.price} | </small>
                                <small>{p.category}</small>
                            </div>
                        </div>
                    </div>
                    
                    

                )
            })}
              </>
              
          )}

          {!Button && (
              <>
              <button onClick={handleButton} style={{padding: '1em', margin: '5em'}}>Display Products</button>
              </>
          )}
            
      </div>
    
  )
}
