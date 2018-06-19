export default interface Sorting {
    type: 'departureTime' | 'arrivalTime' | 'flightTime' | 'transferCount' | 'price';
    order: 'asc' | 'desc';
}
