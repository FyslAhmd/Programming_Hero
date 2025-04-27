import React from 'react';
import useInputField from '../../hooks/useInputField';

const HookForm = () => {
    const [name,nameOnChange] = useInputField('');
    const [email,emailOnChange] = useInputField('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(name);
    }
    return (
        <div>
            <form className='space-y-4 m-10' onSubmit={handleSubmit}>
                <input className='border-2' name='name' type="text" onChange={nameOnChange} defaultValue={name} placeholder='name'/>
                <br />
                <input type="email" name="email" id="" onChange={emailOnChange} defaultValue={email} placeholder='emial' className='border-2'/>
                <br />
                <input type="submit" value="submit" className='border-2' />
            </form>
        </div>
    );
};

export default HookForm;