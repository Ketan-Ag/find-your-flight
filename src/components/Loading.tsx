import React from 'react'
import { Skeleton } from './ui/skeleton'

const LoadingSkeleton = () => {
    return (
        <div className="flex flex-col gap-3 border-gray-200 border-[1px] p-3 mb-3 w-4/5 m-auto rounded-md">
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
    return (
        <>
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
            <LoadingSkeleton />
        </>
    )
}

export default Loading