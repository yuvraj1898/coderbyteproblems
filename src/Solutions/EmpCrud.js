import React, { useState } from "react";

let count = 1;
function EmpCrud() {
    const [data, setData] = useState({
        id: null,
        name: "",
        role: "",
        salary: null,
    });
    const [empdata, setEmpData] = useState([]);
    const [isediting, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    const handleSubmit = () => {
        if (isediting) {
            const updatedData = empdata.map((item) =>
                item.id === editIndex
                    ? { ...item, name: data.name, role: data.role, salary: data.salary }
                    : item
            );
            setEmpData(updatedData);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setEmpData([...empdata, { ...data, id: count }]);
            count++;
        }
        setData({ name: "", role: "", salary: "" });
    };

    const handledelete = (id) => {
        const alldata = empdata.filter((item) => item.id !== id);
        setEmpData(alldata);
    };

    const handleedit = (id) => {
        const selectedData = empdata.find((item) => item.id === id);
        if (selectedData) {
            setData(selectedData);
            setIsEditing(true);
            setEditIndex(id);
        }
    };

    return (
        <div className="h-full w-full flex justify-center">
            <div className="flex flex-col w-1/4 space-y-4">
                <label>Name</label>
                <input
                    className="border-2 p-2"
                    type="text"
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                />

                <label>Role</label>
                <input
                    className="border-2 p-2"
                    type="text"
                    value={data.role}
                    onChange={(e) => setData({ ...data, role: e.target.value })}
                />

                <label>Salary</label>
                <input
                    className="border-2 p-2"
                    type="number"
                    value={data.salary}
                    onChange={(e) => setData({ ...data, salary: e.target.value })}
                />

                <button
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    onClick={handleSubmit}
                >
                    {isediting ? "Update Data" : "Add Data"}
                </button>

                <table cellSpacing={10} className="border-collapse border border-gray-300">
                    <thead>
                        <tr>    
                            <th className="border border-gray-300 px-4 py-2">Name</th>
                            <th className="border border-gray-300 px-4 py-2">Role</th>
                            <th className="border border-gray-300 px-4 py-2">Salary</th>
                            {empdata.length > 0 &&<th className="border border-gray-300 px-4 py-2">Actions</th>}
                        </tr>
                    </thead>
                    <tbody>
                        {empdata.length > 0 ? (
                            empdata.map((item, index) => (
                                <tr key={item.id}>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.name}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.role}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        {item.salary}
                                    </td>
                                    <td className="border border-gray-300 px-4 py-2">
                                        <div className="flex gap-5">
                                            <button
                                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                                onClick={() => handledelete(item.id)}
                                            >
                                                Delete
                                            </button>
                                            <button
                                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                                                onClick={() => handleedit(item.id)}
                                            >
                                                Edit
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan={4} className="text-center py-2">
                                    No data available
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default EmpCrud;
