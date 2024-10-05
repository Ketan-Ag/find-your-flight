"use client"

import { useState } from 'react';
import SearchBar from './_components/search-bar'
import Loading from '@/components/Loading';
import { getGreeting } from '@/lib/utils';

const SearchFlights = () => {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoadingScreen = () => {
    setIsLoading(prev => !prev);
  };

  if(isLoading){
    return(
      <Loading />
    )
  }

  return (
      <div className='flex flex-col items-center gap-5 mt-10'>
        <div className="text-4xl">Good {getGreeting()}, Brian</div>
        <div className="border-[1px] border-gray-200 rounded-lg flex flex-col gap-6 p-3">
          <div className="px-3">
            <div className="bg-[#F5F7FA] px-4 inline-block rounded-md">Flights</div>
          </div>
          <SearchBar
            initialFlightFromValue={{ name: "", code: "", city: "Where From?", country: "" }}
            initialFlightToValue={{ name: "", code: "", city: "Where To?", country: "" }}
            initialDepartureValue={new Date()}
            initalReturnValue={new Date()}
            toggleLoadingScreen={toggleLoadingScreen}
          />
        </div>
      </div>
  )
}

export default SearchFlights