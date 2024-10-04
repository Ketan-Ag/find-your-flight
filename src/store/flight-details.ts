import {create} from "zustand";

const defaultValue = { flightFrom: "", flightTo: "" , departureDate: undefined, returnDate: undefined};

interface IFlightDetails {
    flightFrom: string;
    flightTo: string;
    departureDate: Date;
    returnDate: Date;
    onCreateFlightDetails: (flightFrom: string, flightTo: string, departureDate: Date, returnDate: Date) => void;
    onChangeFlightDetails: (key: any, value: any) => void;
}

export const flightDetails = create<IFlightDetails>((set) => ({
    flightFrom: "",
    flightTo: "",
    departureDate: new Date(),
    returnDate: new Date(),
    onCreateFlightDetails: (flightFrom: string, flightTo: string, departureDate: Date, returnDate: Date) => {
        set({
            flightFrom: flightFrom,
            flightTo: flightTo,
            departureDate: departureDate,
            returnDate: returnDate
        });
        console.log('flightDetails.getState()', flightDetails.getState());
    },
    onChangeFlightDetails: (key: any, value: any) => {
        set({
            ...flightDetails.getState(), [key]: value
        });

        console.log("flightDetails", flightDetails.getState());
    }
}));
