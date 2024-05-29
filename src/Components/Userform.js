import React, { useState } from 'react'
import Pdf from './Pdf';
export default function Userform() {

    const [formdata,setformdata] = useState({
        abc : '',
        name: '',
        body:'',
        submitForm:false
    })

    const formdataSubmit = (e) => {
            e.preventDefault();
            setformdata({
                name : e.target.name.value,
                abc: e.target.abc.value,
                body : e.target.body.value,
                submitForm:true
            })
      
      
    }
  return (
    <div>
        {
            formdata.submitForm === false ? (<form className=' w-50 mx-auto mt-5 ' onSubmit={formdataSubmit}>
        <label htmlFor="inputPassword5" className="form-label">Image URL :</label>
        <input type="text" name='abc' className="form-control" ></input>
        
        <label htmlFor="inputPassword5" className="form-label">User Name :</label>
        <input type="text"  className="form-control"  name='name'></input>
       
       <label htmlFor="inputPassword5" className="form-label">Body :</label>
       <input type="text"  name='body' className="form-control" ></input>

       <button type='sumbit'  className='btn btn-success w-100 mx-auto mt-3' >sumbit</button>
    </form>  )    :(<Pdf itisha={formdata}></Pdf>)
        }
    </div>
  )
}
