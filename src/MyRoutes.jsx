import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import First from './First'
import Second from './Second'
import Third from './Third'
import Layout from './Layout'
import Home from './pages/Home'
import Categories from './pages/Categories'

const MyRoutes = () => {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<Layout/>}>

    {
    /* <Route path='/' element={<First/>}></Route> */
    }
    <Route path='/first' element={<First/>}/>
     <Route path='/second' element={<Second/>}/> 
      {/* path ko satta index ni use garna sakinxa */}
    <Route path='/third' element={<Third/>}/>
    <Route path='/Home' element={<Home/>}/>
    <Route path='/Categories' element={<Categories/>}/>
  
  </Route>
  
  
    </Routes>

</BrowserRouter>
)
}

export default MyRoutes