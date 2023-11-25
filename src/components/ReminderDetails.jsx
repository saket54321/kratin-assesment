import React, { useState } from "react";
import "./ReminderDetails.css";

const ReminderDetails = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [reminderText, setReminderText] = useState("");
  const [reminders, setReminders] = useState([]);

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
  };

  const handleReminderTextChange = (e) => {
    setReminderText(e.target.value);
  };

  const handleSetReminder = () => {
    if (date && time && reminderText) {
      const reminderDateTime = new Date(`${date}T${time}`);
      const now = new Date();

      if (reminderDateTime > now) {
        setTimeout(() => {
          alert(`Reminder: ${reminderText}`);
        }, reminderDateTime - now);

        // Add the reminder to the list of reminders
        setReminders([...reminders, { date, time, reminderText }]);

        // Clear the input fields
        setDate("");
        setTime("");
        setReminderText("");
      } else {
        alert("Please choose a future date and time for the reminder.");
      }
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <div className="reminderContainer">
      <h1>Set a Reminder</h1>
      <div className="reminderTextDetails">
        <label>Reminder :-</label>
        <input
          type="text"
          value={reminderText}
          placeholder="Write the Reminder ........"
          onChange={handleReminderTextChange}
        />
      </div>
      <div className="dateDetails">
        <label>Date :-</label>
        <input type="date" value={date} onChange={handleDateChange} />
      </div>
      <div className="timeDetails">
        <label>Time :-</label>
        <input type="time" value={time} onChange={handleTimeChange} />
      </div>
      <div className="button">
        <button onClick={handleSetReminder}>Set Reminder</button>
      </div>
      <div className="raContainer">
        <h2>Reminders</h2>
        <ul>
          {reminders.map((reminder, index) => (
            <li key={index}>
              Date: {reminder.date}, Time: {reminder.time}, Reminder:{" "}
              {reminder.reminderText}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ReminderDetails;
