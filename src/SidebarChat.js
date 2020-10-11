import React from 'react'
import {Avatar } from '@material-ui/core';
import './SidebarChat.css'
//https://youtu.be/gzdQDxzW2Tw?list=PLm0YJYRJ1JBKUQMjv1ESisikPLd2duU-y&t=4350
function SidebarChat() {
    return (
        <div className="sidebarChat">
            <Avatar src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80"/>

            <div className="sidebarChat__info">
                <h2>
                    room name
                </h2>
                <p>
                    A message
                </p>
            </div>

        </div>
    )
}

export default SidebarChat
