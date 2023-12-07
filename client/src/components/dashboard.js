import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import menuIcon from '../images/menuIcon.png';
function DashboardIcon() {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDashboard = () => {
      setIsOpen(!isOpen);
    };
  
    return (
        <div className="icon" onClick={toggleDashboard}>
          <img src={menuIcon} alt="menu icon" style={{ cursor: 'pointer' }} />
          {isOpen && (
          <div className="dashboard">
            <Link to="/home"><button>Home Page</button></Link>
            <Link to="/saved"><button>Saved Recipes</button></Link>
            <Link to="/"><button>Landing Page</button></Link>
          </div>
        )}
        </div>

    );
  }
  

export default DashboardIcon;
