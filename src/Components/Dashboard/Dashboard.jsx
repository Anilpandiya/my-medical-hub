import { Button } from '@mobiscroll/react';
import { useNavigate  } from 'react-router-dom';
import './Dashboard.scss';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

function Dashboard() {
  const navigate = useNavigate();
  return (
    <div className="dashboard">
       My Medical HUB
       <div>
        <Button color="primary" variant="outline" onClick={() => navigate('/doctor')}>Doctor</Button>
        <Button color="primary" variant="outline" onClick={() => navigate('/patient')}>Patient</Button>
       </div>
    </div>
  );
}

export default Dashboard;
