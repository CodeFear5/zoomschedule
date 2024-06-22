
import { useNavigate,useLocation} from  'react-router-dom';
import './confirm.css'
const Confirmation=()=>{
const navigate=useNavigate();
const location=useLocation();
const {startTime,endTime,description,url}=location.state || {};


if(!url){
    navigate('/');
}


const handleJoinClick=()=>{
    window.location.href=url;
}
return(

    

    <div className='confirmation'> 
    

    <h2>Meeting Scheduled</h2>
    <p> <strong>Start Time:</strong>{startTime} </p>
    <p> <strong>End Time:</strong>{endTime} </p>
    <p> <strong>Description:</strong>{description} </p>
    <button onClick={handleJoinClick} className='join-button'>Join Meeting</button>

    

        
        
           </div>
)


}

export  default Confirmation;












