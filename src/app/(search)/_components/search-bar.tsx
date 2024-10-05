"use client"

import { ArrowRightLeft, Search } from 'lucide-react'
import { Combobox } from './combobox'
import React, { useEffect, useState } from 'react'
import { DatePicker } from './date-picker'
import { LocationType } from '@/types/flight'
import { Button } from '@/components/ui/button'
import { useRouter } from 'next/navigation'
import { useToast } from '@/hooks/use-toast'
import { flightDetails } from '@/store/flight-details'

interface SearchBarProps {
  initialFlightFromValue?: LocationType;
  initialFlightToValue: LocationType;
  initialDepartureValue: Date;
  initalReturnValue: Date;
  toggleLoadingScreen?: () => void | null;
}

const SearchBar = ({
  initialFlightFromValue,
  initialFlightToValue,
  initialDepartureValue,
  initalReturnValue,
  toggleLoadingScreen
}: SearchBarProps) => {
  const router = useRouter();
  const { toast } = useToast()

  const { onCreateFlightDetails } = flightDetails();

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
    if (!flightFromValue || !flightToValue || !departureValue || !returnValue) {
      toast({
        title: "Please fill all the fields",
      })
      return;
    }
    if (flightFromValue.city === flightToValue.city) {
      toast({
        title: "Source and destination cannot be the same",
        description: "Please select different cities ",
      })
      return;
    }

    if (departureValue && returnValue && departureValue > returnValue) {
      toast({
        title: "Departure date cannot be after return date",
        description: "Please select a valid date",
      })
      return;
    }

    if (departureValue && returnValue && departureValue.getDate() < new Date().getDate()) {
      toast({
        title: "Departure date cannot be in the past",
        description: "Please select a valid date",
      })
      return;
    }

    onCreateFlightDetails(flightFromValue, flightToValue, departureValue, returnValue)

    if(toggleLoadingScreen != null){
      toggleLoadingScreen()
      setTimeout(() => {
        toggleLoadingScreen()
      }, 3000);
    }
    router.push("/result")
  }

  useEffect(() => {
    if (initialFlightFromValue?.name && initialFlightToValue?.name && initialDepartureValue && initalReturnValue) {
      setFlightFromValue(initialFlightFromValue);
      setFlightToValue(initialFlightToValue)
      setDepartureValue(initialDepartureValue)
      setReturnValue(initalReturnValue)
    }
  }, [])

  return (
    <>
      <div className="flex justify-center items-center gap-4">

        <Combobox value={flightFromValue} setValue={setFlightFromValue} text='Where from?' />

        <div className="bg-[#F5F7FA]  rounded-full hover:cursor-pointer" onClick={handleSwapSourceAndDestintaion}>
          <ArrowRightLeft className='p-1' />
        </div>

        <Combobox value={flightToValue} setValue={setFlightToValue} text='Where to?' />

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
      <div className="w-full ml-auto">
        <Button
          className='bg-[#003E39] flex gap-2 ml-auto'
          size={"lg"}
          onClick={handleSubmit}
        >
          <Search />
          <span>Search flights</span>
        </Button>
      </div>
    </>
  )
}

export default SearchBar