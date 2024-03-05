import React, { useEffect } from "react"
import resolveConfig from 'tailwindcss/resolveConfig'

import tailwindConfig from '../tailwind.config'

const fullConfig = resolveConfig(tailwindConfig)

export default function Page() {
  useEffect(() => {
    console.log(fullConfig)
  }, [])

  return <div>
    <h1 className="text-3xl font-bold underline bg-day/40 px-10 py-20 text-danger3-1">
      Hello, Next.js! from pages
    </h1>
    <p>{fullConfig.theme.colors.day}</p>
  </div>
}
