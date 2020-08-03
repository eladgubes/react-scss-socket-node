import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
export class DetailsCalendar extends React.Component {

    state = {
        date: new Date(),
    }

    onChange = date => this.setState({ date })


    render() {
        return (
            <div>
                <Calendar
                    onChange={this.onChange}
                    value={this.state.date}
                />
            </div>
        )
    }
}