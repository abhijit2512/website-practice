import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Terms from './pages/Terms';
import Refund from './pages/Refund';
import NotFound from './pages/NotFound';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton';
import ScrollToHash from './components/ScrollToHash';

export default function App() {
  return (
    <>
      <ScrollToHash />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/refund" element={<Refund />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <FloatingWhatsAppButton />
    </>
  );
}
