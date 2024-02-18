
import { Navigate,Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Register from './Pages/Register'
import StudentDetails from './Pages/StudentDetails'
import Header from './Components/Header'
// import { tokenAuthenticationContext } from './Context API/TokenAuth'
// import { useContext } from 'react'
// import Login from './Components/Login'



function App() {
  // const {isAuthorised,setIsAuthorized} = useContext(tokenAuthenticationContext)

  return (
    <>
     <Header/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      {/* <Route path='/login' element={<Login/>}/> */}
      <Route path='/studentdetails' element={<StudentDetails />} />
      <Route path='/*' element={<Navigate to={'/'}/>}/>
     </Routes>
     
    </>
  )
}

export default App
