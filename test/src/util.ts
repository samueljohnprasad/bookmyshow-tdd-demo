import { AvailableSeats } from "../../src/types/seats";

const date =new Date().getDate()
export const initialState : AvailableSeats  = {

    [date]: {

        '12': {
           movieName: 'wonder woman',
           seats:0,
           time : 12,
           date: date.toString()
        },
        '3': {
           movieName: null,
           seats:3,
           time :3,
           date: date.toString()
        },
        '6': {
           movieName: 'wonder woman',
           seats:65,
           time : 6,
           date: date.toString()
        },
        '9':{
           movieName: 'wonder woman',
           seats:0,
           time : 9,
           date: date.toString()
        }
    },
    [date+1]: {
       '12': {
           movieName: 'wonder woman',
           seats:0,
           time : 12,
           date: (date+1).toString()
        },
        '3': {
           movieName: 'wonder woman',
           seats:3,
           time :3,
           date: (date+1).toString()
        },
        '6': {
           movieName: 'wonder woman',
           seats:65,
           time : 6,
           date:(date+1).toString()
        },
        '9':{
           movieName: 'wonder woman',
           seats:0,
           time : 9,
           date: (date+1).toString()
        }

   }
   ,
   [date+2]: {
       '12': {
           movieName: 'wonder woman',
           seats:0,
           time : 12,
           date: (date+2).toString()
        },
        '3': {
           movieName: 'wonder woman',
           seats:3,
           time :3,
           date:(date+2).toString()
        },
        '6': {
           movieName: 'wonder woman',
           seats:100,
           time : 6,
           date: (date+2).toString()
        },
        '9':{
           movieName: 'superman',
           seats:0,
           time : 9,
           date: (date+2).toString()
        }

   }
}