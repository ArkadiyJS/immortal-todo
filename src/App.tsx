import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {







  const task = {id:4,name:'сходить в магазин',data:'date',completed:false}
  

  return (
    <>
    <div  style={{margin:'5px'}}>

      <form>

        <input style={{height: '35px',width:'240px' }} placeholder='Название задачи...'/>

        <button>+</button>

      </form>

      <div className='task'>
          <div>{task.name}</div> <span style={{color: 'blue'}}>{task.data}</span> <input type='Checkbox' ></input>
          
          
          

      </div>



    </div>
      
    </>
  )
}

export default App
