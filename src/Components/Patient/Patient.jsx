import React from "react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import {
  Eventcalendar,
  setOptions,
  Popup,
  Button,
  formatDate,
  toast,
} from "@mobiscroll/react";
import doctors from "../../Constants/Doctors";
import defaultAppointments from "../../Constants/DefaultAppointments";
import "./Patient.scss";

setOptions({
  theme: "ios",
  themeVariant: "light",
});

function Patient() {
  const [appointments, setAppointments] = React.useState(defaultAppointments);
  const [isOpen, setOpen] = React.useState(false);
  const [anchor, setAnchor] = React.useState(null);
  const [currentEvent, setCurrentEvent] = React.useState(null);
  const [info, setInfo] = React.useState("");
  const [time, setTime] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [reason, setReason] = React.useState("");
  const [location, setLocation] = React.useState("");
  const [buttonText, setButtonText] = React.useState("");
  const [buttonType, setButtonType] = React.useState("");
  const [bgColor, setBgColor] = React.useState("");
  const timerRef = React.useRef(null);

  const view = React.useMemo(() => {
    return {
      schedule: {
        type: "week",
        startDay: 1,
        endDay: 5,
        startTime: "08:00",
        endTime: "18:00",
        allDay: false,
      },
    };
  }, []);

  const onEventHoverIn = React.useCallback((args) => {
    const event = args.event;
    const resource = doctors.find((dr) => dr.id === event.resource);
    const time =
      formatDate("hh:mm A", new Date(event.start)) +
      " - " +
      formatDate("hh:mm A", new Date(event.end));

    setCurrentEvent(event);

    if (event.confirmed) {
      setStatus("Confirmed");
      setButtonText("Cancel appointment");
      setButtonType("warning");
    } else {
      setStatus("Canceled");
      setButtonText("Confirm appointment");
      setButtonType("success");
    }

    setBgColor(resource.color);
    setInfo(event.title + ", Age: " + event.age);
    setTime(time);
    setReason(event.reason);
    setLocation(event.location);

    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setAnchor(args.domEvent.target);
    setOpen(true);
  }, []);

  const onEventHoverOut = React.useCallback(() => {
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
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
    timerRef.current = setTimeout(() => {
      setOpen(false);
    }, 200);
  }, []);

  const setStatusButton = React.useCallback(() => {
    setOpen(false);
    const index = appointments.findIndex((item) => item.id === currentEvent.id);
    const newApp = [...appointments];
    newApp[index].confirmed = !appointments[index].confirmed;
    setAppointments(newApp);
    toast({
      message:
        "Appointment " + (currentEvent.confirmed ? "confirmed" : "canceled"),
    });
  }, [appointments, currentEvent]);

  const viewFile = React.useCallback(() => {
    setOpen(false);
    toast({
      message: "View file",
    });
  }, []);

  const deleteApp = React.useCallback(() => {
    setAppointments(appointments.filter((item) => item.id !== currentEvent.id));
    setOpen(false);
    toast({
      message: "Appointment deleted",
    });
  }, [appointments, currentEvent]);

  return (
    <div>
        <div className='portal-header'>
            Appointment Portal - Pateint
            <p className='placeholder'>check the scheduled appointments.</p>
        </div>
      <div>
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
            <div
              className="md-tooltip-header"
              style={{ backgroundColor: bgColor }}
            >
              <span className="md-tooltip-name-age">{info}</span>
              <span className="md-tooltip-time">{time}</span>
            </div>
            <div className="md-tooltip-info">
              <div className="md-tooltip-title">
                Status:{" "}
                <span className="md-tooltip-status md-tooltip-text">
                  {status}
                </span>
                <Button
                  color={buttonType}
                  variant="outline"
                  className="md-tooltip-status-button"
                  onClick={setStatusButton}
                >
                  {buttonText}
                </Button>
              </div>
              <div className="md-tooltip-title">
                Reason for visit:{" "}
                <span className="md-tooltip-reason md-tooltip-text">
                  {reason}
                </span>
              </div>
              <div className="md-tooltip-title">
                Location:{" "}
                <span className="md-tooltip-location md-tooltip-text">
                  {location}
                </span>
              </div>
              <Button
                color="secondary"
                className="md-tooltip-view-button"
                onClick={viewFile}
              >
                View patient file
              </Button>
              <Button
                color="danger"
                variant="outline"
                className="md-tooltip-delete-button"
                onClick={deleteApp}
              >
                Delete appointment
              </Button>
            </div>
          </div>
        </Popup>
      </div>
    </div>
  );
}

export default Patient;
