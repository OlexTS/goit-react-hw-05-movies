import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { HeaderNav, Home, Movies } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <div>
      <HeaderNav>
        <NavLink to="/" end>
           <Home>Home</Home>
        </NavLink>
        <NavLink to="/movies"><Movies>Movies</Movies></NavLink>
      </HeaderNav>
      <Suspense>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};
