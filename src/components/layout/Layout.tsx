import React, { ReactNode, useEffect } from 'react';
import Navigation from './Navigation';
import SoundControl from '../common/SoundControl';
import { soundManager } from '../../utils/sound';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  useEffect(() => {
    soundManager.playBGM();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-pink-50">
      <Navigation />
      <SoundControl />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </div>
  );
};

export default Layout; 