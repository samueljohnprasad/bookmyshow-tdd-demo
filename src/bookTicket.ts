import { DayTimings, AvailableSeats, MovieDetails} from './types/seats'
import { TIMING } from './types/timings';
import {TOTAL_SEATS } from './constants'
import { initialState } from '../test/src/util'

export const bookTicket = (date: string,timeSlot: TIMING , currState: AvailableSeats,numOfTicketsToBook:number)=>{

     const updatedState ={
            ...currState,
            [date]:  bookAvailableSeats(currState[date],timeSlot, numOfTicketsToBook)
        }
        return updatedState
     
}

export const bookAvailableSeats= ( seatsForDay: DayTimings ,timeSlot: TIMING, numOfTicketsToBook:number)=>{
        if(isSeatsAvailable(seatsForDay[timeSlot].seats, numOfTicketsToBook, TOTAL_SEATS)){
    return {
        ...seatsForDay,
       [timeSlot] : seatsForDay[timeSlot].seats + numOfTicketsToBook
    }   
  }
throw new Error('no tickets available'); 
}

const isSeatsAvailable = (currSeats: number ,numOfTicketsToBook:number, totalSeats:number ) =>{
  return currSeats+numOfTicketsToBook < totalSeats ? true : false
}

export const  getMovieDetails = (date:string, timeSlot: TIMING , currState: AvailableSeats ) => {

     return currState[date][timeSlot]

}






export const isMovieAvailableNextSevenDays =(currState: AvailableSeats,movieName: string) =>{
  let count =0;
  for(let day in currState){ 
    if(count !==6){
     let response =   isMovieAvailableForDay(currState[day],movieName)
     if(response[0]){
      
       
      }
    }
    count++;
  }

  return { status: false }
}






export const setMovie = (currState:AvailableSeats ,date:string, timeSlot: TIMING, updateMovie: string)=>{
      const { movieName, seats} =currState[date][timeSlot]

      if(movieName || seats){
         return {
            ...currState,
            [date]:{
              ...currState.date,
              [timeSlot]: {
                ...currState.date.timeSlot,
                movieName: updateMovie
              }
            }
         }
      }
  //throw new Error('movies are booked , cannot update movie')
  return 'no movies'
}


export const isMovieAvailableForTimeSlot = (movieDetails: MovieDetails, movieName: string) =>{
  if(movieDetails.movieName===movieName) {
    return  { ...movieDetails , status: true} 
 }
return {
   status: false
 }
}
export const isMovieAvailableForDay =(showDay:DayTimings, movieName: string) =>{
  const moviesList =[]
       for(let timeSlot in showDay ){
          let response = isMovieAvailableForTimeSlot(showDay[timeSlot],movieName)
             if(response.status){
               moviesList.push(response)
             return moviesList
          }
      }
  throw new Error('Movie is not available')
}

export const  getMovies =(moviesDay: DayTimings, nameOfMovie: string,availableMoviesList:MovieDetails[])=>{
       
            for(let timeSlot in moviesDay){
               const {movieName,seats} = moviesDay[timeSlot]
                 if( movieName===nameOfMovie && seats < TOTAL_SEATS ){
                       availableMoviesList.push( { ...moviesDay[timeSlot] } )
                 }

            }
   return [...availableMoviesList]
}
export const getMoviesByName =(currState: AvailableSeats, movieName:string)=> {
let count =0;
const availableMoviesList:MovieDetails[] =[]
    for(let day in currState){
          if(count!==6){
               getMovies(currState[day],movieName,availableMoviesList)
              
          }

        count++;
      }
   return   availableMoviesList
}
