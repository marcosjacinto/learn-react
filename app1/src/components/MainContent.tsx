import React from "react";
import "../styles/index.scss"

function MainContent() {
    return (
        <div className="App">
            <h1>ReactFacts</h1>
            <p>
                React is a JavaScript library for building user interfaces. It is
                maintained by Facebook and a community of individual developers and
                companies. React can be used as a base in the development of single-page
                or mobile applications. However, React is only concerned with rendering
                data to the DOM, and so creating React applications usually requires the
                use of additional libraries for state management and routing. Redux and
                React Router are respective examples of such libraries.
            </p>
                <ul>
                <li>React is a JavaScript library for building user interfaces.</li>
                    <li>React is maintained by Facebook and a community of individual developers and companies.</li>
            </ul>
        </div>
    )
}

export default MainContent;
            
        