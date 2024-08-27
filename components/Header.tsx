import { Bars3Icon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import NavLinks from './NavLinks';
import SearchBox from './SearchBox';

function Header() {
    return (
        <header className="p-4">
            <div className="flex justify-between items-center px-10">
                <Bars3Icon className="h-8 w-8 cursor-pointer" />
                <Link href="/" prefetch={false}>
                    <h1 className="text-xl font-bold">
                        THE <span className="underline decoration-6 text-3xl decoration-yellow-500">NEWS</span> APP
                    </h1>
                </Link>
                <button className="hidden md:inline bg-slate-900 text-white px-4 py-2 rounded">Subscribe Now</button>
            </div>
            {/* NavLinks */}
            <div className="flex justify-center mt-8 mb-4"> {/* Center align and add margin */}
                <NavLinks />
            </div>

            {/* Seachbox */}
            <SearchBox />
        </header>
    );
}

export default Header;
