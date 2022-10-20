import React from 'react'
import "./sidebar.css";
import SidebarButton from './sidebarButton';
import { MdFavorite, MdSpaceDashboard } from "react-icons/md";
import { FaPlay, FaSignOutAlt } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";
import { ImFire } from "react-icons/im";

export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <img 
                src="https://www.freepnglogos.com/uploads/one-piece-logo-18.png"
                className="profile-img" 
                alt="profile"
            />
            <div>
                <SidebarButton title="Feed" to="/feed" icon={<MdSpaceDashboard />}/>
                <SidebarButton title="Trending" to="/trending" icon={<ImFire />}/>
                <SidebarButton title="Player" to="/player" icon={<FaPlay />}/>
                <SidebarButton title="Favorites" to="/favorites" icon={<MdFavorite />}/>
                <SidebarButton title="Library" to="/" icon={<IoLibrary />}/>
            </div>
            <SidebarButton title="" to="" icon={<FaSignOutAlt />}/>
        </div>
    );
}
