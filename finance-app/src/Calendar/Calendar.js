import React from "react";
import DatePicker from "react-datepicker";
// import moment from "moment";

import "react-datepicker/dist/react-datepicker.css";


const CalendarNew = ({startDate, endDate, handleChangeEnd, handleChangeStart}) => {

    //    state = {
        //    startDate: moment(),
        //    endDate: moment(),
    //    };


//    handleChangeStart = (date) => {
//        this.setState({
//            startDate: date,
//        });
//        console.log(date)
//    };

//    handleChangeEnd = (date) => {
//        this.setState({
//            endDate: date,
//        });
//        console.log(date)
//    };


  

       return (
           <div>
           <DatePicker
               selected={startDate}
               selectsStart
               startDate={startDate}
               endDate={endDate}
               onChange={handleChangeStart}

           />


           <DatePicker
       selected={endDate}
       selectsEnd
       startDate={startDate}
       endDate={endDate}
       onChange={handleChangeEnd}
       />
           </div>
       );
   


}

export default CalendarNew;