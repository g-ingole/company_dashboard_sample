import React from 'react'
import "./formpage.css"

const FormPage = () => {
    return (
        <div className='frm'>
            <div className='container-fluid'>
                <div className='row'>
                    <h1 style={{ color: "gray" }}>Schedule Meeting</h1>

                    <div className='card p-4'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <lebel>Meeting Created By</lebel>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <lebel>Venue Of Meeting</lebel>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <label for="exampleInputEmail1" class="form-label">Subject</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className='col-md-3'>
                                <label for="exampleInputEmail1" class="form-label">Start Time</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className='col-md-3'>
                                <label for="exampleInputEmail1" class="form-label">Time</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>

                        </div>
                        <div className='row'>
                            <div className='col-md-3'>
                                <label for="exampleInputEmail1" class="form-label">End Date</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className='col-md-3'>
                                <label for="exampleInputEmail1" class="form-label">Time</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>


                        </div>

                        <div className='row'>
                            <div className='col-md-3 mt-4'>
                                <label for="exampleInputEmail1" class="form-label">Participants <span><button type="button" class="btn btn-dark">Add More</button></span></label>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <lebel>Name Of The Department</lebel>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                            <div className='col-md-6'>
                                <lebel>Designation Of The Officer</lebel>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                </select>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3 mt-4'>
                                <label for="exampleInputEmail1" class="form-label">Create Agenda <span><button type="button" class="btn btn-dark">Create Now</button></span></label>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-md-6 mt-4'>
                                <input type="file" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-lg-6 mt-3'>
                                <button type="button" class="btn btn-danger w5 mr2">Add More</button>
                                <button type="button" class="btn btn-dark w5">Add More</button>
                            </div>

                        </div>



                    </div>

                </div>
            </div>

        </div>
    )
}

export default FormPage
