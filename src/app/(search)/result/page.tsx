"use client"

import { Separator } from '@/components/ui/separator';
import { flightDetails } from '@/store/flight-details';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Navbar from '../_components/navbar';
import FlightResultCard from '../_components/flight-result-card';

const SearchResults = () => {
  const router = useRouter();

  const { flightFrom, flightTo, departureDate, returnDate } = flightDetails();

  useEffect(() => {
    if (!flightFrom.city || !flightTo.city || !departureDate || !returnDate) {
      router.push('/')
    }
  }, [flightFrom, flightTo, departureDate, returnDate])

  return (
    <div>
      <Navbar />

      <Separator className='my-6' />

      <div className="w-4/5 m-auto">
        <div className="text-muted-foreground">Showing 356 of 767 results</div>
        <div className="flex flex-col mt-4 gap-5 pb-5">
          <FlightResultCard 
            flightOne='Emirates'
            flightTwo='Lufthansa'
            price="2456.90"
            timeOne="2h 10min"
            timeTwo="4h 10min"
            stopOne={0}
            stopTwo={2}
          />
          <FlightResultCard 
            flightOne='Emirates'
            flightTwo='Emirates'
            price="1456.90"
            timeOne="7h 10min"
            timeTwo="19h 10min"
            stopOne={1}
            stopTwo={1}
          />
          <FlightResultCard 
            flightOne='Lufthansa'
            flightTwo='Lufthansa'
            price="1456.90"
            timeOne="7h 10min"
            timeTwo="4h 10min"
            stopOne={0}
            stopTwo={0}
          />
        </div>
      </div>

    </div>
  )
}

export default SearchResults