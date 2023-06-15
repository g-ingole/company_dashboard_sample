import React from 'react'
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, LineElement, Legend, CategoryScale, LinearScale, PointElement, Filler } from 'chart.js';
ChartJS.register(
    Title, Tooltip, LineElement, Legend,
    CategoryScale, LinearScale, PointElement, Filler
)
const Home = () => {

    const [data, setData] = useState({
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "First Dataset",
                data: [0, 500, 1000, 1.500, 2000, 2.500],
                borderColor: 'skyblue',
                tension: 0.4,
                fill: true,
                pointStyle: 'rect',
                pointBorderColor: 'blue',
                pointBackgroundColor: '#fff',
                showLine: true
            }
        ]
    })
    return (
        <div>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-10'>
                        <div className='row'>
                            <div className='col-lg-5'>
                                <div class="card mb-3" style={{ width: "380px" }}>
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Total Meetings</h5>
                                                <h2>12,503</h2>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <img src={(require("./Images/meeting.png"))} class="img-fluid rounded-start" alt="..." style={{ width: "60px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-5'>
                                <div class="card mb-3" style={{ width: "380px" }}>
                                    <div class="row g-0">
                                        <div class="col-md-8">
                                            <div class="card-body">
                                                <h5 class="card-title">Total Departments</h5>
                                                <h2>9,503</h2>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <img src={(require("./Images/department.png"))} class="img-fluid rounded-start" alt="..." style={{ width: "60px" }} />
                                        </div>
                                    </div>
                                </div>
                            </div>


                        </div>
                        <div className='card p-4' style={{ width: "835px" }}>
                            <h3 style={{ float: "left" }}>Todays Schedule</h3>
                            <div class="row">
                                <div class="col-sm-4">
                                    <div class="card" style={{ width: "250px", backgroundColor: "lightgray", borderRadius: "1px" }}>
                                        <div class="card-body">
                                            <h5 class="card-title">Total Meetings</h5>
                                            <h2 style={{ color: "green" }}>30</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card" style={{ width: "250px", backgroundColor: "lightgray", borderRadius: "1px" }}>
                                        <div class="card-body">
                                            <h5 class="card-title">Departments</h5>
                                            <h2 style={{ color: "green" }}>10</h2>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-4">
                                    <div class="card" style={{ backgroundColor: "lightgray", borderRadius: "1px",width: "250px" }}>
                                        <div class="card-body">
                                            <h5 class="card-title">Participants</h5>
                                            <h2 style={{ color: "green" }}>1,530</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='row mt-5' style={{ width: "844px" }}>
                            <div className='col-lg-3'>
                                <div class="card" style={{ width: "13rem" }}>
                                    <div class="card-body">
                                        <p class="card-text">Total Action Points</p>
                                        <h5 class="card-title">500</h5>

                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-3'>
                                <div class="card" style={{ width: "13rem" }}>
                                    <div class="card-body">
                                        <p class="card-text">Total Compliencs</p>
                                        <h5 class="card-title">100</h5>

                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-3'>
                                <div class="card" style={{ width: "13rem" }}>
                                    <div class="card-body">
                                        <p class="card-text">Action Points In Progress</p>
                                        <h5 class="card-title">200</h5>
                                    </div>
                                </div>

                            </div>
                            <div className='col-lg-2'>
                                <div class="card" style={{ width: "13rem" }}>
                                    <div class="card-body">
                                        <p class="card-text">Completed</p>
                                        <h5 class="card-title">200</h5>

                                    </div>
                                </div>

                            </div>

                        </div>

                        <div className='card mt5' style={{ width: "843px" }}>
                            <h5>Meeting Overview</h5>
                            <div className="App" style={{ width: '800px', height: '400px' }}>
                                <Line data={data}>Hello</Line>
                            </div>
                            <hr />
                            <div className='p-3'>
                                <div className='row'>
                                    <div className='col-lg-6'>
                                        <h4>1,50,308</h4>
                                        <h6>Total Meetings Of The Year</h6>
                                    </div>
                                    <div className='col-lg-6'>
                                        <h4>1,50,308</h4>
                                        <h6>Total Participants Of The Year</h6>
                                    </div>
                                </div>


                            </div>

                        </div>

                    </div>
                    <div className='col-lg-2 shadow-5 p-3' style={{height:"500px"}}>
                        <h6>Pendency</h6>
                        <div class="card mb-3" style={{ width: "11rem" }}>
                            <div class="card-body">
                                <p class="card-text">Total Pending Action Points</p>
                                <h5 class="card-title">1,503</h5>
                            </div>
                        </div>

                        <div class="card  mb-3" style={{ width: "11rem" }}>
                            <div class="card-body">
                                <p class="card-text">High Priority</p>
                                <h5 class="card-title">503</h5>
                            </div>

                        </div>
                        <div class="card  mb-3" style={{ width: "11rem" }}>
                            <div class="card-body">
                                <p class="card-text">Normal Priority</p>
                                <h5 class="card-title">800</h5>
                            </div>

                        </div>
                        <div class="card  mb-3" style={{ width: "11rem" }}>
                            <div class="card-body">
                                <p class="card-text">Low Priority</p>
                                <h5 class="card-title">800</h5>

                            </div>

                        </div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Home
