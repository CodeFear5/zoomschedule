import React, { useState } from "react";
import {useNavigate} from 'react-router-dom'
import Navbar from './navbar'
import './shedule.css'
const SheduleForm=()=>{


    const [startTime,setStartTime]=useState('');
    const [endTime,setEndTime]=useState('');
    const [description,setDescription]=useState('');
    const [url,setUrl]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
    e.preventDefault();

    navigate('/confirmation',{state:{startTime,endTime,description,url}})
     

    }



return(
    
<div>
<Navbar />
<div className="schedule">
<h2>shedule a meeting</h2>

<form onSubmit={handleSubmit}>

<label>
    Start Time:
    <input
    
    type="datetime-local"
    value={startTime}
    onChange={(e)=>setStartTime(e.target.value)}
    required

/>
</label>
<br />
<label>
    End time:
<input
    
    type="datetime-local"
    value={endTime}
    onChange={(e)=>setEndTime( e.target.value)}
    required

/>
</label>
<br />
<label>
    Description:
<textarea
    value={description}
    onChange={(e)=>setDescription( e.target.value)}
    required

/>
</label>
<br />
<label>
Zoom URL::
<input
type="url"
value={url}
onChange={(e)=>setUrl(e.target.value)}
required

/>

</label>
<br />


<button type="submit">schedule</button>

</form>










    </div>
</div>
   
)



}

export default  SheduleForm;