"use client"

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { ArrowRightLeft, ChevronDown, Target, Search } from 'lucide-react'
import React from 'react'
import { DatePicker } from './_components/date-picker'
import { Combobox } from './_components/combobox'
import { useToast } from '@/hooks/use-toast'
import { useRouter } from 'next/navigation'
import { flightDetails } from '@/store/flight-details'
import { LocationType } from '@/types/flight'

const SearchFlights = () => {
  const router = useRouter();

  const { toast } = useToast()
  const {onCreateFlightDetails} = flightDetails();

  const [flightFromValue, setFlightFromValue] = useState<LocationType>()
  const [flightToValue, setFlightToValue] = useState<LocationType>()
  const [departureValue, setDepartureValue] = useState<Date>()
  const [returnValue, setReturnValue] = useState<Date>()

  const handleSwapSourceAndDestintaion = () => {
    let temp = flightFromValue
    setFlightFromValue(flightToValue)
    setFlightToValue(temp)
  }


  const handleSubmit = () => {
    if(!flightFromValue || !flightToValue || !departureValue || !returnValue){
      toast({
        title: "Please fill all the fields",
      })
      return;
    }
    if(flightFromValue.city === flightToValue.city){
      toast({
        title: "Source and destination cannot be the same",
        description: "Please select different cities ",
      })
      return;
    }

    if(departureValue && returnValue && departureValue > returnValue){
      toast({
        title: "Departure date cannot be after return date",
        description: "Please select a valid date",
      })
      return;
    }

    if(departureValue && returnValue && departureValue.getDay < new Date().getDay){
      toast({
        title: "Departure date cannot be in the past",
        description: "Please select a valid date",
      })
      return;
    }
    
    onCreateFlightDetails(flightFromValue, flightToValue, departureValue, returnValue)

    router.push("/result")
  }

  return (
    <div className='flex flex-col items-center gap-5'>
      <div className="text-4xl">Good afternoon, Brian</div>
      <div className="border-[1px] border-gray-200 rounded-lg flex flex-col gap-6 p-3">
        <div className="px-3">
          <div className="bg-[#F5F7FA] px-4 inline-block rounded-md">Flights</div>
        </div>
        <div className="flex justify-center items-center gap-4">

          <Combobox value={flightFromValue} setValue={setFlightFromValue} text='Where from?'/>

          <div className="bg-[#F5F7FA]  rounded-full hover:cursor-pointer" onClick={handleSwapSourceAndDestintaion}>
            <ArrowRightLeft className='p-1'/>
          </div>

          <Combobox value={flightToValue} setValue={setFlightToValue} text='Where to?'/>

          <DatePicker
            date={departureValue}
            setDate={setDepartureValue}
            text='Departure'
          />

          <DatePicker
            date={returnValue}
            setDate={setReturnValue}
            text='Return'
          />

        </div>
        <div className="self-end">
          <Button 
            className='bg-[#003E39] flex gap-2' 
            size={"lg"}
            onClick={handleSubmit}
          >
            <Search />
            <span>Search flights</span>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SearchFlights