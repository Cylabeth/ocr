import React, { useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import es from 'date-fns/locale/es';
import Form from 'react-bootstrap/Form'
registerLocale('es', es)

const Calendar = () => {
    const [startDate, setStartDate] = useState(new Date());
    
    return (

        <DatePicker closeOnScroll={true} dateFormat="dd MM yyyy" selected={startDate} onChange={date => setStartDate(date)}  locale="es" />
        

    )
}

export default Calendar


/*
const DatePickerInput = ({ value, onClick }) => (
    <Input
        name="requestedDate"
        value={value}
        placeholder="Date"
        onClick={onClick}
        css={{ cursor: 'pointer' }}
        autoComplete={false}
        readonly="true"
    />
)



*/