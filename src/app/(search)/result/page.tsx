"use client"

import { Separator } from '@/components/ui/separator';
import { getMonthName } from '@/lib/utils';
import { flightDetails } from '@/store/flight-details';
import { Search } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import Navbar from '../_components/navbar';

const SearchResults = () => {
  const router = useRouter();

  const {onChangeFlightDetails, flightFrom, flightTo, departureDate, returnDate} = flightDetails();

  

  useEffect(() => {
    if(!flightFrom.city || !flightTo.city || !departureDate || !returnDate){
      router.push('/')
    }
  },[])

  return (
    <div>
      <Navbar />

      <Separator className='my-6'/>

      <div className="w-4/5 m-auto">
        <div className="text-muted-foreground">Showing 356 of 767 results</div>
      </div>

    </div>
  )
}

export default SearchResults