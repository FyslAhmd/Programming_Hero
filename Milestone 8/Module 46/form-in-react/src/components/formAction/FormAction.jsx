import React from "react";

const FormAction = () => {
    const handleForm = (formdata) => {
        console.log(formdata.get('name'));
    }
  return (
    <div className="m-4">
      <form action={handleForm}>
        <input className="border mb-2" type="text" name="name" />
        <br />
        <input className="border mb-2" type="email" name="email" />
        <br />
        <input type="submit" value="Submit" className="border" />
      </form>
    </div>
  );
};

export default FormAction;
