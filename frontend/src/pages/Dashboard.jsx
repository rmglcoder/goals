import React from 'react';
import UnderConstructionImage from '../img/under-construction.png';

const Dashboard = () => {
    return (
        <div className="under-construction-container">
            <div className="under-construction">
                <img src={UnderConstructionImage} alt="Under Construction" />
            </div>
        </div>
    );
};

export default Dashboard;
