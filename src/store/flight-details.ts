import { LocationType } from "@/types/flight";
import {create} from "zustand";


interface IFlightDetails {
    flightFrom: LocationType;
    flightTo: LocationType;
    departureDate: Date;
    returnDate: Date;
    onCreateFlightDetails: (flightFrom: LocationType, flightTo: LocationType, departureDate: Date, returnDate: Date) => void;
}

export const flightDetails = create<IFlightDetails>((set) => ({
    flightFrom: {name:"", code:"", city:"", country:""},
    flightTo: {name:"", code:"", city:"", country:""},
    departureDate: new Date(),
    returnDate: new Date(),
    onCreateFlightDetails: (flightFrom: LocationType, flightTo: LocationType, departureDate: Date, returnDate: Date) => {
        set({
            flightFrom: flightFrom,
            flightTo: flightTo,
            departureDate: departureDate,
            returnDate: returnDate
        });
    },
}));
