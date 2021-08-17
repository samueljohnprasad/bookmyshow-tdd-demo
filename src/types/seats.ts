export type MovieDetails = {
    movieName: string| null,
    seats: number,
    time:number,
    date: string
}
export type DayTimings = {
    [k : string] : MovieDetails;
}
  



export type AvailableSeats = {
    [k : string]: DayTimings
}