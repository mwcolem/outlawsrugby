import React, {Component} from 'react'

class Officers extends Component {
    render() {
        var officers = [
            {name: "Test", email: "email", title: "title", phone: "phone"},
            {name: "Test2", email: "email2", title: "title2", phone: "phone2"}
        ]

        return (
            <div>
                <div>Officers</div>
                <ul>
                    {officers.map(function(officer, i) {
                        return <li key={i}>{officer.name}</li>
                    })}
                </ul>
            </div>
        );
    }
}

export default Officers