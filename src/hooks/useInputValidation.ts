"use client"
import { useState } from "react"

export interface UseValidationType {
      isTouched: boolean;
      hasError: boolean;
      setIsTouched: (a:boolean) => any
}

export const useValidation = (error: () => any) => {
      const [isTouched, setIsTouched] = useState(false)
      const hasError = isTouched && error()
      return {hasError, isTouched, setIsTouched} 
}