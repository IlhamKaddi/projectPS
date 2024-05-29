import React, { useState } from 'react';
// import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { InertiaHead } from '@inertiajs/inertia-react';
import Navbar from '../header/Navbar';
import SideBar from '../SideBar/SideBar';
import '../Notes/note.css';

import IndexTask from './indexTask';
import { Inertia } from '@inertiajs/inertia';

const TasksE = ({jobs}) => {
 


 return (

      <div className="app">
        <div className="navbar_content">
          <Navbar  />
        </div>
        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="content-container">
          <div className="content">
            <  IndexTask jobs= {jobs}/>
            
            {/* Your page components will be rendered here by Inertia.js */}
          </div>
        </div>
      </div>
 );
};

export default TasksE ;
