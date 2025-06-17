import Link from "next/link";
export default function Back(props: { name: string; path: string }) {
    const { name, path } = props;
    return (
        <div className="flex gap-3 items-center pb-6">
            <Link href={path}>
                <svg
                className="w-6 h-6 text-gray-600 rotate-180 transition duration-300 transform hover:-translate-x-0.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </Link>
            <h2 className="text-2xl font-bold text-gray-900">{name}</h2>
        </div>
    )
}