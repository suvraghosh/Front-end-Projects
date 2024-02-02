import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from "./context/theme"
import Card from "./components/Card"
import ThemeBtn from "./components/ThemeBtn"

function App() {
  const [theme, setTheme] = useState("light")

  function lightMode() {
    setTheme("light")
  }
  function darkMode() {
    setTheme("dark")
  }

  useEffect(() => {
    const doc = document.querySelector('html')
    doc.classList.remove("light", "dark")
    doc.classList.add(theme)
  }, [theme])
  
  return (
    <ThemeProvider value={{ theme, darkMode, lightMode }}>

      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>

    </ThemeProvider>
  )
}

export default App
