import React, { useEffect, useState } from "react";

const api = {
    ShipScheduledata: () =>
        new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 1,
                        shipName: "SS Oceanic",
                        arrivalTime: "2024-12-29T10:30:00Z",
                        departureTime: "2024-12-29T15:00:00Z",
                        status: "Arrived",
                    },
                    {
                        id: 2,
                        shipName: "MV Atlantic",
                        arrivalTime: "2024-12-29T12:00:00Z",
                        departureTime: "2024-12-29T18:00:00Z",
                        status: "Pending",
                    },
                    {
                        id: 3,
                        shipName: "SS Pacific",
                        arrivalTime: "2024-12-29T08:00:00Z",
                        departureTime: "2024-12-29T13:00:00Z",
                        status: "Departed",
                    },
                    {
                        id: 4,
                        shipName: "MS Harmony",
                        arrivalTime: "2024-12-29T14:00:00Z",
                        departureTime: "2024-12-29T20:00:00Z",
                        status: "Delayed",
                    },
                ]);
            }, 4000);
        }),
};

function ShipSchedule() {
    const [loading, setLoading] = useState(true);
    const [shipdata, setShipData] = useState([]);

    useEffect(() => {
        getalldata();
    }, []);

    const getalldata = async () => {
        const data = await api.ShipScheduledata();
        setShipData(data);
        setLoading(false);
    };

    return (
        <>
            {loading ? (
                <div className="loading-spinner"></div>
            ) : (
                <div style={{ overflowX: "auto" }}>
                    <table cellSpacing={10}>
                        <thead>
                            <tr>
                                <th>Ship Name</th>
                                <th>Arrival Time</th>
                                <th>Departure Time</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shipdata.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.shipName}</td>
                                    <td>{new Date(item.arrivalTime).toLocaleString()}</td>
                                    <td>{new Date(item.departureTime).toLocaleString()}</td>
                                    <td
                                        style={{
                                            color:
                                                item.status === "Arrived"
                                                    ? "green"
                                                    : item.status === "Delayed"
                                                    ? "red"
                                                    : "black",
                                        }}
                                    >
                                        {item.status}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </>
    );
}

export default ShipSchedule;
