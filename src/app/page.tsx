import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Bullet Cams - High Performance Valvetrain Components</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="flex items-center">
          <div className="w-1/2 pr-8">
            <h1 className="text-5xl font-bold mb-4">
              The Ultimate in High Performance Valvetrain Components
            </h1>
            <div className="w-64 h-3 bg-yellow-400 mb-4"></div>
            <p className="text-gray-700 mb-6">
              Since 1980, Bullet Cams Valvetrain Innovation has been the driving force behind
              groundbreaking advancements in valvetrain technology. Our unwavering
              commitment to precision engineering, premium materials, and relentless
              innovation has propelled us to the forefront of the racing industry, earning the
              trust of champions and enthusiasts alike.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="/path-to-your-image.jpg"
              alt="High Performance Valvetrain Component"
              width={600}
              height={400}
              objectFit="cover"
            />
          </div>
        </div>
      </main>
    </div>
  );
}
