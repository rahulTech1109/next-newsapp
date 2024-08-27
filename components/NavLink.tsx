import Link from 'next/link';

type Props = {
    category: string;
    isActive: boolean;
}

function NavLink({ category, isActive }: Props) {
    return (
        <Link legacyBehavior href={`/news/${category}`}>
            <a className={`navLink ${isActive ? 'active' : ''}`}>{category}</a>
        </Link>
    );
}

export default NavLink;
