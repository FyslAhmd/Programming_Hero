import React from 'react';

const SimpleForm = () => {
    const handleForm = (event) => {
        event.preventDefault();
        console.log(event.target.name.value);
        console.log(event.target.email.value);
    }
    return (
        <div>
            <form className='m-4' onSubmit={handleForm}>
                <input className='border mb-2' type="text" name='name'/>
                <br />
                <input className='border mb-2' type="email" name='email'/>
                <br />
                <input type="submit" value="Submit" className='border' />
            </form>
        </div>
    );
};

export default SimpleForm;