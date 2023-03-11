import React, { useState } from 'react'
import { Navigate } from 'react-router-dom';

function RegisterPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  async function register(ev) {
    ev.preventDefault();
    console.log("clicked Register button")
    const response = await fetch('http://localhost:5000/users/register', {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' }
    })

    if (response.status === 200) {
      alert("registration successful")
      setRedirect(true);
    } else {
      alert("Registration Failed")
    }

  }

  // If Registration Successful Redirect to index
  if (redirect) return <Navigate to={'/login'} />
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
            <div className="card border-0 shadow rounded-3 my-5">
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-light fs-5">Register</h5>
                <form onSubmit={register}>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(event) => setUsername(event.target.value)} />
                    <label htmlFor="floatingInput">Username</label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(event) => setPassword(event.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                  </div>


                  <div className="d-grid">
                    <button className="btn btn-primary btn-login text-uppercase fw-bold" type="submit">Register</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterPage


//<=========================================================================================> 
//<=============================== LEGACY CODES ============================================> 
//<=========================================================================================> 

  // <div className="App">
    //   <div className="container">
    //     <h2>Register User</h2><br />
    //     <div className="row d-flex justify-content-center">
    //       <div className="col-md-4">
    //         <form id="registerForm" onSubmit={register}>
    //           <div className="form-group">            {/* USERNAME */}
    //             <label>Username</label>
    //             <input
    //               type="user"
    //               className="form-control"
    //               id="userInput"
    //               name="userInput"
    //               aria-describedby="userHelp"
    //               placeholder="Enter user"
    //               onChange={(event) => setUsername(event.target.value)}
    //             />

    //           </div>

    //           <div className="form-group">            {/* PASSWORD */}
    //             <label>Password</label>
    //             <input
    //               type="password"
    //               className="form-control"
    //               id="exampleInputPassword1"
    //               placeholder="Password"
    //               onChange={(event) => setPassword(event.target.value)}
    //             />

    //           </div>

    //           <br />
    //           <button type="submit" className="btn btn-primary">Register</button>
    //         </form>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    //<=========================================================================================> 
