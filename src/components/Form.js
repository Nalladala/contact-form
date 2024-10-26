import React, {useState} from 'react';

const Form = () => {
const [formData, setFormData] = useState ({name:' ', email:' ',message:' ' });
const [success, setSuccess] = useState(false);

const handlechange = (e) => {
    const {name, value} = e.target;
    setFormData({...formData, [name]:value});
};

const handleSubmit = (e) => {
    e.preventDefault();

    //Simulate form submission
 console.log(formData);
 setSuccess(true);
 setFormData({name:' ', email:' ', message:' '});   
};

return (
    <div className="bg-container">
      <form onSubmit ={handleSubmit}>
        <label>
            Name:
            <input type ="text" name ="name" value ={formData.name} onChange ={handlechange} required />

        </label>
        <br/>
        <lable>       
        Email:
        <input type="email" name ="email" value={formData.email} onChange ={handlechange} required />
         </lable>
         <br/>
        <lable>       
        Message:
        <textarea name ="message" value={formData.message} onChange ={handlechange} required />
         </lable>
         <br/>
         <button type="submit" className="btn primary" >Submit</button>
        </form>  
        {success && <p>Form Submitted Successfully!</p>}
    </div>
);
};
export default Form