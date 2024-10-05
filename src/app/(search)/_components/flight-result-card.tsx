import React from 'react'
import EmiratesImg from '@/../public/images/Emirates.png'
import LufthansaImg from '@/../public/images/Lufthansa.png'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Separator } from '@/components/ui/separator'
import { Clock4, MoveLeft } from 'lucide-react'
import { flightDetails } from '@/store/flight-details'

interface FlightResultCardProps {
  flightOne: string,
  flightTwo: string,
  price: string,
  timeOne: string,
  timeTwo: string,
  stopOne: number,
  stopTwo: number,
}

const FlightResultCard = ({
  flightOne,
  flightTwo,
  price,
  timeOne,
  timeTwo,
  stopOne,
  stopTwo,
}: FlightResultCardProps) => {

  const { flightFrom, flightTo} = flightDetails();

  return (
    <div className='flex rounded-md border-gray-200 border-[1px]'>
      <div className="w-full p-6 flex flex-col border-r-[1px] border-gray-200">
        <div className="flex justify-between items-center mt-4">
          <div className='flex gap-3'>
            <div className="flex items-center">
              <Image width={40} height={40} src={flightOne=="Emirates"?EmiratesImg:LufthansaImg} alt={flightOne}></Image>
            </div>
            <div className="flex flex-col">
              <div className="text-[13px] text-muted-foreground">{flightOne} &#8226; AT 4334 </div>
              <div className="">9:45 AM - 11:45 AM</div>
            </div>
          </div>
          <div className="">
            <div className="text-sm text-muted-foreground"> {flightFrom.code} - {flightTo.code} </div>
            <div className=""> {timeOne} </div>
          </div>
          <div className=""> {stopOne==0 ? "Non stop" : stopOne==1 ? "1 stop" : `${stopOne} stops`} </div>
        </div>
        <div className="flex justify-between items-center mt-4">
          <div className='flex gap-3'>
            <div className="flex items-center">
              <Image width={40} height={40} src={flightTwo=="Emirates"?EmiratesImg:LufthansaImg} alt={flightTwo}></Image>
            </div>
            <div className="flex flex-col">
              <div className="text-[13px] text-muted-foreground">{flightTwo} &#8226; AT 4334 </div>
              <div className="">9:45 AM - 11:45 AM</div>
            </div>
          </div>
          <div className="">
            <div className="text-sm text-muted-foreground"> {flightTo.code} - {flightFrom.code} </div>
            <div className=""> {timeTwo} </div>
          </div>
          <div className=""> {stopTwo==0 ? "Non stop" : stopTwo==1 ? "1 stop" : `${stopTwo} stops`} </div>

        </div>
      </div>
      <div className='p-5 flex flex-col justify-end'>
        <div className="text-sm text-muted-foreground w-full mr-auto">from</div>
        <div className="font-medium">AED {price}</div>
        <Sheet key={"right"}>
          <SheetTrigger asChild>
            <Button
              className='bg-[#003E39] text-base my-2'
              size={"lg"}
            >
              Select
            </Button>
          </SheetTrigger>
          <SheetContent className='min-w-[50vw]' side={"right"}>
            <SheetHeader className='mt-6'>
              <SheetClose className='mb-4'>
                <div className="flex justify-center items-center max-w-max bg-gray-200 rounded-full mr-auto"><MoveLeft className='text-[16px] p-1' /></div>
              </SheetClose>
              <SheetTitle className=''>Flight Details</SheetTitle>
              <Separator />
            </SheetHeader>
            <div className="my-4 flex flex-col">
              <div className="flex gap-3 items-center">
                <div className='w-[12px] h-[12px] border-black  border-[1.5px] rounded-full'></div>
                <div className="text-[12px] text-muted-foreground">Sat 28 Sept • 2:15</div>
              </div>
              <div className="border-l-2 border-black ml-1 mt-1 pl-4 pb-5 flex justify-between">
                <div className="">DXB • Dubai International Airport</div>
                <div className="flex gap-3">
                  <div className="">
                    <Image height={"28"} width={"28"} className='aspect-square' src={flightOne=="Emirates"?EmiratesImg:LufthansaImg} alt='Lufthansa'></Image>
                  </div>
                  <div className="flex flex-col text-[12px] text-muted-foreground">
                    <div className="">Saudi Arabian Airlines • SV553</div>
                    <div className="">Economy • A330</div>
                    <div className="">Flight time 3h 45m</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center mt-1">
                <div className='w-[12px] h-[12px] border-black  border-[1.5px] rounded-full'></div>
                <div className="text-[12px] text-muted-foreground">Sat 28 Sept • 2:15</div>
              </div>
              <div className="border-dashed border-l-2 border-black ml-1 mt-1 pl-3 pb-5">
                <div className="ml-1">RUH • King Khalid International Airport</div>
                <div className="flex items-center gap-2 text-muted-foreground my-8 ml-5">
                  <div className=""><Clock4 className='w-[14px]'/></div>
                  <div className="text-sm ">Layover 2h 25m</div>
                </div>
              </div>
              <div className="flex gap-3 items-center mt-1">
                <div className='w-[12px] h-[12px] border-black  border-[1.5px] rounded-full'></div>
                <div className="text-[12px] text-muted-foreground">Sat 28 Sept • 2:15</div>
              </div>
              <div className="border-l-2 border-black ml-1 mt-1 pl-4 pb-5 flex justify-between">
                <div className="">DXB • Dubai International Airport</div>
                <div className="flex gap-3">
                  <div className="">
                    <Image height={"28"} width={"28"} className='aspect-square' src={flightTwo=="Emirates"?EmiratesImg:LufthansaImg} alt='Lufthansa'></Image>
                  </div>
                  <div className="flex flex-col text-[12px] text-muted-foreground">
                    <div className="">Saudi Arabian Airlines • SV553</div>
                    <div className="">Economy • A330</div>
                    <div className="">Flight time 3h 45m</div>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 items-center mt-1">
                <div className='w-[12px] h-[12px] border-black  border-[1.5px] rounded-full'></div>
                <div className="text-[12px] text-muted-foreground">Sat 28 Sept • 2:15</div>
              </div>
              <div className="ml-1 mt-1 pl-5 pb-5">
                <div className="">CDG • Paris - Charles de Gualle Airport</div>
              </div>
            </div>
          </SheetContent>
        </Sheet>

      </div>
    </div>
  )
}

export default FlightResultCard