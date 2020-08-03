import React from 'react';
import Calendar from 'react-calendar';
import { differenceInCalendarDays } from 'date-fns';

import 'react-calendar/dist/Calendar.css'



export class ReactCalendar extends React.Component {


    state = {
        disabledDates: [
            new Date(2020, 5, 17),
            new Date(2020, 5, 7),new Date(2020, 5, 7),
            new Date(2020, 5, 1),
            new Date(2020, 5, 4),
            new Date(2020, 5, 21),
            new Date(2020, 5, 15),
            new Date(2020, 5, 19),
            new Date(2020, 6, 2),
        ]

    }



    isSameDay = (a, b) => {
        return differenceInCalendarDays(a, b) === 0;
    }


    onChange = (dates) => {
        this.props.dates(dates)
        // this.props.toggleShowCalendar()
        // this.setState({ dates })
    }






    render() {
        let disabledDates = this.state.disabledDates
        // let date = new Date(2020, 16, 5)
        return (
            <div className="react-calander">
                <Calendar className="react-calander-component"
                    onChange={this.onChange}
                    selectRange={false}
                    tileDisabled={({ date, view }) =>
                        (view === 'month') && // Block day tiles only
                        disabledDates.some(disabledDate =>
                            date.getFullYear() === disabledDate.getFullYear() &&
                            date.getMonth() === disabledDate.getMonth() &&
                            date.getDate() === disabledDate.getDate()
                        )}
                />
            </div>
        )
    }
}