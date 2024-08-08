import React, {useState, useContext, useEffect} from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import AuthContext from '../AuthContext';
import svg from '../svg.svg'
import log from '../logout.svg'
import add from '../addbutton.svg'
import search from './search.svg'

 function UserLog() {
    const [notes, setNotes] = useState([]);
    const [input, setInput] = useState('');
    const [error, setError] = useState('');
    // const [ddate, setDdate] = useState('');
    // const [select, setSelected] = useState('all');
    const [search_td, setSearch_td] = useState('');

    const {auth, logout} = useContext(AuthContext);
    const navigate = useNavigate();
    const ip = '127.0.0.1';

    useEffect(()=>{
      if(auth){
      async function getAllNotes(){
      try{
        const token = localStorage.getItem('token');
        if(token){
        const getnote = await axios.get(`http://${ip}:8000/api/todos/`, 
          { headers: {
            Authorization: `Bearer ${token}`
          }
        });
        console.log(getnote.data)
        setNotes(getnote.data)

      }else{ console.log('token not found'); }

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
            status: false
          };
    
          try{
            const token = localStorage.getItem('token');
            const InsertResponse = await axios.post(`http://${ip}:8000/api/todos/`,
              newTodo,
              {
                headers: {
                  Authorization: `Bearer ${token}`
                }
              },
            );

          setNotes([InsertResponse.data, ...notes]);
          setInput('');
          setError('');
          console.log(InsertResponse.data);
          }catch(error){
        console.log('error adding',error);
        }
      } else {
        setError('Enter a note');
      }
    }

    const handleRemove = async(id)=>{
      try{
        const token = localStorage.getItem('token');
        await axios.delete(`http://${ip}:8000/api/todos/${id}/`,{
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
 
  //   const current_date = new Date().toISOString().slice(0,10);

  //   const filterNotes = (filter)=> {
  //    return notes.filter((note)=> {
  //       let matchesFilter = true;
  //       switch (filter){
  //         case 'duetoday':
  //           return matchesFilter = note.due_date === current_date;
  //         case 'duelater':
  //           return matchesFilter = note.due_date > current_date;
  //         case 'overdue':
  //           return matchesFilter =  note.due_date < current_date;
  //         default:
  //             matchesFilter =  true;
  //       }
  //       const matchesSearch = typeof note.title === 'string' && note.title.toLowerCase().includes(search_td.toLowerCase());

  //     return matchesFilter && matchesSearch;
  //   });
  // };

    const handleCheckboxChange = async (noteId, checked) => {
        try {
            const token = localStorage.getItem('token');
            const updatedNote = notes.find(note => note.id === noteId);
            updatedNote.status = checked;
    
            await axios.put(`http://${ip}:8000/api/todos/${noteId}/`,
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
        <button onClick={handleLogout} className='logout-btn'><img alt='img' src={log} height='40' width='40'/></button>
        <p className='todo-head'>Task Management</p>
        
        {/* <div className="select-right">
        <label htmlFor="filter">Filter Notes</label><br />
        <select className='dropdown' value={select}
         onChange={(e)=>setSelected(e.target.value)}>
        <option value="all">All notes</option>
        <option value="duetoday">duetoday</option>
        <option value="duelater">due later</option>
        <option value="overdue" >overdue</option>
        </select>
        </div> */}
      </header>
        <Link to='/UserProgress'>view user</Link>
      <div className="search-main">
      <div className="search-container">
          <input type="text" className="i12" value={search_td} onChange={(e) => setSearch_td(e.target.value)} 
            placeholder="Search user..." />
            <img src={search} alt="img" height='40' width='40'/>
        </div>
        </div>


  <div className='main-container'>

<div className="notes-container">
  <div className="notes">

  {notes.filter(note => note.title.toLowerCase().includes(search_td.toLowerCase())).map((note) => 
  (<p className='notes-main' key={note.id}>

  <input type="checkbox" className='checkbox' checked={note.status} 
   onChange={(e) => handleCheckboxChange(note.id, e.target.checked)}/>
  
  <span className={note.status ? 'strikethrough': ''}>
  {note.title} 
  </span>
  
  <button className='rem-button' onClick={()=>handleRemove(note.id)}>
  <img src={svg} alt='remove' height='40' width='60' /></button></p>))}
  
  </div>

</div>
<p className='error'>{error}</p>
{/* <div className='create-div2'>
<input  type="text" className='create-div' value={input}  onChange={(e) => setInput(e.target.value)}  placeholder='Enter item'/>
<button type="submit" className='add-button ' onClick={handleAddItem}><img className='addItemSVG' src={add} alt='add' height='70' width='85'/></button>
</div> */}
</div>
</>
);}
export default UserLog;