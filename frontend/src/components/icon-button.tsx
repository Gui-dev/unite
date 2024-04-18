import { ReactNode } from 'react'
import { Button, ButtonProps } from './ui/button'

interface IconButtonProps extends ButtonProps {
  children: ReactNode
}

export const IconButton = ({ children, ...rest }: IconButtonProps) => {
  return (
    <Button {...rest} className="p-1.5 size-6 bg-gray-700 hover:bg-gray-700/80">
      {children}
    </Button>
  )
}
