import Link from "next/link";

export default function SiteHeader() {
    return (
        <div className="py-10 flex justify-end">
            {/* navigation */}
            <div className="flex space-x-10">
                <Link href="/family">
                    <a className="text-xs h-12 w-12 bg-red-200 rounded-full flex justify-center items-center text-red-900">
                        family
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="text-xs h-12 w-12 bg-yellow-200 rounded-full flex justify-center items-center text-yellow-900">
                        love
                    </a>
                </Link>
                <Link href="/contact">
                    <a className="text-xs h-12 w-12 bg-green-200 rounded-full flex justify-center items-center text-green-900">
                        friends
                    </a>
                </Link>
            </div>
        </div >
    );
}
