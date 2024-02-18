import React, { useState } from 'react'
import {Form,Button,Spinner} from 'react-bootstrap'
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {registerAPI} from '../services/allAPI'


function RegisterForm() {

    const navigate=useNavigate()
    const [regStatus,setRegStatus]=useState(false)
    const [studentData,setStudentData]=useState({
        firstname:"",lastname:"",email:"",password:"",adress:"",gender:'',course:"",mobile:"",dob:""
    })
    console.log(studentData);


    const handleRegister = async (e) => {
        e.preventDefault();
        const { firstname, lastname, email, password, adress, gender, course, mobile, dob } = studentData;
        if (!firstname || !lastname || !email || !password || !adress || !gender || !course || !mobile || !dob) {
            toast.info("Please Fill the form Completely");
        } else {
            try {
                const result = await registerAPI(studentData);
                console.log("result of reg api: ", result);

                if (result.status==200) {
                    setStudentData({
                        firstname: "", lastname: "", email: "", password: "", adress: "", gender: '', course: "", mobile: "", dob: ""
                    });
                    setRegStatus(true);
                    setTimeout(() => {
                        navigate('/studentdetails');
                        setRegStatus(false);
                    }, 2000);
                } else {
                    console.log("Registration failed:", result);
                    toast.warning(result.response.data);
                }
            } catch (err) {
                console.error('Error during registration:', err);
               
            }
        }
    }

    const handleCancel=()=>{
        setStudentData({
            firstname:"",lastname:"",email:"",password:"",adress:"",gender:'',course:"",mobile:"",dob:""
        })
    }
   
  return (
    <>
    <div className='container' >
    <h2 className='text-warning text-center mb-5 mt-3'>Apply as a Student</h2>
    <div className="row ">
        <div className="col-md-6">
            <Form>
                <Form.Group className="mb-3" controlId="formBasicFname">
                    <Form.Label className='text-light fw-bold'>First Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter first name" value={studentData.firstname} onChange={e=>setStudentData({...studentData,firstname:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicLname">
                    <Form.Label className='text-light fw-bold'>Last Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter last name" value={studentData.lastname} onChange={e=>setStudentData({...studentData,lastname:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicadress">
                    <Form.Label className='text-light fw-bold'>Address</Form.Label>
                    <Form.Control as="textarea" placeholder="Enter Your adress" value={studentData.adress} onChange={e=>setStudentData({...studentData,adress:e.target.value})}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicemail">
                    <Form.Label className='text-light fw-bold'>Email</Form.Label>
                    <Form.Control type="email" placeholder="example@gmail.com" value={studentData.email} onChange={e=>setStudentData({...studentData,email:e.target.value})}/>
                </Form.Group>
            </Form> 
        </div>
        <div className="col-md-6">
            <Form.Group className="mb-3" controlId="formBasicMobile">
                <Form.Label className='text-light fw-bold'>Mobile</Form.Label>
                <Form.Control type="tel" placeholder="9876543210" value={studentData.mobile} onChange={e=>setStudentData({...studentData,mobile:e.target.value})}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
                <Form.Label className='text-light fw-bold'>Date of Birth</Form.Label>
                <Form.Control type="date" value={studentData.dob} onChange={e => setStudentData({...studentData, dob: e.target.value})} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label className='text-light fw-bold'>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" value={studentData.password} onChange={e=>setStudentData({...studentData,password:e.target.value})}/>
            </Form.Group>
            <div className='mb-3'>
                <Form.Label className='text-light fw-bold'>gender</Form.Label>
                <div className='d-flex'>
                    <div className="form-check me-3">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="male" checked={studentData.gender === 'male'} onChange={e=>setStudentData({...studentData,gender:e.target.value})}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault1">Male</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="female" checked={studentData.gender === 'female'} onChange={e=>setStudentData({...studentData,gender:e.target.value})}/>
                        <label className="form-check-label" htmlFor="flexRadioDefault2">Female</label>
                    </div>
                </div>
            </div>
            <Form.Group>
                <Form.Label className='text-light fw-bold'>Courses</Form.Label>
                <Form.Select aria-label="Default select example" value={studentData.course} onChange={e=>setStudentData({...studentData,course:e.target.value})}>
                    <option value="">Select a course</option>
                    <option value="Biology">Biology</option>
                    <option value="Computer Science">ComputerScience</option>
                    <option value="Commerce">Commerce</option>
                    <option value="Humanities">Humanties</option>
                </Form.Select>
            </Form.Group>
        </div>
    </div>
    <div className='d-flex mt-5 justify-content-center'>
        <Button className='btn btn-info me-5 rounded-pill' onClick={handleRegister}>Register{regStatus&&<Spinner animation="border" variant="primary" />}</Button>
        <Button className='btn btn-danger me-5 rounded-pill' onClick={handleCancel}>Cancel</Button>
    </div>
    </div>
    <ToastContainer autoClose={2000} theme='colored'/>
    </>
  )
}

export default RegisterForm