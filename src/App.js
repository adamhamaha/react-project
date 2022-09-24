import React from 'react';
import { useState } from 'react';
import Tweet from './Tweet';


function App(){

 const [users , setUsers] = useState([
  {name: 'Ed' , message: 'Hello There'},
  {name: 'John' , message: 'Hello There'},
  {name: 'Traversy' , message: 'Hello There'},
  
 ])
  return(
    <div className='app'>
      {users.map(user => (
        <Tweet name={user.name}  message={user.message}/>
      ))}
    </div>
  )
} 

export default App ;