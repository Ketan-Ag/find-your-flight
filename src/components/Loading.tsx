"use client"

import React, { useEffect, useState } from 'react'
import { Skeleton } from './ui/skeleton'
import {
    Card,
    CardContent,
    CardHeader,
} from "@/components/ui/card"
import { CircleCheck, LoaderCircle, Send } from 'lucide-react'
import Navbar from '@/app/(search)/_components/navbar'

const LoadingSkeleton = () => {
    return (
        <div className="relative flex flex-col gap-3 border-gray-200 border-[1px] p-3 mb-3 w-4/5 m-auto rounded-md">
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-md" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <Skeleton className="h-12 w-12 rounded-md" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    )
}

const Loading = () => {
    const [isSearchingLoading, setIsSearchingLoading] = useState(true);
    const [isAttachingLoading, setIsAttachingLoading] = useState(true);
    const [isServingLoading, setIsServingLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setIsSearchingLoading(false)
        }, 500)
        setTimeout(() => {
            setIsAttachingLoading(false)
        }, 1000)
        setTimeout(() => {
            setIsServingLoading(false)
        }, 1500)
    }, [])

    return (
        <>
        <Navbar />
        <div className='LoadingBarFlightResults after:animate-progress-load' />
            
        <div className='relative w-full'>
            <div className="relative">
                <LoadingSkeleton />
                <LoadingSkeleton />
                <LoadingSkeleton />
            </div>
            <div className="absolute top-5 w-screen">
                <Card className="w-[350px] mx-auto">
                    <CardHeader className='my-3'>
                        <Send fill='#E5EBEB' className='w-[100px] h-[100px] mx-auto text-[#003E39]' />
                    </CardHeader>
                    <CardContent>
                        <div className="flex flex-col items-center gap-4">
                            <div className="flex items-center gap-2">
                                {
                                    isSearchingLoading ? <LoaderCircle className='animate-spin' /> : <CircleCheck color='#096B2B' />
                                }

                                <div className="text-muted-foreground">Searching 400+ flights</div>
                            </div>
                            <div className="flex items-center gap-2">
                                {
                                    isAttachingLoading ? <LoaderCircle className='animate-spin' /> : <CircleCheck color='#096B2B' />
                                }

                                <div className="text-muted-foreground">Attaching company rules</div>
                            </div>
                            <div className="flex items-center gap-2">
                                {
                                    isServingLoading ? <LoaderCircle className='animate-spin' /> : <CircleCheck color='#096B2B' />
                                }
                                <div className="text-muted-foreground">Serving best results</div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
        </>
    )
}

export default Loading