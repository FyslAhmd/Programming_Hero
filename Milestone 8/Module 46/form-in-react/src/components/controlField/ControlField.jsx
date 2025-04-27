import React, { useState } from "react";

const ControlField = () => {
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');
    const handleForm = (event) => {
        event.preventDefault();
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
        console.log(password.trim().length);
        if(password.length < 6) {
            setError('Password must be at least 6 characters long');
        }
        else {
            setError('');
        }
    }
  return (
    <div>
            <form className='m-4' onSubmit={handleForm}>
                <input className='border mb-2' type="email" name='email' placeholder="email" required/>
                <br />
                <input className='border mb-2' type="password" defaultValue={password} onChange={handlePasswordChange} name="password" id="" placeholder="password" required/>
                <p className='text-xs text-red-700'><small>{error}</small></p>
                <br />
                <input type="submit" value="Submit" className='border' />
            </form>
            
        </div>
  );
};

export default ControlField;
