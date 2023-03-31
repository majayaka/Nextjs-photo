import Head from 'next/head';
import Hero from '../components/Hero';
import Slider from '../components/Slider';
import { SliderData } from '../components/SliderData';
import Instagram from '../components/Instagram';

export default function Home() {
  return (
    <div>
      <Head>
        <title>KoHey Photography</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading='KoHey Photography' message='I capture moments in life and keep them alive.'/>
      <Slider slides={SliderData}/>
      <Instagram />
    </div>
  );
}
