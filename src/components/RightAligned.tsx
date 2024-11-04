import Image from 'next/image';

const RightAligned = (image: string, imageAlt: string, title: string, description: string) => {
    return(
        <div className="flex items-center">
        <div className="w-1/2">
            <Image
              src={image}
              alt={imageAlt}
              width={600}
              height={400}
              objectFit="cover"
            />
          </div>
          <div className="w-1/2 pr-8">
            <h1 className="text-5xl font-bold mb-4">
              {title}
            </h1>
            <div className="w-64 h-3 bg-yellow-400 mb-4"></div>
            <p className="text-gray-700 mb-6">
              {description}
            </p>
          </div>
          
        </div>
    );

};

export default RightAligned;
