"use client"

import { error } from "console"
import { useState } from "react"

export const useValidation = (error: () => {}) => {
      const [isTouched, setIsTouched] = useState(false)
      const hasError = isTouched && error()
      return {hasError, isTouched, setIsTouched}
}