import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [radio, setRadio] = useState('');
    const [name, setName] = useState('');
    const [checkbox, setCheckbox] = useState('');
    const [date, setDate] = useState('');
    const [file, setFile]= useState('');
    const navigate = useNavigate();
const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleFile = (event) => {
    setFile(event.target.value);
  };
  const handleRadio = (event) => {
    setRadio(event.target.value);
  };
  const handleName = (event) => {
    setName(event.target.value);
  };
  const handelCheck = (event) => {
    setCheckbox(event.target.value);
  };
  const handelDate = (event) => {
    setDate(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/edit")
    alert(email + ' ' + password + name + ' ' + radio + ' ' + date + ' ' + checkbox);
  };
  return (
    <div className='d-flex justify-content-center align-items-center'>
      <form onSubmit={handleSubmit}>
        <h1 className='text-align-center'>Submit Form</h1>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          id="email"
          type="text"
          value={email}
          onChange={handleEmail}
        />
      </div>
      <br />
      <div>
        <label htmlFor="password">Password: </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={handlePassword}
        />
      </div>
      <br />
      <div>
        <label htmlFor="name">Name: </label>
        <input
          id="name"
          type="name"
          value={name}
          onChange={handleName}
        />
      </div>
      <br />
      <div>
        <label htmlFor="password">Radio: </label>
        <input
          id="radio"
          type="radio"
          value={radio}
          onChange={handleRadio}
        />
      </div>
      <br />
      <div>
      <label for="birthday">Birthday: </label>
<input type="date" id="birthday" value={date} onChange={handelDate} name="birthday"/>
      </div>
      <br />
      <div>
      <input type="checkbox" id="vehicle1" name="vehicle1" value={checkbox} onChange={handelCheck}/>
<label for="vehicle1"> I have a bike</label><br/>
<br />
      </div>
      
      <div>
      <label for="myfile">Select a file: </label>
<input type="file" id="myfile" value={file} onChange={handleFile} name="myfile"/>
      </div>
      <br />
      <div className=''><button type="submit" className='bg-success text-light border-none'>Submit</button></div>
    </form>
    <div>
        <h1>Values of Submit Form</h1>
        <p>Email: {email}</p>
        <p>Password: {password}</p>
        <p>Name: {name}</p>
        <p>Radio: {radio}</p>
        <p>Birthday: {date}</p>
        <p>I have a bike: {checkbox}</p>
        <p>File Upload: {file}</p>
    </div>
    </div>
  )
}

export default LoginForm
