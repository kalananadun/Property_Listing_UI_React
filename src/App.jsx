
import HomePage from './pages/HomePage/HomePage'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import ListPage from './pages/ListPage/ListPage'
import LayOut from './layout/layout'
import SinglePage from './pages/SInglePage/SinglePage'

const App = () => {
  const router = createBrowserRouter([
    {
      path:'/',
      element:<LayOut />,
      children:[
        {
          path:'/',
          element: <HomePage></HomePage>
        },
        {
          path:'/list',
          element: <ListPage />
        },
        {
          path:'/:id',
          element: <SinglePage />
        }
      ]
    }
  ])
  return (
    <>
    {/*
    
    
    */}
    <RouterProvider router={router} />
    </>
  )
}

export default App
