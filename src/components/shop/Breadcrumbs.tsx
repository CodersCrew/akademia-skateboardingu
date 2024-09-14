'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Breadcrumbs() {
  const currentPath = usePathname();
  const pathnames = currentPath.split('/').filter(x => x);
  let breadcrumbPath = '';

  return (
    <ul className="flex flex-row">
      <li key="home">
        <Link href="/">Strona główna</Link>
      </li>

      {pathnames.map(path => {
        breadcrumbPath += `/${path}`;

        return (
          <li className="before:px-3 before:content-['\3E']" key={path}>
            <Link href={breadcrumbPath}>
              {path[0].toUpperCase() + path.slice(1)}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
