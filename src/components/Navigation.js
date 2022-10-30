import React from 'react';


export default class Navigation extends React.Component {
    render() {
        return (
            <nav className="navbar bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Kawaii_paper_coffee_cup_clip_art.svg/1480px-Kawaii_paper_coffee_cup_clip_art.svg.png"
                        alt="Logo" width="30" height="30" class="d-inline-block align-text-top"></img>
                        &nbsp;Barry's Coffee Corner
                    </a>

                    <ul class="nav justify-content-end">

                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Employee Login</a>
                        </li>

                        <li class="nav-item">
                            <a class="nav-link" href="#" >Main Site</a>
                        </li>

                    </ul>
                </div>
            </nav>
        )
    }
}