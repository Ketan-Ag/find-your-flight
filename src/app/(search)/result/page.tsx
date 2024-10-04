"use client"

import { Separator } from '@/components/ui/separator';
import { getMonthName } from '@/lib/utils';
import { flightDetails } from '@/store/flight-details';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

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
      <div className="mt-6 w-fit m-auto border-[1px] flex items-center justify-center space-x-3 border-gray-200 rounded-3xl py-3 px-5 ">
        <div className="flex items-center gap-1 text-sm">
          <span className='font-semibold'>{flightFrom.code}</span>
          <span className='text-muted-foreground'>{flightFrom.name}</span>
        </div>
        <Separator orientation="vertical" className='h-5 w-[1px]' />
        <div className="flex items-center gap-1 text-sm">
          <span className='font-semibold'>{flightTo.code} </span>
          <span className='text-muted-foreground'>{flightTo.name}</span>
        </div>
        <Separator orientation="vertical" className='h-5 w-[1px]' />
        <div className="flex items-center space-x-1 font-semibold text-sm">
          <span>{getMonthName(departureDate)}</span>
          <span>{departureDate.getDate()}</span>
          <span>-</span>
          <span>{getMonthName(returnDate)}</span>
          <span>{returnDate.getDate()}</span>
        </div>
      </div>

      <Separator className='my-6'/>

      <div className="w-4/5 m-auto">
        <div className="text-muted-foreground">Showing 356 of 767 results</div>
      </div>

    </div>
  )
}

export default SearchResults