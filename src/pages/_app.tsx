import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import { useAudio } from '@/hooks/useAudio';
import HerbalTea from '../../public/herbalTea.mp3';
import '../styles/globals.css';

export default function App({ Component, pageProps }: AppProps) {
  const { play } = useAudio(HerbalTea, 0.2);

  useEffect(() => {
    play();
  }, [play]);

  return (
    <Component {...pageProps} />
  )
}
