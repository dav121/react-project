import React from "react";

export default function Main() {
    return (
        <main>
            <h1 className="main--title">Fun Facts about React</h1>
            <img className="image" src="../images/react-logo.png" />
            <ul className="main--facts">
                <li>was first released in 2013</li>
                <li>was originally created by Jordan Walker</li>
                <li>Has well over 100k star on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Power thousands of enterprise apps, including mobile apps</li>
                
            </ul>
        </main>
    )
}