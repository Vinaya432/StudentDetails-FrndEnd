
import RegisterForm from '../Components/RegisterForm'
import { Link } from 'react-router-dom'


function Register() {
   

  return (
    <>
    <div style={{background:'#002C54'}} className='container d-flex justify-content-center'>
        <div className='row align-items-center'>
            <div className="col-lg-4 mt-5 justify-content-center text-light">
                <img className='img-fluid ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQs54D4X-sDQz92HXSSo2LDBWO8nJ6bZ5B2jBEHqjvyUEr0aYO4xYGdQxPR2ST9OxO9JI&usqp=CAU" alt="" />
                <h4 className='mt-3 text-light fw-bold'>Welcome</h4>
                <p style={{textAlign:'justify',fontStyle:'italic'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate natus</p>
                <Link to={'/'} className='btn btn-info'>Back</Link>
            </div>
            <div className="col-lg-1"></div>
            <div className="col-lg-7">
                <RegisterForm/>
            </div>
        </div>
    </div>
    </>
  )
}

export default Register