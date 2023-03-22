import './TopCourses.css';
import { useState } from 'react';
import Learningpath from '../LearningPath/LearningPath';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function TopCourses() {

    const [popUp, setPopUp] = useState(false);

    const courseTitle = [
        { name: "React" },
        { name: "Python" },
        { name: "Java" },
        { name: "SQL" },
        { name: "Azure" },
        { name: "Angular" },
        { name: ".NET" },
        { name: "Salesforce" },
        { name: "MongoDB" },
        { name: "AWS" }
    ];

    function learningPathHandler() {
        setPopUp(true);
        console.log("clicked");
    }

    return (
        <div className='top-courses-page'>
            <BrowserRouter>
                <div className='top-courses'>Top courses</div>
                {courseTitle.map(function (data, index) {
                    return (
                        <Link to="/learning_path">
                            <div key={index} className='course-block' onClick={learningPathHandler}>
                                <div className='course-title'>{data.name}</div>
                            </div>
                        </Link>
                    )
                })}
                <Routes>
                    <Route exact path="/learning_path" element={<Learningpath />} />
                </Routes>
            </BrowserRouter>
            <Learningpath trigger={popUp} setTrigger={setPopUp}></Learningpath>
        </div>
    );
}

export default TopCourses;