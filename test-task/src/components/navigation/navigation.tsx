import React, { FC } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './navigation.css';

const Navigation: FC = () => {
  return (
    <nav className="tab_container">
      
        <NavLink to="/" className="tab_link_left">
        
        Всего
      
        </NavLink>
      
        < NavLink to="/FundPage" className="tab_link_right">
        
          Фонд эксплутационных скважин
        
        </NavLink>
     
    </nav>
  );
};

export { Navigation };
