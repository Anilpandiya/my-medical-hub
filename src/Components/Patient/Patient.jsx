import React from 'react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import './Patient.scss';
import { Eventcalendar, setOptions, Popup, Button, formatDate, toast } from '@mobiscroll/react';

setOptions({
    theme: 'ios',
    themeVariant: 'light'
});

const doctors = [{
    id: 1,
    name: 'Dr. Breanne Lorinda',
    color: '#b33d3d'
}, {
    id: 2,
    name: 'Dr. Ryan Melicent',
    color: '#309346'
}, {
    id: 3,
    name: 'Dr. Meredith Chantelle',
    color: '#c77c0a'
}];

const defaultAppointments = [{
    title: 'Jude Chester',
    age: 69,
    start: '2022-04-27T08:00',
    end: '2022-04-27T08:45',
    confirmed: false,
    reason: 'Headaches morning & afternoon',
    location: 'Topmed, Building A, Room 203',
    resource: 1
}, {
    title: 'Leon Porter',
    age: 44,
    start: '2022-04-27T09:00',
    end: '2022-04-27T09:45',
    confirmed: false,
    reason: 'Left abdominal pain',
    location: 'Topmed, Building D, Room 360',
    resource: 1
}, {
    title: 'Merv Kenny',
    age: 56,
    start: '2022-04-27T10:00',
    end: '2022-04-27T10:45',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Topmed, Building D, Room 360',
    resource: 1
}, {
    title: 'Derek Austyn',
    age: 72,
    start: '2022-04-27T13:00',
    end: '2022-04-27T13:45',
    confirmed: false,
    reason: 'Nausea & weakness',
    location: 'Rose Medical Center, Room 18',
    resource: 1
}, {
    title: 'Jenifer Kalyn',
    age: 65,
    start: '2022-04-27T14:00',
    end: '2022-04-27T14:45',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Rose Medical Center, Room 18',
    resource: 1
}, {
    title: 'Lily Racquel',
    age: 54,
    start: '2022-04-27T10:00',
    end: '2022-04-27T10:45',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Procare, Building C, Room 12',
    resource: 2
}, {
    title: 'Mia Sawyer',
    age: 59,
    start: '2022-04-27T11:00',
    end: '2022-04-27T11:45',
    confirmed: true,
    reason: 'Difficulty sleeping & loss of appetite',
    location: 'Procare, Building C, Room 12',
    resource: 2
}, {
    title: 'Fred Valdez',
    age: 62,
    start: '2022-04-27T15:00',
    end: '2022-04-27T15:45',
    confirmed: false,
    reason: 'High blood pressure',
    location: 'Procare, Building C, Room 40',
    resource: 2
}, {
    title: 'Sylvia Cale',
    age: 41,
    start: '2022-04-27T08:00',
    end: '2022-04-27T08:45',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'MedStar, Building A, Room 1',
    resource: 3
}, {
    title: 'Isadora Lyric',
    age: 30,
    start: '2022-04-27T09:00',
    end: '2022-04-27T09:45',
    confirmed: false,
    reason: 'Constant tiredness & weakness',
    location: 'MedStar, Building A, Room 1',
    resource: 3
}, {
    title: 'Jon Candace',
    age: 63,
    start: '2022-04-27T12:00',
    end: '2022-04-27T12:45',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'MedStar, Building A, Room 1',
    resource: 3
}, {
    title: 'Layton Drake',
    age: 57,
    start: '2022-04-27T13:00',
    end: '2022-04-27T13:45',
    confirmed: true,
    reason: 'Headaches & loss of appetite',
    location: 'Vitalife, Room 160',
    resource: 3
}, {
    title: 'Florence Amy',
    age: 73,
    start: '2022-04-27T14:00',
    end: '2022-04-27T14:45',
    confirmed: false,
    reason: 'Dry, persistent cough & headache',
    location: 'Vitalife, Room 160',
    resource: 3
}, {
    title: 'Willis Kane',
    age: 44,
    start: '2022-04-28T08:00',
    end: '2022-04-28T08:45',
    confirmed: true,
    reason: 'Back pain',
    location: 'Care Cente, Room 320r',
    resource: 1
}, {
    title: 'Theo Calanthia',
    age: 60,
    start: '2022-04-28T09:00',
    end: '2022-04-28T09:45',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 320',
    resource: 1
}, {
    title: 'Ford Kaiden',
    age: 53,
    start: '2022-04-28T14:00',
    end: '2022-04-28T14:45',
    confirmed: true,
    reason: 'Nausea & vomiting',
    location: 'Care Center, Room 206',
    resource: 1
}, {
    title: 'Jewell Ryder',
    age: 75,
    start: '2022-04-28T15:00',
    end: '2022-04-28T15:45',
    confirmed: false,
    reason: 'High blood pressure',
    location: 'Care Center, Room 206',
    resource: 1
}, {
    title: 'Antonia Cindra',
    age: 48,
    start: '2022-04-28T12:00',
    end: '2022-04-28T12:45',
    confirmed: true,
    reason: 'Dry, persistent cough',
    location: 'Medica Zone, Building C, Room 2',
    resource: 3
}, {
    title: 'Gerry Irma',
    age: 50,
    start: '2022-04-28T13:00',
    end: '2022-04-28T13:45',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Building C, Room 2',
    resource: 3
}, {
    title: 'Carlyn Dorothy',
    age: 36,
    start: '2022-04-28T14:00',
    end: '2022-04-28T14:45',
    confirmed: true,
    reason: 'Tiredness & muscle pain',
    location: 'Medica Zone, Building C, Room 2',
    resource: 3
}, {
    title: 'Alma Potter',
    age: 74,
    start: '2022-04-26T10:00',
    end: '2022-04-26T10:45',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
}, {
    title: 'Debra Aguilar',
    age: 47,
    start: '2022-04-26T11:00',
    end: '2022-04-26T11:45',
    confirmed: false,
    reason: 'Fever & sore throat',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
}, {
    title: 'Tommie Love',
    age: 42,
    start: '2022-04-26T12:00',
    end: '2022-04-26T12:45',
    confirmed: false,
    reason: 'Dry, persistent cough & headache',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
}, {
    title: 'Marjorie White',
    age: 55,
    start: '2022-04-26T13:00',
    end: '2022-04-26T13:45',
    confirmed: true,
    reason: 'Back pain',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
}, {
    title: 'Brandon Perkins',
    age: 68,
    start: '2022-04-26T14:00',
    end: '2022-04-26T14:45',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
}, {
    title: 'Lora Wilson',
    age: 66,
    start: '2022-04-26T15:00',
    end: '2022-04-26T15:45',
    confirmed: false,
    reason: 'Fever & headache',
    location: 'Vitacure, Building D, Room 2',
    resource: 1
}, {
    title: 'Ismael Bates',
    age: 58,
    start: '2022-04-26T08:00',
    end: '2022-04-26T08:45',
    confirmed: false,
    reason: 'Tiredness & muscle pain',
    location: 'Care Center, Room 300',
    resource: 2
}, {
    title: 'Archie Wilkins',
    age: 69,
    start: '2022-04-26T09:00',
    end: '2022-04-26T09:45',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Care Center, Room 300',
    resource: 2
}, {
    title: 'Christie Baker',
    age: 71,
    start: '2022-04-26T10:00',
    end: '2022-04-26T10:45',
    confirmed: true,
    reason: 'Headaches morning & afternoon',
    location: 'Care Center, Room 300',
    resource: 2
}, {
    title: 'Laura Shelton',
    age: 45,
    start: '2022-04-26T12:00',
    end: '2022-04-26T12:45',
    confirmed: false,
    reason: 'Dry, persistent cough',
    location: 'Care Center, Room 300',
    resource: 2
}, {
    title: 'Mary Hudson',
    age: 77,
    start: '2022-04-26T09:00',
    end: '2022-04-26T09:45',
    confirmed: true,
    reason: 'Fever & sore throat',
    location: 'Medica Zone, Room 45',
    resource: 3
}, {
    title: 'Ralph Rice',
    age: 64,
    start: '2022-04-26T10:00',
    end: '2022-04-26T10:45',
    confirmed: true,
    reason: 'Left abdominal pain',
    location: 'Medica Zone, Room 45',
    resource: 3
}, {
    title: 'Marc Hoffman',
    age: 53,
    start: '2022-04-26T12:00',
    end: '2022-04-26T12:45',
    confirmed: true,
    reason: 'Dry, persistent cough & headache',
    location: 'Medica Zone, Room 45',
    resource: 3
}, {
    title: 'Arlene Lyons',
    age: 41,
    start: '2022-04-26T14:00',
    end: '2022-04-26T14:45',
    confirmed: true,
    reason: 'Nausea & weakness',
    location: 'Care Center, Room 202',
    resource: 3
}, {
    title: 'Thelma Shaw',
    age: 26,
    start: '2022-04-26T15:00',
    end: '2022-04-26T15:45',
    confirmed: true,
    reason: 'Anxiousness & sleeping disorder',
    location: 'Care Center, Room 202',
    resource: 3
}, {
    title: 'Dory Edie',
    age: 45,
    start: '2022-04-25T09:00',
    end: '2022-04-25T09:45',
    confirmed: true,
    reason: 'Right abdominal pain',
    location: 'Vitacure, Building A, Room 203',
    resource: 2
}, {
    title: 'Kaylin Toni',
    age: 68,
    start: '2022-04-25T10:00',
    end: '2022-04-25T10:45',
    confirmed: true,
    reason: 'Itchy, red rashes',
    location: 'Vitacure, Building A, Room 203',
    resource: 2
}, {
    title: 'Gray Kestrel',
    age: 60,
    start: '2022-04-25T12:00',
    end: '2022-04-25T12:45',
    confirmed: true,
    reason: 'Cough & fever',
    location: 'Vitacure, Building A, Room 203',
    resource: 2
}, {
    title: 'Reg Izabelle',
    age: 41,
    start: '2022-04-25T14:00',
    end: '2022-04-25T14:45',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Medica Zone, Room 13',
    resource: 2
}, {
    title: 'Lou Andie',
    age: 76,
    start: '2022-04-25T15:00',
    end: '2022-04-25T15:45',
    confirmed: true,
    reason: 'High blood pressure',
    location: 'Medica Zone, Room 13',
    resource: 2
}, {
    title: 'Yancy Dustin',
    age: 92,
    start: '2022-04-25T18:00',
    end: '2022-04-25T18:45',
    confirmed: true,
    reason: 'Fever & headache',
    location: 'Vitacure, Building E, Room 50',
    resource: 3
}, {
    title: 'Terry Clark',
    age: 78,
    start: '2022-04-25T11:00',
    end: '2022-04-25T11:45',
    confirmed: true,
    reason: 'Swollen ankles',
    location: 'Vitacure, Building E, Room 50',
    resource: 3
}];

