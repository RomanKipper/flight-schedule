import Flight from './Flight';
import Filter from './Filter';
import Sorting from './Sorting';

export type FlightsState = Flight[];

export interface FiltersState {
    departureTimeFilter: Filter<string>;
    arrivalTimeFilter: Filter<string>;
    flightTimeFilter: Filter<string>;
    airCompanyFilter: Filter<string>;
    transferCountFilter: Filter<number>;
}

export type SortingsState = Sorting[];

export default interface State {
    flights?: FlightsState;
    filters: FiltersState;
    sortings: SortingsState;
}
