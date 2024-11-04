import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import Hero from '../components/Hero';
import RightAligned from '../components/RightAligned';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bullet Cams - High Performance Valvetrain Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <Hero />
        <RightAligned props={{
          image: "/car.png",
          imageAlt: "car",
          title: "The Ultimate in High Performance Valvetrain Components",
          description: "Since 1980, Bullet Cams Valvetrain Innovation has been the driving force behind groundbreaking advancements in valvetrain technology. Our unwavering commitment to precision engineering, premium materials, and relentless innovation has propelled us to the forefront of the racing industry, earning the trust of champions and enthusiasts alike."
        }} />
      </main>
    </div>
  );
}
