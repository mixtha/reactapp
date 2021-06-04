import React, { useState } from 'react';
import ReactDOM from 'react-dom';




const Contact = ()=>{

   const [data, setData] =useState({
      fullname:" ",
      phone:"",
      email:"",
      message:"",
   });

   const InputEvent =(event)=>{
      const{name, value} =event.target;

      setData((preVal) =>{
         return{
            ...preVal,
            [name]:value,
         }
      })

   }

   const formSubmit =(e)=>{
      e.preventDefault();
      alert(`${data.fullname}`);
   }

   return (
   <>
      <div>
         <h1 className="text-center">Contact Us</h1>
      </div>
      <div>
         <div className="container contact_div mb-5">
            <div className="row">
               <div className="col-md-6 col-10 mx-auto">
                  
                     <form onSubmit={formSubmit}>
                        <div className="mb-3">
                           <label for="exampletext1" className="form-label">Full Name</label>
                           <input onChange={InputEvent} name="fullname" value={data.fullname} type="text" className="form-control" id="exampletext1"/>
                        </div>
                        <div className="mb-3">
                           <label for="examplenumber1" className="form-label">Phone No</label>
                           <input  onChange={InputEvent} name="phone" value={data.phone} type="number" className="form-control" id="examplenumber1"/>
                        </div>
                        <div className="mb-3">
                           <label for="exampleInputEmail1" className="form-label">Email address</label>
                           <input  onChange={InputEvent}  name="email" value={data.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                           <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                           <textarea onChange={InputEvent} name="message" value={data.message} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                     </form>
                 
               </div>
            </div>
         </div>
      </div>
   </>
   );
   }
export default Contact;