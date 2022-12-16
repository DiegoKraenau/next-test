import { useEffect } from 'react'

const Main = () => {
  const testEvent = () => {
    let event = new CustomEvent('hola', { bubbles: true })
    window.dispatchEvent(event)
  }
  useEffect(() => {
    const handleEvent = event => {
      console.log('Button clicked', event.bubbles)
    }

    window.addEventListener('hola', handleEvent)

    return () => window.removeEventListener('hola', handleEvent)
  }, [])

  return (
    <>
      <h1>Main</h1>
      <button onClick={() => testEvent()}>Test event</button>
    </>
  )
}

export default Main
