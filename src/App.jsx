import Home from './pages/Home';
import Movie from './pages/Movie';
// import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  ScrollRestoration
} from "react-router-dom";



const Layout = () => {
  return (
    <div>   
        <ScrollRestoration /> 
        <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
   path: "/",
   element: <Layout />,
   children: [
     {
       path: "/",
       element: <Home />
       
     },
     {
       path:"/movie/:title",
        element: <Movie />
     }
   ]
  }
 ]) 
 function App() {
  return (
    <div className='flex justify-center font-nunito-sans w-[650px]  md:w-[840px] lg:w-[1000px]  xl:w-[1340px] m-auto'>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App
