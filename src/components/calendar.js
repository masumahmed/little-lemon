import * as React from 'react';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';

export default function Calendar() {
    const today = dayjs();
    const threeMonthsLater = today.add(3, 'month');

    const [value, setValue] = React.useState(today);

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DateCalendar
                value={value}
                onChange={(newValue) => setValue(newValue)}
                minDate={today}              // earliest date = today
                maxDate={threeMonthsLater}   // latest date = today + 3 months
            />
        </LocalizationProvider>
    );
}
