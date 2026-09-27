import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  if (pathnames.length === 0) return null;

  const formatPathName = (name) => {
    return name
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <ol className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
        <li>
          <Link to="/" className="flex items-center gap-1 hover:text-[#6D28D9] transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </li>
        {pathnames.map((value, index) => {
          const to = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={to} className="flex items-center space-x-2">
              <ChevronRight className="w-3 h-3 text-slate-400 shrink-0" />
              {isLast ? (
                <span className="text-[#6D28D9] font-bold">{formatPathName(value)}</span>
              ) : (
                <Link to={to} className="hover:text-[#6D28D9] transition-colors">
                  {formatPathName(value)}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
