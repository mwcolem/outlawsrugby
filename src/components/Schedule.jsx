import React, {Component} from 'react'

class Schedule extends Component {
    render() {
        var matches = [
            {date: "8/26/2017", opponent: "Citadel", location: "Home", type: "Friendly", result: "W 15-13"},
            {date: "9/9/2017", opponent: "Southern Pines", location: "Away", type: "Tournament", result: ""},
            {date: "9/16/2017", opponent: "Birmingham", location: "Home", type: "Friendly", result: "W 29-12"},
            {date: "9/30/2017", opponent: "Greenville", location: "Home", type: "Matrix", result: "W 27-10"},
            {date: "10/7/2017", opponent: "Gainesville", location: "Away", type: "Friendly", result: "W 30-29"},
            {date: "10/21/2017", opponent: "Southern Pines", location: "Away", type: "Matrix", result: "L 46-22"},
            {date: "11/4/2017", opponent: "Chapel Hill", location: "Away", type: "Matrix", result: "L 29-22"},
            {date: "11/11/2017", opponent: "Augusta", location: "Home", type: "Friendly", result: "W 29-12"},
            {date: "1/27/2018", opponent: "Birmingham", location: "Away", type: "Friendly", result: ""},
            {date: "2/3/2018", opponent: "Greenville", location: "Away", type: "Matrix", result: ""},
            {date: "2/17/2018", opponent: "Chapel Hill", location: "Home", type: "Matrix", result: ""},
            {date: "3/3/2018", opponent: "Southern Pines", location: "Home", type: "Matrix", result: ""},
            {date: "3/10/2018", opponent: "Savannah", location: "Away", type: "Tournament", result: ""}
        ]
        return(
            <div>
                <div>Schedule</div>
                <ul>
                    {matches.map(function(match, i) {
                        return <li key={i}>{match.date} {match.opponent} {match.location} {match.type} {match.result}</li>
                    })}
                </ul>
                <div>
                    <center>
                        <h2>Record: 5-2-0 (1-2-0 Matrix)</h2>
                    </center>
                </div>
            </div>
        );
    }
}

export default Schedule