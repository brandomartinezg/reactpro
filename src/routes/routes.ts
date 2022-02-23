import { lazy } from "react";
import { NoLazy } from "../01-lazyload/pages/NoLazy";

type JSXComponent = () => JSX.Element;

interface Route {
    to: string,
    path: string,
    Component: React.LazyExoticComponent<JSXComponent> | JSXComponent,
    name: string
}

const Lazylayout = lazy(() => import(/*webpackChunkName: "lazylayout"*/'../01-lazyload/layout/LazyLayout'));


export const routes: Route[] = [
    {
        path:'/lazyload/*',
        to: '/lazyload/',
        Component: Lazylayout,
        name:'Lazylayout'
    },
    {
        to: '/no-lazy',
        path:'no-lazy',
        Component: NoLazy,
        name:'No Lazy'
    },
]