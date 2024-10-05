"use client"

import { Separator } from '@/components/ui/separator'
import { getMonthName } from '@/lib/utils'
import { flightDetails } from '@/store/flight-details'
import { Search } from 'lucide-react'
import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import SearchBar from './search-bar'

const Navbar = () => {

    const {flightFrom, flightTo, departureDate, returnDate} = flightDetails();

  return (
    <>
        <div className="mt-6 w-fit m-auto border-[1px] flex items-center justify-center space-x-3 border-gray-200 rounded-full py-3 px-5 ">
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
        <Separator orientation="vertical" className='h-5 w-[1px]' />

        <Sheet key={"top"}>
          <SheetTrigger asChild>
            <div 
              className="bg-[#E5EBEB] rounded-full p-2 cursor-pointer"
            >
              <Search className='text-[#003E39]' size={"12px"}/>
            </div>
          </SheetTrigger>
          <SheetContent side={"top"}>
            <div className="flex flex-col gap-6 p-3">
              <SearchBar
                initialFlightFromValue={flightFrom}
                initialFlightToValue={flightTo}
                initialDepartureValue={departureDate}
                initalReturnValue={returnDate}
                toggleLoadingScreen={()=>{}}
              />
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </>
  )
}

export default Navbar