export type Frameworks = {
    value: LocationType
    label: string
}

export type FlightTripType = {
    from: string
    to: string
    departure: Date
    return: Date
}

export type LocationType = {
    name: string
    code: string
    city: string
    country: string
}