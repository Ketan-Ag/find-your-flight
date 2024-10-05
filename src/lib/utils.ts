import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getMonthName(date : Date): string{

  if(!date) return ""

  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"]

  return months[date.getMonth()]
}

export function getGreeting() : string{
  const currentHour = new Date().getHours();

  if (currentHour < 12 && currentHour > 4) {
    return "morning";
  } else if (currentHour > 12 && currentHour < 18) {
    return "afternoon";
  } else {
    return "evening";
  }
};
