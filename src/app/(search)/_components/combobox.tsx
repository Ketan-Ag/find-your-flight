"use client"

import * as React from "react"
import { useState } from "react"
import { Check, ChevronsUpDown, Frame } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import airportsData from "@/data/airports.json"
import { Frameworks, LocationType } from "@/types/flight"


interface ComboboxProps {
  value?: LocationType,
  setValue: (value: LocationType) => void,
  text: string
}

export const Combobox = ({
    value,
    setValue,
    text
}: ComboboxProps) => {
  const [open, setOpen] = React.useState(false)

  const frameworks : Frameworks[] = airportsData.airports.map((airport) => ({value: airport, label: airport.city}));

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {value
            ? frameworks.find((framework) => framework.value.city === value.city)?.label
            : text}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-max p-0">
        <Command>
          <CommandInput placeholder="Search city..." />
          <CommandList>
            <CommandEmpty>No city found.</CommandEmpty>
            <CommandGroup>
              {frameworks.map((framework) => (
                <CommandItem
                  key={framework.value.city}
                  value={framework.value.city}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value?.city ? value : frameworks.find(f => f.value.city === currentValue)?.value || {name:"",code:"",city:"",country:""})
                    setOpen(false)
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value?.city === framework.value.city ? "opacity-100" : "opacity-0"
                    )}
                  />
                  <div className="flex justify-between w-full">
                    <div className="flex flex-col gap-1">
                      <div className="text-sm">{framework.label}</div>
                      <div className="text-[12px] text-muted-foreground">{framework.value.country}</div>
                    </div>
                    <div className="">{framework.value.code}</div>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
