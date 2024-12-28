import './layout.scss';
import {Outlet} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar';
const LayOut = () => {
  return (
    <>
    <div className='layout'>
      <NavBar></NavBar>
      <div className="content">
        <Outlet></Outlet>
      </div>
    </div>
    </>
  )
}

export default LayOut