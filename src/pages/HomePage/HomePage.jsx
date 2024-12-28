import './HomePage.scss'
import SearchBar from '../../components/SearchBar/SearchBar'
const HomePage = () => {
  return (
    <div className='HomePage'>
      <div className="text-container">
        <div className="wrapper">
            <div className="title">
                <h1>Look up the Properties most in demand</h1>
            </div>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos similique unde laudantium nemo, est fuga alias at id sequi aliquid blanditiis libero omnis modi autem consectetur? Neque animi dolore odit?
            </p>
            <SearchBar></SearchBar>
            <div className="boxes">
                <div className="box">
                    <h2>16</h2>
                    <h3>experience</h3>
                </div>
                <div className="box">
                    <h2>16</h2>
                    <h3>experience</h3>
                </div>
                <div className="box">
                    <h2>16</h2>
                    <h3>experience</h3>
                </div>
            </div>
        </div>
      </div>
      <div className="image-container">
            <img src="../../public/bg.png" alt=""  />
      </div>
    </div>
  )
}

export default HomePage
