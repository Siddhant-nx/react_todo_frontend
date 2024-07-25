import React, {Component} from 'react';


export class NewsItem {
  
   render(){
   const { article }= this.props
   return(
   <div>
    {article? ( <p>{article.title}</p> ) : ( <p>loading</p> ) }

   </div>

    )
   }
}

export default NewsItem;

//  function Home() {

//     const [notes, setNotes] = useState([]);
//     const [input, setInput] = useState('');
//     const [error, setError] = useState('');
//     const [ddate, setDdate] = useState('');

//     const current_date = new Date().toISOString().slice(0,10);
//     const duetoday = notes.filter(input => input.date === current_date)
//     const duelater = notes.filter(input => input.date > current_date)
//     const overdue = notes.filter(input => input.date < current_date)

//     const handleAddItem = (e) => {
//         e.preventDefault();
//         if (input && ddate) {
//             setNotes([...notes, {text: input, date: ddate}])
//             setInput('');
//             setError('');
//             setDdate('');
//         }else{
//           setError('note or date is missing');
//         }
//     }; 

//     const handleClearItem = (e) =>{
//       e.preventDefault();
//       setNotes([]);
//       setError('');
//     };

//     const handleRemove = (index) =>{
//       const newNotes = notes.filter((_, i) => i!== index);
//       setNotes(newNotes);
//     }

//     const HandledueToday=(e)=>{
//         e.preventDefault();
//         <ul>
//           { duetoday.map((note,index) => (<li key={index}>{note}</li>)) }
//         </ul>
//          }

//     // const toggle = ()=>{
//     //   if(mode == 'light'){
//     //     setMode('dark');
//     //     document.body.style.backgroundColor = '#042743';
//     //     document.title = 'dark mode on ';
//     //   }
//     // }

//   return (
//     <>
//     <div className='head-container'>
//       <header className='header'>
//         <Link className='profile' to='/Profile'>Profile</Link>
//         <p>To Do List 
//         <img className='img1' width="100" height="100"
//          src="https://img.icons8.com/clouds/100/todo-list.png" 
//         alt="todo-list"/>
//         </p>

//         <label htmlFor="filter">Filter</label>
//         <select name="filter" id="id1">
//         <option value="duetoday" onSelect={HandledueToday}>duetoday</option>
//         <option value="overdue">overdue</option>
//         </select>

//       </header>

//     </div>

//   <div className='main-container'>
  
// <div className='create-div'>
// <input type="date" className='date' style={{width:"40rem"}} value={ddate} onChange={(e)=>setDdate(e.target.value)}/>
// <input  type="text" className='input-text' value={input}  onChange={(e) => setInput(e.target.value)}  placeholder='Enter item'/>
// <button type="submit" className='add-button' onClick={handleAddItem}>Add Note</button>
// <button type="submit" className='add-button' onClick={handleClearItem}>Delete all Notes</button>

// </div>
// <p className='error'>{error}</p>
//   <div className="notes">
//   {notes.map((note,index) => (<p className='notes-main' key={index}>
//   <input type="checkbox" className='checkbox'/>
//   {note} <button className='rem-button' onClick={()=>handleRemove(index)}>Remove</button></p>))}
// </div>
// </div>

// <div>
//   <h3>overdue</h3>
//   <ul>
//     { overdue.map((note, index)=> (<li key={index}>{note}</li>))}
//   </ul>
// </div>

// <div>
//   <h3>due later</h3>
//   <ul>
//   {  duelater.map((note, index)=> (<li key={index}>{note}</li>))}
//   </ul>
// </div>

// <div>
//       <Link to="/Login" className='anc'>Login</Link> <br /><br />
//       <Link to="/Signup" className='anc'>Signup</Link>
      
// </div>

// {/* <button onClick={toggle}>dark mode</button> */}
// </>
// );}
// export default Home;

