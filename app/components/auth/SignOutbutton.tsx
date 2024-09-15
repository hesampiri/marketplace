import { signOut } from '@/auth'
import { Button } from '@/components/ui/button'
import React from 'react'

export const SignOutbutton = () => {
    return (
        <form
          action={async () => {
            "use server"
            await signOut()
          }}
        >
          <button type="submit" className='text-destructive text-sm font-medium w-full hover:bg-destructive hover:bg-red-50 p-1 rounded'>Sign Out</button>
        </form>
      )
}
