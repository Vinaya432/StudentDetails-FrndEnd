import React from 'react'
import { Link } from 'react-router-dom'
import homeImg from '../assets/image/home.png'


function Home() {
  return (
    <div style={{height:'100%'}} className='container '>
          <div  style={{height:'100vh',background: 'linear-gradient(25deg, #00246B, #1E2761)'}} className="row align-items-center text-light">
            <div className="col-lg-5">
              <h1 style={{fontSize:'60px',height:'100px'}} className='text-light fw-bold text-center'>Education</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat nulla cumque consectetur corporis nemo rerum perferendis iure atque, voluptates dolorum sunt sit non amet dignissimos, animi tempore quo distinctio totam.!!!</p>
              <div className='d-flex align-items-center'>
                  <p className='me-2 fw-bold'>New Student ? Click here to</p>
                  <Link className='btn btn-warning rounded-pill' to={'/register'}>Register <i className='fa-solid fa-arrow-right ms-2'></i></Link>
              </div>
            </div>

            <div className="col-lg-2"></div>
            <div className="col-lg-4">
              <img className='img-fluid ' style={{height:'450px',width:'450px'}} src={homeImg} alt="No image" />
            </div>
            <div className="col-lg-1"></div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFFF" fill-opacity="1" d="M0,96L10,128C20,160,40,224,60,245.3C80,267,100,245,120,229.3C140,213,160,203,180,170.7C200,139,220,85,240,85.3C260,85,280,139,300,144C320,149,340,107,360,117.3C380,128,400,192,420,181.3C440,171,460,85,480,58.7C500,32,520,64,540,85.3C560,107,580,117,600,149.3C620,181,640,235,660,261.3C680,288,700,288,720,240C740,192,760,96,780,53.3C800,11,820,21,840,26.7C860,32,880,32,900,69.3C920,107,940,181,960,224C980,267,1000,277,1020,256C1040,235,1060,181,1080,144C1100,107,1120,85,1140,69.3C1160,53,1180,43,1200,64C1220,85,1240,139,1260,176C1280,213,1300,235,1320,240C1340,245,1360,235,1380,213.3C1400,192,1420,160,1430,144L1440,128L1440,320L1430,320C1420,320,1400,320,1380,320C1360,320,1340,320,1320,320C1300,320,1280,320,1260,320C1240,320,1220,320,1200,320C1180,320,1160,320,1140,320C1120,320,1100,320,1080,320C1060,320,1040,320,1020,320C1000,320,980,320,960,320C940,320,920,320,900,320C880,320,860,320,840,320C820,320,800,320,780,320C760,320,740,320,720,320C700,320,680,320,660,320C640,320,620,320,600,320C580,320,560,320,540,320C520,320,500,320,480,320C460,320,440,320,420,320C400,320,380,320,360,320C340,320,320,320,300,320C280,320,260,320,240,320C220,320,200,320,180,320C160,320,140,320,120,320C100,320,80,320,60,320C40,320,20,320,10,320L0,320Z"></path></svg>
        </div>
     
    </div>
  )
}

export default Home