import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navigation extends Component {
    render() {
        return(
            <div>
                <Link to="/home">Home</Link>
                <Link to="/announcements">Announcements</Link>
                <Link to="/schedule">Schedule</Link>
                <Link to="/events">Events</Link>
                <Link to="/officers">Officers</Link>
                <Link to="/roster">Roster</Link>
                <Link to="/oldeboys">OldeBoys</Link>
                <Link to="/sevens">Sevens</Link>
            </div>
        );
    }
}

export default Navigation