
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';


function Huddle() {
    const navigate = useNavigate();

    // Redirect to login if not already
    if(!Auth.loggedIn()){
        navigate('/login');
    }
    
    return (
        <div>
        <div>
          <div className="d-flex justify-content-between align-items-center p-3 bg-light border">
          <h1>Huddle</h1>
            </div>
            <div className="card bg-white card-rounded w-50">
        <div className="card-header bg-dark text-center">
          <h1>Welcome to Tendem Travel - Calendar</h1>
        </div>
      </div>
            </div>
        
        </div>
      )
  }
  
  export default Huddle;