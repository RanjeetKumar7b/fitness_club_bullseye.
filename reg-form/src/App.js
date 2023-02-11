import React,{useState, useEffect} from 'react'
import './App.css';

const localData=()=>{
  const data = localStorage.getItem('members');
  if(data){
    return JSON.parse(data);
  }
  else{
    return []
  }
}

export const App = () => {

  const [members, setmembers]=useState(localData());


  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [isbn, setIsbn]=useState('');


  const handleAddBook=(e)=>{
    e.preventDefault();
    let member={
      title,
      author,
      isbn
    }
    setmembers([...members,member]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  }

 
  useEffect(()=>{
    localStorage.setItem('members',JSON.stringify(members));
  },[members])

  return (
    <div className='cover'>
      <h1>Fitness Club Registration</h1>
      <div className='main'>

        <div className='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBook}>
            <label>name</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <label>email</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
            <br></br>
            <label>phone number</label>
            <input type="text" className='form-control' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input>
            <br></br>
            <button type="submit" className='btn btn-primary btn-md'>
              ADD
            </button>
          </form>
        </div>

      </div>
    </div>
  )
}

export default App
