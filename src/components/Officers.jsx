import React, {Component} from 'react'

class Officers extends Component {
    render() {
        var officers = [
            {name: "Bill Bell", email: "bill.bell@citadel.edu", title: "President", phone: "(843) 475-0593"},
            {name: "Adam Bearden", email: "beardena88@yahoo.com", title: "Vice President", phone: ""},
            {name: "Butch Setser", email: "butchsetser@yahoo.com", title: "Treasurer", phone: ""},
            {name: "Bertrand Valero", email: "bertrand.valero@gmail.com", title: "	CIPP Chairman", phone: ""},
            {name: "Nick Morrison", email: "nmorrison0349@gmail.com", title: "Match Secretary", phone: "(843) 708-1861"},
            {name: "Scott McLaughlin", email: "smclaughlin@phillipsindsvc.com", title: "Fundraising Chair", phone: ""},
            {name: "Chris Maloney", email: "fobofsc@aol.com", title: "	Social Chair", phone: ""},
            {name: "Mike Williams", email: "mikew@mulemix.com", title: "Field General", phone: "(330) 352-6689"},
            {name: "Bill Bell", email: "bill.bell@citadel.edu", title: "High School Development", phone: "(843) 475-0593"},
            {name: "Andy Pelland", email: "apelland123@gmail.com", title: "Olde Boy's President", phone: ""},
            {name: "Matt Coleman", email: "coleman@charlestonrugby.com", title: "Webmaster", phone: "(864) 380-4215"}
        ]

        var coaches = [
            {name: "Seth Strauss", email: "drseth@ideallifestylepractice.com", title: "Head Coach", phone: ""},
            {name: "Mike Williams", email: "mikew@mulemix.com", title: "Asst/Forwards Coach", phone: "(330) 352-6689"}
        ]

        return (
            <div>
                <div>Officers</div>
                <ul>
                    {officers.map(function(officer, i) {
                        return <li key={i}>{officer.name} {officer.email} {officer.title} {officer.phone}</li>
                    })}
                </ul>
                <div>Coaches</div>
                <ul>
                    {coaches.map(function(coach, i) {
                        return <li key={i}>{coach.name} {coach.email} {coach.title} {coach.phone}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Officers