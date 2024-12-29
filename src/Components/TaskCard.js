import React from "react";

function TaskCard({ id, title, status, duedate, handleUpdate }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "16px",
        width: "300px",
        border: "1px solid #ccc",
        marginBottom: "8px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <h5>{title}</h5>
        <p>Status: {status}</p>
        <p>Due Date: {duedate}</p>
      </div>
      {status === "Pending" && (
        <button onClick={() => handleUpdate(id)}>Mark Completed</button>
      )}
    </div>
  );
}

export default TaskCard;
