
import { useNavigate } from 'react-router-dom';
import Auth from '../../utils/auth';


function Chat() {
    const navigate = useNavigate();

    // Redirect to login if not already
    if(!Auth.loggedIn()){
        navigate('/login');
    }
    
    return (
        <div>
        <div>
          <div className="d-flex justify-content-between align-items-center p-3 bg-light border">
          <h1>Chat</h1>
            </div>
            </div>
        
        </div>
      )
  }
  
  export default Chat;