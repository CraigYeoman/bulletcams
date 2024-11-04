import Image from 'next/image';

const Hero = () => {
return(
<div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
<div className="w-full md:w-1/2 px-4 md:px-8 flex flex-col items-center justify-center">
  <h1 className="text-6xl font-bold mb-4 text-center">
    High Performance Valvetrain Components
  </h1>
  <div className="w-64 h-3 bg-yellow-400 mb-4"></div>
  <p className="text-gray-700 mb-6 text-center max-w-2xl">
    Since 1980, Bullet Cams Valvetrain Innovation has been the driving force behind
    groundbreaking advancements in valvetrain technology. Our unwavering
    commitment to precision engineering, premium materials, and relentless
    innovation has propelled us to the forefront of the racing industry, earning the
    trust of champions and enthusiasts alike.
  </p>
</div>
<div className="w-full md:w-1/2 flex items-center justify-center px-4 md:px-8">
  <Image
    src="/cam.png"
    alt="camshaft"
    width={600}
    height={400}
    objectFit="cover"
  />
</div>
    </div>
  );
};


export default Hero;