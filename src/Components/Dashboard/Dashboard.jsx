import { Button } from '@mobiscroll/react';
import './Dashboard.scss';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

function Dashboard() {
  return (
    <div className="dashboard">
       My Medical HUB
       <div>
        <Button color="primary" variant="outline">Doctor</Button>
        <Button color="primary" variant="outline">Patient</Button>
       </div>
    </div>
  );
}

export default Dashboard;
