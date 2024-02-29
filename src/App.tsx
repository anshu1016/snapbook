import AuthLayout from "./_auth/AuthLayout";
import SignInForm from "./_auth/forms/SignInForm";
import SignupForm from "./_auth/forms/SignupForm";
import RootLayout from "./_root/RootLayout";
import { Home } from "./_root/pages";
import "./globals.css";
import {Routes, Route} from "react-router-dom"
function App() {
 

  return (
    <>
   <main className="flex h-screen">{/* taking 100%of screen */}
    <Routes>

      {/* Public Routes*/}
      <Route element={<AuthLayout/>}>
      <Route path="/sign-in" element={<SignInForm/>}/>
      <Route path="/sign-up" element={<SignupForm/>}/>
      </Route>


{/* Private Routes*/}
<Route element={<RootLayout/>}>
<Route index element={<Home/>}/>

</Route>
    </Routes>
   </main>
    </>
  )
}

export default App
