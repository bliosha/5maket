import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../index.css'
import App from '../App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import HeroSection from "../components/HeroSection.jsx";
import FeaturesSection from "../components/Features.jsx";
import DeviceSection from "../components/DeviceSection.jsx";


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
      <HeroSection/>
      <FeaturesSection/>
      <DeviceSection />
  </StrictMode>,
)
