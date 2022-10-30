import React from 'react';


export default class LoginForm extends React.Component {
    render() {
    return (
        <form>
            <h3 className='p-3 bg-light bg-opacity-10 border border-primary border-start-0 rounded-pill'>Log In</h3>
                <br></br>
            <div className="mb-3">
                <label className="form-label">Employee ID</label>

                <input type="number" className="form-control" id="employeeId"></input>
            </div>

            <div className="mb-3">
                <label className="form-label">Password</label>

                <input type="password" className="form-control" id="employeePassword"></input>
            </div>

            <div className="mb-3 form-check">

                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>

                <label className="form-check-label" for="exampleCheck1">Clock Me In</label>

            </div>
            <div className="mb-3 form-check">

                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>

                <label className="form-check-label" for="exampleCheck1">Clock Me Out</label>

            </div>
                <button type="submit" className="btn btn-primary">Submit</button>
        </form>
        )
    }
}