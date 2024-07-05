import React, {useState} from 'react';

 function Home() {

    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const handleAddItem = (e) => {
        e.preventDefault();
        if (input.trim() !== '') {
            setNotes([...notes, input]);
            setInput('');
            setError('');
        }else{
          setError('Please enter a note');
        }
    };

    const handleClearItem = (e) =>{
      e.preventDefault();
      setNotes([]);
      setError('');
    };

    const handleRemove = (index) =>{
      const newNotes = notes.filter((_, i) => i!== index);
      setNotes(newNotes);
    }

  return (
    <>
    <div className='head-container'>
      <header className='header'>
        <h1>profile</h1>
        <p>To Do List 
        <img className='img1' width="100" height="100"
         src="https://img.icons8.com/clouds/100/todo-list.png" 
        alt="todo-list"/>
        </p>
      </header>

    </div>

  <div className='main-container'>
  
<div className='create-div'>
<input  type="text" className='input-text' value={input}  onChange={(e) => setInput(e.target.value)}  placeholder='Enter item'/>
<button type="submit" className='add-button' onClick={handleAddItem}>Add Note</button>
<button type="submit" className='add-button' onClick={handleClearItem}>Delete all Notes</button>
</div>
<p className='error'>{error}</p>
  <div className="notes">
  {notes.map((note,index) => (<p className='notes-main' key={index}>
  <input type="checkbox" className='checkbox'/>
  {note} <button className='rem-button' onClick={()=>handleRemove(index)}>Remove</button></p>))}
</div>
</div>

</>
);}
export default Home;

