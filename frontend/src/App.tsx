import { createRoot } from 'react-dom/client'
import { HeartSpinnerPage } from "./pages/ShutkaPage"

createRoot(document.getElementById('root')!).render(
    <App />
)

function App() {

  return (
    <>
        <HeartSpinnerPage/>
    </>
  )
}

export default App