import { bookTicket, bookAvailableSeats, getMovieDetails, isMovieAvailableNextSevenDays, getMoviesByName } from '../../src/bookTicket'
import { AvailableSeats } from '../../src/types/seats'
import { TIMING } from '../../src/types/timings'
import { initialState } from './util'

describe("book ticket Test", () => {
   
            const currState = {
                '12': {
                    movieName: 'wonder woman',
                    seats:0,
                    time : 12,
                    date: '20'
                 },
                 3: {
                    movieName: 'wonder woman',
                    seats:3,
                    time :3,
                    date: '20'
                 },
                 6: {
                    movieName: 'wonder woman',
                    seats:65,
                    time : 6,
                    date: '20'
                 },
                 9:{
                    movieName: 'wonder woman',
                    seats:0,
                    time : 9,
                    date: '20'
                 }
    
            }
    it("should return seats for single day if available", () => {
        const dummyOutputReturned =  bookAvailableSeats(currState, TIMING.SIX,5);
        expect(dummyOutputReturned).toEqual({
           ...currState,
           6:70
        })
    })

    it("should return error if no seats available for a day", () => {
        const currState = {
            '12': {
                movieName: 'wonder woman',
                seats:0,
                time : 12,
                date: '20'
             },
             3: {
                movieName: 'wonder woman',
                seats:3,
                time :3,
                date: '20'
             },
             6: {
                movieName: 'wonder woman',
                seats:65,
                time : 6,
                date: '20'
             },
             9:{
                movieName: 'wonder woman',
                seats:35,
                time : 9,
                date: '20'
             }

        }
        expect(() => bookAvailableSeats(currState,TIMING.NINE, 66)).toThrow(new Error('no tickets available'))
    })

    it("should return seats for a week if available", () => {
        const dummyOutputReturned = bookTicket('17', TIMING.NINE,  initialState, 2)
        expect(dummyOutputReturned).toEqual({
            ...initialState,
            '17':{
                ...initialState['17'],
                9:2
            } 
        })
    })


    it("should return no tickets available if no seats available", () => {
        expect(() => bookTicket('17',TIMING.NINE,  initialState, 200)).toThrow(new Error('no tickets available'))
    })



    it("should return show movie details ", () => {
        expect(getMovieDetails('17',TIMING.NINE, initialState )).toEqual({
            
                movieName: 'wonder woman',
                seats:0,
                time : 9,
                date: '17'
             
        })
    })

    it("should return  show movie details within 7days ", () => {
        expect(() => isMovieAvailableNextSevenDays( initialState,'iron man')).toThrow(new Error('Movie is not available'))
    })



    it("should return all movies timings by name for next 7 days if seats are available ", () => {
        const date =new Date().getDate()
      const initialState : AvailableSeats  = {

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
        expect(getMoviesByName(initialState,'wonder woman' )).toEqual([
            { movieName: 'wonder woman', seats: 65, time: 6, date: '17' },
            { movieName: 'wonder woman', seats: 0, time: 9, date: '17' },
            { movieName: 'wonder woman', seats: 0, time: 12, date: '17' },
            { movieName: 'wonder woman', seats: 3, time: 3, date: '18' },
            { movieName: 'wonder woman', seats: 65, time: 6, date: '18' },
            { movieName: 'wonder woman', seats: 0, time: 9, date: '18' },
            { movieName: 'wonder woman', seats: 0, time: 12, date: '18' },
            { movieName: 'wonder woman', seats: 3, time: 3, date: '19' },
            { movieName: 'wonder woman', seats: 0, time: 12, date: '19' }
          ])
    })

    it("should return empty arr if no movies available for next 7days  ", () => {
        const date =new Date().getDate()
      const initialState : AvailableSeats  = {

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
        expect(getMoviesByName(initialState,'iron man' )).toEqual([
          ])
    })


    it("should return empty arr if  no seats for a movies  for next 7days  ", () => {
        const date =new Date().getDate()
      const initialState : AvailableSeats  = {

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
           movieName: 'marvel',
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
        expect(getMoviesByName(initialState,'marvel' )).toEqual([
          ])
    })


})

