import Loading from '@/components/Loading'
import React, { Suspense } from 'react'

export default function Layout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    )
  }

