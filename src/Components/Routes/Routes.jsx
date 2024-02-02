
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Layout/Root';
import Home from '../Pages/Home/Home';
import Login from '../Auth/Login';
import Register from '../Auth/Register';
import Career from '../Pages/Career/Career';
import About from '../Pages/About/About';

const Routes = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/about',
                element:<About/>
            },
            {
                path:'/career',
                element:<Career/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/register',
                element:<Register/>
            },
        ]
      },
])

export default Routes;