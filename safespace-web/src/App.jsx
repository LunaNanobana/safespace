import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LandingPage from './pages/LandingPage'
import ChatPage from './pages/ChatPage'
import CommunityPage from './pages/CommunityPage'
import EmergencyPage from './pages/EmergencyPage'
import { ResourcesPage, ShelterMapPage, SafetyPlanPage, PrivacyPage, PanicPage } from './pages/AllPages'

export default function App() {
  return (
    <BrowserRouter>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/chat" element={<ChatPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/emergency" element={<EmergencyPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/shelter-map" element={<ShelterMapPage />} />
            <Route path="/safety-plan" element={<SafetyPlanPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/panic" element={<PanicPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
