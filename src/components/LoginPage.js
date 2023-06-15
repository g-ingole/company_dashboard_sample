import React from 'react'
import './loginpage.css'

const LoginPage = () => {
    return (
        <div >
            <div className='back f1 b pt4' style={{ backgroundColor: "grey", height: "350px", color: "#fff" }}>Welcome!</div>
            <div className='card' style={{ width: "400px", height: "420px", margin: "0px auto", borderRadius: "20px", marginTop: "-230px" }}>
                <form style={{ width: "320px", margin: "30px auto" }}>
                    <div className="mb-3">
                        <h4>Login</h4>
                        <img alt='' src={require("../components/Images/cdat_logo.png")} style={{ height: "70px", margin: "30px" }} />
                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Username' />
                    </div>
                    <div className="mb-3">
                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Password' />
                    </div>

                    <div class="d-grid">
                        <button type="button" className="btn btn-secondary btn-block mt-3">Login</button>
                    </div>

                    <h6 style={{ float: "left", padding: "20px 0px 20px 0px" }} >Forget Password</h6>
                </form>
            </div>



        </div>
    )
}

export default LoginPage
