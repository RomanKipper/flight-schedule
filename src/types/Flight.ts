export default interface Flight {
    departureCity: string; // e.g. "Москва"
    arrivalCity: string; // e.g. "Нью-Йорк"
    departureTime: string; // format "yyyy-mm-dd hh:mm"
    arrivalTime: string; // format "yyyy-mm-dd hh:mm"
    flightTime: string; // format "hh:mm"
    transferCount: number; // e.g. 0
    airCompany: string; // e.g. "SU"
    price: number; // e.g. 15000 [RUR]
}
