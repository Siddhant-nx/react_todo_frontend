import React, {useState, useContext, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import AuthContext from './AuthContext';

 function Home() {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    const [ddate, setDdate] = useState('');
    const [select, setSelected] = useState('all');
    const [search_td, setSearch_td] = useState('');

    const {auth, logout} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
      if(auth){
      async function getAllNotes(){
      try{
        const token = localStorage.getItem('token');
        if(token){
        const getnote = await axios.get("http://127.0.0.1:8000/api/todos/", 
          { headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(getnote.data)
        setNotes(getnote.data)

      }else{  console.log('token not found'); }

      }catch(error){
      console.log(error)
      setError('no notes found');
      }
    }
    getAllNotes()
  } else {
    setNotes([]);

  }
}, [auth]);

  const handleLogout = () => {
    logout();
    navigate('/login')
  }
    const handleAddItem = async (e) => {
        e.preventDefault();
        if (input) {
          const newTodo = {
            title: input,
            due_date: ddate,
            status: false
          };
    
          try{
            const token = localStorage.getItem('token');
            const InsertResponse = await axios.post("http://127.0.0.1:8000/api/todos/",
              newTodo,
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              },
            );

          setNotes([...notes, InsertResponse.data]);
          setInput('');
          setError('');
          setDdate('');
          console.log(InsertResponse.data);
          }catch(error){
        console.log('error adding',error);
        }
      } else {
        setError('note or date is missing');
      }
    }

    const handleRemove = async(id)=>{
      try{
        const token = localStorage.getItem('token');
        await axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`,{
          headers:{
            Authorization: `Bearer ${token}`
          }
        });
        setNotes(notes.filter(note=>note.id !== id))
      }
      catch(error){
        console.log('error removing',error)
      }
    };

    const handleClearItem = (e) =>{
      e.preventDefault();
      setNotes([]);
      setError('');
    };
 
    const current_date = new Date().toISOString().slice(0,10);

    const filterNotes = (filter)=> {
     return notes.filter((note)=> {
        let matchesFilter = true;
        switch (filter){
          case 'duetoday':
            return matchesFilter = note.due_date === current_date;
          case 'duelater':
            return matchesFilter = note.due_date > current_date;
          case 'overdue':
            return matchesFilter =  note.due_date < current_date;
          default:
              matchesFilter =  true;
        }
        const matchesSearch = typeof note.title === 'string' && note.title.toLowerCase().includes(search_td.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  };
      const handleCheckboxChange = async (noteId, checked) => {
        try {
            const token = localStorage.getItem('token');
            const updatedNote = notes.find(note => note.id === noteId);
            updatedNote.status = checked;
    
            await axios.put(`http://127.0.0.1:8000/api/todos/${noteId}/`,
                updatedNote,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
    
            setNotes(notes.map(note => note.id === noteId ? updatedNote : note));
        } catch (error) {
            console.log('error updating status', error);
        }
    };

  return (
    <>
      <header className='header'>
        {/* <Link className='profile' to='/Profile'>Profile</Link> */}
        <button onClick={handleLogout} className='logout-btn'>logout</button>
        <p>To Do List</p>
        
        <div className="select-right">
        <label htmlFor="filter">Filter Notes</label><br />
        <select className='dropdown' value={select}
         onChange={(e)=>setSelected(e.target.value)}>
        <option value="all">All notes</option>
        <option value="duetoday">duetoday</option>
        <option value="duelater">due later</option>
        <option value="overdue" >overdue</option>
        </select>
        </div>
      </header>

      <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            value={search_td} 
            onChange={(e) => setSearch_td(e.target.value)} 
            placeholder="Search notes..."  
          />
        </div>


  <div className='main-container'>
<div className='create-div'>
<input type="date" className='date' value={ddate} onChange={(e)=>setDdate(e.target.value)}/>
<input  type="text" className='input-text' value={input}  onChange={(e) => setInput(e.target.value)}  placeholder='Enter item (<50 characters)'/>
<button type="submit" className='add-button' onClick={handleAddItem}>Add Note</button>
<button type="submit" className='add-button' onClick={handleClearItem}>Delete all Notes</button>
</div>

<div className="notes-container">
<p className='error'>{error}</p>

  <div className="notes">
  {filterNotes(select).map((note) => 
    (<p className='notes-main' key={note.id}>
  <input type="checkbox" className='checkbox' 
   checked={note.status} 
   onChange={(e) => handleCheckboxChange(note.id, e.target.checked)}/>
  {note.title} <button className='rem-button' 
  onClick={()=>handleRemove(note.id)}>Remove</button></p>))}
  </div>

</div>
</div>

{/* <button onClick={toggle}>dark mode</button> */}
</>
);}
export default Home;