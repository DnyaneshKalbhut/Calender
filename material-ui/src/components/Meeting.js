import React, { useEffect, useState } from "react";

const API_URL = "http://localhost:5000/api/meetings"; // Update with your backend URL

const MeetingManager = () => {
  const [meetings, setMeetings] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Fetch meetings from API
  useEffect(() => {
    setLoading(true);
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        setMeetings(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching meetings:", error);
        setError("Failed to fetch meetings");
        setLoading(false);
      });
  }, []);

  // Function to create a new meeting
  const handleCreateMeeting = (e) => {
    e.preventDefault();

    const newMeeting = {
      title,
      description,
      start_time: startTime,
      end_time: endTime,
    };

    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newMeeting),
    })
      .then((response) => response.json())
      .then((data) => {
        setMeetings([...meetings, data]);
        setTitle("");
        setDescription("");
        setStartTime("");
        setEndTime("");
      })
      .catch((error) => console.error("Error creating meeting:", error));
  };

  return (
    <div>
      <h2>Meeting Manager</h2>

      {loading && <p>Loading meetings...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* Form to Create New Meeting */}
      <form onSubmit={handleCreateMeeting} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
        />
        <input
          type="datetime-local"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
        />
        <button type="submit">Create Meeting</button>
      </form>

      {/* List of Meetings */}
      <ul>
        {meetings.map((meeting) => (
          <li key={meeting.id}>
            <strong>{meeting.title}</strong> - {meeting.start_time} to {meeting.end_time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MeetingManager;
