import Image, { StaticImageData } from "next/image";
import Link from "next/link";
export default function ProductItem(props: { name: string; image: StaticImageData; path: string }) {
    const { name, image, path } = props;
    return(
        <Link href={path} className="group w-full min-h-70 bg-white rounded-2xl hover:shadow-lg overflow-hidden border border-gray-200 transition-all duration-300 hover:-translate-y-0.5 p-4 sm:p-0">
            <Image src={image} className="w-full aspect-square sm:aspect-5/4 lg:aspect-square rounded-xl sm:rounded-none" width={400} height={400} alt={name} />
            <div className="flex gap-1.25 items-center p-4">
                <h3 className="text-2xl w-fit font-bold text-gray-900">{name}</h3>
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
    );
}