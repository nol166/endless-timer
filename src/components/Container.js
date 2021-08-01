import React from 'react'

export default function Container(children) {
  return (
    <div className="container p-6 md:p-16 max-w-3xl" style={{ minHeight: '100vh' }}>
      {children}
    </div>
  )
}
