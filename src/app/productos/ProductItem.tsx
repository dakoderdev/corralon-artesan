import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export default function ProductItem(props: { 
  name: string; 
  image: StaticImageData; 
  path?: string; 
  clickable?: boolean 
}) {
  const { name, image, path = "/", clickable = true } = props;

  return (
    <div className={`group w-full min-h-70 bg-white rounded-3xl md:rounded-2xl overflow-hidden   has-focus-visible:outline-2 ${clickable ? 'cursor-pointer transition-all duration-300 hover:-translate-y-0.5  hover:shadow-lg' : 'shadow-lg/2'}`}>
      {clickable ? (
        <Link href={path}>
          <Image src={image} priority={true} className="w-full object-cover aspect-5/4 lg:aspect-square sm:rounded-none" width={500} height={500} alt={name} />
          <div className="flex gap-1.25 items-center p-4">
            <h3 className="text-2xl w-fit font-semibold text-gray-900">{name}</h3>
            <svg
              className="w-5 h-5 mt-1 text-gray-400 transition duration-300 transform group-hover:translate-x-0.5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </Link>
      ) : (
        <>
          <Image src={image} priority={true} className="w-full object-cover aspect-5/4 lg:aspect-square sm:rounded-none" width={400} height={400} alt={name} />
          <div className="flex gap-1.25 items-center p-4">
            <h3 className="text-xl w-fit font-semibold text-gray-800">{name}</h3>
          </div>
        </>
      )}
    </div>
  );
}