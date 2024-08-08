import React, { useState } from 'react'
import person from './person.svg'
import add from '../add.svg'
import svg from '../svg.svg'

 function UserProgress() {
    const [input, setInput] = useState('')

    const handleAddItem =(e)=>{
        e.preventDefault()
    }

  return (
    <>
    <header className='header2'>
    <p className='todo-head'>Task Management</p>
    </header>

    <div className='pallet'>
        <img src={person} alt="img" height='200' width='200' className='' />
        <div className="user-detail">
          User details
          <div className='detail-2'>  
          <div className='name'><label>Name :</label> <p> Lorem ipsum dolor sit amet.</p></div>
          <div className='name'><label>Email ID :</label> <p> Lorem ipsum dolor sit amet.</p></div>
          <div className='name'><label>Address :</label> <p> Lorem ipsum dolor sit amet.</p></div>
          </div>
        </div>
    </div>

    <div className="status-con">
          <div className='task-1'>
          <p className='t-header'>Completed</p>
          <div className="task-con">
          <p className='notes-main2'>task</p>
          <p className='notes-main2'>task</p>
          <p className='notes-main2'>task</p>
          <p className='notes-main2'> Lorem ipsum dolor sit amet.</p>
          <p className='notes-main2'>task</p>
          <p className='notes-main2'>task</p>
          <p className='notes-main2'>task</p>
          </div>
          </div>

          <div className='task-2'>
          <p className='t-header'>Pending</p>
          <div className="task-con">
          <p className='notes-main2'>

  <input type="checkbox" className='checkbox' />
  
  <span>
  Lorem, ipsum. 
  </span>
  
  <button className='rem-button'>
  <img src={svg} alt='remove' height='40' width='60' /></button></p>
          <p className='notes-main2'>task</p>
          <p className='notes-main2'>task</p>
          <p className='notes-main2'> Lorem ipsum dolor sit amet.</p>
          <p className='notes-main2'>task</p>
          <p className='notes-main2'>task</p>
          <p className='notes-main2'>task</p>
          </div>
          </div>
    </div>

    <div className='create_div2'>
    <input  type="text" className='create_div' value={input}  onChange={(e) => setInput(e.target.value)}  placeholder='Assign task . . .'/>
    <button type="submit" className='add-button ' onClick={handleAddItem}><img className='addItemSVG' src={add} alt='add' height='70' width='85'/></button>
    </div>
    </>
  )
}

export default UserProgress;