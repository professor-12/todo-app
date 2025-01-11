"use client"
import React, { useEffect } from 'react'

const ServiceWorker = () => {
      useEffect(() => {
            if ('serviceWorker' in navigator) {
                  navigator.serviceWorker
                        .register('/sw.js')
                        .then((registration) => console.log('scope is: ', registration.scope));
            }
      }, []);
      return null
}

export default ServiceWorker