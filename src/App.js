import React, { useEffect, useMemo, useState } from 'react';
import './App.css';
import Title from './components/Title';
import Main from './components/Main';
import Footer from './components/Footer';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

export default function App() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#0ea5e9',
        },
        links: {
          enable: false,
        },
        move: {
          direction: 'top',
          enable: true,
          outModes: {
            default: 'out',
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            area: 800,
          },
          value: 50,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'star',
        },
        size: {
          value: { min: 5, max: 10 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white relative">
      {init && (
        <Particles
          id="tsparticles"
          init={particlesLoaded}
          loaded={particlesLoaded}
          options={options}
        />
      )}
      <div className="flex flex-col md:flex-row flex-1 w-full relative z-10">
        <div className="flex justify-center items-center w-full md:w-1/2">
          <Title />
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 overflow-hidden">
          <Main />
        </div>
      </div>
      <Footer />
    </div>
  );
}
