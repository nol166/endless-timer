import React from 'react'
import { Timer } from 'easytimer.js'
import Button from './Button'
import { useEffect } from 'react'

const timer = new Timer({})

const tick = () => {
  const result = timer.getTimeValues()
  alert(result)
}

export default function TimerComponent() {
  useEffect(() => {
    console.log('Timer started')
    timer.getConfig()
  }, [])

  return (
    <section>
      <div className="mb-10 gap 5px">
        <h2 className="font-bold">Timer</h2>
        <Button text={'Start'} onClick={tick} />
        <Button text={'Stop'} onClick={tick} />
      </div>
    </section>
  )
}
