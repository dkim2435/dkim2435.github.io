import { useEffect, useMemo, useState } from 'react'
import Particles, { initParticlesEngine } from '@tsparticles/react'
import { loadSlim } from '@tsparticles/slim'
import type { ISourceOptions } from '@tsparticles/engine'

export default function ParticlesBg() {
  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => setInit(true))
  }, [])

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      particles: {
        color: { value: '#10b981' },
        links: {
          color: '#10b981',
          distance: 150,
          enable: true,
          opacity: 0.15,
          width: 1,
        },
        move: {
          enable: true,
          speed: 0.8,
          direction: 'none' as const,
          random: true,
          straight: false,
          outModes: { default: 'bounce' as const },
        },
        number: {
          density: { enable: true, width: 1200, height: 800 },
          value: 60,
        },
        opacity: {
          value: { min: 0.1, max: 0.4 },
          animation: {
            enable: true,
            speed: 0.5,
            sync: false,
          },
        },
        shape: { type: 'circle' },
        size: {
          value: { min: 1, max: 3 },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: true, mode: 'grab' },
        },
        modes: {
          grab: {
            distance: 200,
            links: { opacity: 0.3 },
          },
        },
      },
      detectRetina: true,
    }),
    []
  )

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      options={options}
      className="w-full h-full"
    />
  )
}
