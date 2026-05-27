import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Logo from '../components/Logo';

export default function NotFound() {
  return (
    <main className="min-h-screen grid place-items-center bg-brand-gradient text-white relative overflow-hidden">
      <div aria-hidden="true" className="absolute inset-0 bg-grid opacity-25" />
      <div aria-hidden="true" className="absolute -top-32 -right-24 h-[420px] w-[420px] rounded-full bg-cta-gradient opacity-25 blur-3xl" />
      <div className="relative text-center container-px">
        <Logo variant="light" className="justify-center" />
        <p className="mt-8 font-display text-6xl sm:text-7xl font-extrabold gradient-text">404</p>
        <h1 className="mt-2 font-display text-2xl sm:text-3xl font-bold">Page not found</h1>
        <p className="mt-3 text-white/75 max-w-md mx-auto">
          The page you were looking for doesn’t exist. Let’s get you back to learning.
        </p>
        <Link to="/" className="btn-primary mt-7">
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>
      </div>
    </main>
  );
}