function Patient() {
    const [appointments, setAppointments] = React.useState(defaultAppointments);
    const [isOpen, setOpen] = React.useState(false);
    const [anchor, setAnchor] = React.useState(null);
    const [currentEvent, setCurrentEvent] = React.useState(null);
    const [info, setInfo] = React.useState('');
    const [time, setTime] = React.useState('');
    const [status, setStatus] = React.useState('');
    const [reason, setReason] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [buttonText, setButtonText] = React.useState('');
    const [buttonType, setButtonType] = React.useState('');
    const [bgColor, setBgColor] = React.useState('');
    const timerRef = React.useRef(null);
    
    const view = React.useMemo(() => {
        return {
            schedule: {
                type: 'week',
                startDay: 1,
                endDay: 5,
                startTime: '08:00',
                endTime: '18:00',
                allDay: false
            }
        };
    }, []);
    
    const onEventHoverIn = React.useCallback((args) => {
        const event = args.event;
        const resource = doctors.find(dr => dr.id === event.resource);
        const time = formatDate('hh:mm A', new Date(event.start)) + ' - ' + formatDate('hh:mm A', new Date(event.end));

        setCurrentEvent(event);

        if (event.confirmed) {
            setStatus('Confirmed');
            setButtonText('Cancel appointment');
            setButtonType('warning');
        } else {
            setStatus('Canceled');
            setButtonText('Confirm appointment');
            setButtonType('success');
        }
        
        setBgColor(resource.color);
        setInfo(event.title + ', Age: ' + event.age);
        setTime(time);
        setReason(event.reason);
        setLocation(event.location);
        
        if(timerRef.current) {
            clearTimeout(timerRef.current);
        }
        
        setAnchor(args.domEvent.target);
        setOpen(true);
    }, []);
    
    const onEventHoverOut = React.useCallback(() => {
        timerRef.current =setTimeout(() => { setOpen(false); }, 200);
    }, []);
    
    const onEventClick = React.useCallback(() => {
        setOpen(true);
    }, []);
    
    const onMouseEnter = React.useCallback(() => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    }, []);
    
    const onMouseLeave = React.useCallback(() => {
        timerRef.current =setTimeout(() => { setOpen(false); }, 200);
    }, []);

    const setStatusButton = React.useCallback(() => {
        setOpen(false);
        const index = appointments.findIndex(item => item.id === currentEvent.id);
        const newApp = [...appointments];
        newApp[index].confirmed = !appointments[index].confirmed;
        setAppointments(newApp);
        toast({
            message: 'Appointment ' + (currentEvent.confirmed ? 'confirmed' : 'canceled')
        });
    }, [appointments, currentEvent]);


    const viewFile = React.useCallback(() => {
        setOpen(false);
        toast({
            message: 'View file'
        });
    }, []);
    
    const deleteApp = React.useCallback(() => {
        setAppointments(appointments.filter(item => item.id !== currentEvent.id));
        setOpen(false);
        toast({
            message: 'Appointment deleted'
        });
    }, [appointments, currentEvent]);
    
    return <div>
        <Eventcalendar
            view={view}
            resources={doctors}
            data={appointments}
            clickToCreate={false}
            dragToCreate={false}
            showEventTooltip={false}
            onEventHoverIn={onEventHoverIn}
            onEventHoverOut={onEventHoverOut}
            onEventClick={onEventClick}
        />
        <Popup
            display="anchored"
            isOpen={isOpen}
            anchor={anchor}
            touchUi={false}
            showOverlay={false}
            contentPadding={false}
            closeOnOverlayClick={false}
            width={350}
            cssClass="md-tooltip"
        >
            <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
                <div className="md-tooltip-header" style={{ backgroundColor: bgColor }}>
                    <span className="md-tooltip-name-age">{info}</span>
                    <span className="md-tooltip-time">{time}</span>
                </div>
                <div className="md-tooltip-info">
                    <div className="md-tooltip-title">
                        Status: <span className="md-tooltip-status md-tooltip-text">{status}</span>
                        <Button color={buttonType} variant="outline" className="md-tooltip-status-button" onClick={setStatusButton}>{buttonText}</Button>
                    </div>
                    <div className="md-tooltip-title">Reason for visit: <span className="md-tooltip-reason md-tooltip-text">{reason}</span></div>
                    <div className="md-tooltip-title">Location: <span className="md-tooltip-location md-tooltip-text">{location}</span></div>
                    <Button color="secondary" className="md-tooltip-view-button" onClick={viewFile}>View patient file</Button>
                    <Button color="danger" variant="outline" className="md-tooltip-delete-button" onClick={deleteApp}>Delete appointment</Button>
                </div>
            </div>
        </Popup>
    </div>
}

export default Patient;