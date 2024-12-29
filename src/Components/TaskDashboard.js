import React, { useEffect, useState } from "react";
import TaskCard from "./TaskCard";

// Mock API functions with promises
const mockApi = {
  fetchTasks: () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve([
          { id: 1, title: "Title for Task 1", status: "Pending", duedate: "12 Dec 2022" },
          { id: 2, title: "Title for Task 2", status: "Completed", duedate: "12 Dec 2022" },
          { id: 3, title: "Title for Task 3", status: "Pending", duedate: "12 Dec 2022" },
        ]);
      }, 1000); // Simulate 1 second delay
    }),

  updateTaskStatus: (id, tasks) =>
    new Promise((resolve) => {
      setTimeout(() => {
        const updatedTasks = tasks.map((task) =>
          task.id === id ? { ...task, status: "Completed" } : task
        );
        resolve(updatedTasks);
      }, 500); // Simulate 500ms delay
    }),

  filterTasks: (filterValue, tasks) =>
    new Promise((resolve) => {
      setTimeout(() => {
        if (filterValue === "All") {
          resolve(tasks);
        } else {
          const filteredTasks = tasks.filter((task) => task.status === filterValue);
          resolve(filteredTasks);
        }
      }, 300); // Simulate 300ms delay
    }),
updatealltasks:(tasks)=> 
    new Promise((resolve)=>{
        setTimeout(()=>{
            const updatealltask = tasks.map((task)=> task.status==="Pending" ? {...task,status:"Completes"}:{...task,status:"Pending"} )
            resolve(updatealltask);
        },1000)
    })
};

function TaskDashboard() {
  const [allTasks, setAllTasks] = useState([]); // Unfiltered full data
  const [tasklist, setTaskList] = useState([]); // Displayed filtered data
  const [loading, setLoading] = useState(false); // API call loading state

  // Fetch tasks when the component mounts
  useEffect(() => {
    setLoading(true);
    mockApi
      .fetchTasks()
      .then((tasks) => {
        setAllTasks(tasks);
        setTaskList(tasks);
      })
      .finally(() => setLoading(false));
  }, []);

  const handleUpdateStatus = (id) => {
    setLoading(true);
    mockApi
      .updateTaskStatus(id, allTasks)
      .then((updatedTasks) => {
        setAllTasks(updatedTasks);
        setTaskList(updatedTasks);
      })
      .finally(() => setLoading(false));
  };

  const handleFilterChange = (e) => {
    const filterValue = e.target.value;
    setLoading(true);
    mockApi
      .filterTasks(filterValue, allTasks)
      .then((filteredTasks) => {
        setTaskList(filteredTasks);
      })
      .finally(() => setLoading(false));
  };
  const updateall=()=>{
    setLoading(true);
    mockApi.updatealltasks(allTasks).then((updatedtasks)=>{
        setAllTasks(updatedtasks);
        setTaskList(updatedtasks);
    }).finally(()=>setLoading(false))
  }

  return (
    <>
      <label htmlFor="filter-tasks">Filter Tasks: </label>
      <select id="filter-tasks" onChange={handleFilterChange}>
        <option value="All">All</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
      </select>
      <button onClick={()=>updateall()}>Update all</button>
      {loading && <p>Loading...</p>}
      <ul>
        {!loading &&
          tasklist.map((task) => (
            <TaskCard
              key={task.id}
              {...task}
              handleUpdate={handleUpdateStatus}
            />
          ))}
      </ul>
    </>
  );
}

export default TaskDashboard;
