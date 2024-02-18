import React from "react";
import "react-calendar/dist/Calendar.css";
import "./calendar1.css";
import { Col, Row } from "reactstrap";

const forCount = [1, 2, 3, 4, 5, 6, 7];

function Calendar({ events }) {
  return (
    <div className="calendar">
      <Row>
        {forCount.map((count) =>
          events.map((event) => (
            <Col className="ustuciz">
              <Day key={event.date} date={event.date} icon={event.icon} />
            </Col>
          ))
        )}
      </Row>
    </div>
  );
}

function Day({ date, icon }) {
  return (
    <div className="day">
      <div className="date">{new Date(date).getDate()}</div>
      {/* {icon && <img src={icon} alt="Special Icon" />} */}
    </div>
  );
}

export default Calendar;
