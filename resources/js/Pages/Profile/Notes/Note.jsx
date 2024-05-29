import React, { useState } from 'react';
// import { InertiaApp } from '@inertiajs/inertia-react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { InertiaHead } from '@inertiajs/inertia-react';
import Navbar from '../header/Navbar';
import SideBar from '../SideBar/SideBar';
import './note.css'
import NoteContent from './NoteContent';
import { Inertia } from '@inertiajs/inertia';

const SideBarRoutes = ({content,notes}) => {



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
            <NoteContent   notes={notes}/>
            
            {/* Your page components will be rendered here by Inertia.js */}
          </div>
        </div>
      </div>
 );
};

export default SideBarRoutes;
