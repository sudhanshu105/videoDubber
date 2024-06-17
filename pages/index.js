import Head from 'next/head';
import style from '../styles/index.module.css';
import Navbar from '../components/navbar';
import Hero from '../components/hero';
import ImageStrip from '../components/ImageStrip';
export default function Home() {
  return (
    <div className={style.body}> 
      <Head>
        <title>Assignment</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <Hero />

      <ImageStrip />
      
    </div>
  );
}
