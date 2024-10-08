import React from 'react'
import { Card, CardContent } from '@/components/ui/card'

export default function UsuarioFinancieroCard({children}) {
  return (
    <Card className='w-auto border-solid border-[#E84729] border-[2px] rounded-md p-4 md:p-8 lg:p-12'>
        <CardContent className='flex items-start gap-8'>
            {children}
        </CardContent>
    </Card>    
  )
}
