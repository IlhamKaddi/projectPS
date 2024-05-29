import React, { useState } from 'react';
import Navbar from '../header/Navbar';
import SideBar from '../SideBar/SideBar';
import './note.css'
import NoteContent from './NoteContent';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';

const SideBarRoutes = ({content,notes}) => {


const SideBarRoutes = ({notes,auth,content}) => {
 const [title, setTitle] = useState('Notes');



 return (


      <div className="app">
        <div className="navbar_content">
          <Navbar  />

    <div>
        <div className='melange'>
        <Navbar title={title} />
        <AuthenticatedLayout user={auth.user}  />
        </div>
        <hr/>

        <div className="layout-container">

        <div className="sidebar-container">
          <SideBar />
        </div>
        <div className="content-container">
          <div className="content">
            <NoteContent   notes={notes}/>
          </div>
        </div>
        </div>
    </div>
 );
};

export default SideBarRoutes;
