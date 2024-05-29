import React, { useState } from 'react';
import { InertiaLink } from '@inertiajs/inertia-react';
import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';

import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import EventNoteIcon from '@mui/icons-material/EventNote';
import TurnedInNotIcon from '@mui/icons-material/TurnedInNot';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import '../Notes/note.css';

const SideBar = () => {
 const [collapsed, setCollapsed] = useState(false);

 const toggleSidebar = () => {
    setCollapsed(!collapsed);
 };

 const handleTitleChange = (newTitle) => {
    setTitle(newTitle);
 };

 return (
    <div>
      <Sidebar className="sidebar" collapsed={collapsed} onToggle={toggleSidebar}>
        <Menu className='Menu'>
          <MenuItem icon={<MenuOutlinedIcon />} onClick={toggleSidebar}></MenuItem>
          <div className='menu-item'>
            <MenuItem
              icon={<EventNoteIcon />}
              component={<InertiaLink href="/note" />}
              title='Notes'
              onClick={() => handleTitleChange('Notes')}
            >
              Notes
            </MenuItem>
          </div>
          <div className='menu-item'>
            <MenuItem
              icon={<DeleteOutlineIcon />}
              component={<InertiaLink href="/job" />}
              title='tasks'
              onClick={() => handleTitleChange('tasks')}
            >
            tasks
            </MenuItem>
          </div>
          <div className='menu-item'>
            <MenuItem
              icon={<TurnedInNotIcon />}
              component={<InertiaLink href="/Callender" />}
              title='Callender'
              onClick={() => handleTitleChange('Callender')}
            >
            Callender
            </MenuItem>
          </div>
        </Menu>
      </Sidebar>
    </div>
 );
};

export default SideBar;
