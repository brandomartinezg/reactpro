import { Suspense } from 'react';
import { BrowserRouter, Navigate, Routes, Route, NavLink  } from 'react-router-dom';

import logo from '../logo.svg';
import { routes } from './routes';


export const Navigation = () => {
  return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className='main-layout'>
                    <nav>
                        <img src={logo} alt=''/>
                        <ul>
                            {routes.map(r => (
                                <li key={r.path}>
                                    <NavLink to={r.to} className={({isActive}) => isActive ? 'nav-active' : ''}>
                                        {r.name}
                                    </NavLink>
                                </li>))
                            }
                        </ul>
                    </nav>
                    <Routes>
                        {routes.map(r => (
                            <Route key={r.path} path={r.path} element={<r.Component />} />
                        ))}
                        <Route path="/*" element={<Navigate to={routes[0].to} replace/>}/>
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
  )
}
