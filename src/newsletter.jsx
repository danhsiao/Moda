import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from '../../src/App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

function App() {
  return (
    <div>
      <div className = "title">
        <h1>Newsletter Archive</h1>
      </div>

      <div className="blurb">
        <p>Read all about what we have been up to below and subscribe to our newsletter on our home page!</p>
      </div>
    </div>
  );
}

export default App;

