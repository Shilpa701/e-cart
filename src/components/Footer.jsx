import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white p-4'>
      <div className='flex justify-between p-4' >
        <div style={{width:'400px'}} className='intro'>
          <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-2'></i>E-Cart</h5>
          <p>Designed and Build with all the love in the world by the E cart with help of our contribution</p>
          <p>E-cart hub , docs CC BY 3.0</p>
          <p>Currently v5.3.2.</p>
        </div>
        <div className='flex flex-col'>
        <h5 className='text-xl font-bold'>Links</h5>
        <Link to={'/'} style={{textDeclcoration:'none',color:'white'}}>Landing Page</Link>
        <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home Page</Link>
        <Link to={'/history'} style={{textDecoration:'none',color:'white'}}>History Page</Link>
        </div>
        <div className='flex flex-col'>
           <h5 className='text-xl font-bold'>Guids</h5>
           <a style={{textDecoration:'none',color:'white'}} href="https://react.dev/" target='_blank'>React dev</a>
           <a style={{textDecoration:'none',color:'white'}} href="https://react-bootstrap.netlify.app/" target='_blank'>React Bootstrap</a>
           <a style={{textDecoration:'none',color:'white'}} href="https://www.npmjs.com/package/react-router-dom" target='_blank'>React Router</a>
         </div>
         <div className='flex flex-col'>
          <h5 className='text-xl font-bold'>Contacts Us</h5>
          <div className='flex'>
           <input type="text" placeholder='Enter your e-mail here...'className='rounded p-1'/>
           <button className='btn btn-info ms-2'>
           <i class="fa-solid fa-arrow-right-long"></i>
           </button>
          </div>
          <div className='icons flex justify-between me-3'>
              <a style={{textDecoration:'none',color:'white'}}  href="https://en.wikipedia.org/wiki/Twitter" target='_blank'><i class="fa-brands fa-twitter"></i></a>
              <a style={{textDecoration:'none',color:'white'}}  href="https://www.instagram.com/" target='_blank'><i class="fa-brands fa-instagram"></i></a>
              <a style={{textDecoration:'none',color:'white'}}  href="https://web.whatsapp.com/" target='_blank'><i class="fa-brands fa-whatsapp"></i></a>
              <a style={{textDecoration:'none',color:'white'}}  href="https://www.linkedin.com/in/shilpa-ts-90965722a/" target='_blank'><i class="fa-brands fa-linkedin"></i></a>
              <a style={{textDecoration:'none',color:'white'}}  href="https://github.com/" target='_blank'><i class="fa-brands fa-github"></i></a>
              <a style={{textDecoration:'none',color:'white'}}  href="https://en.wikipedia.org/wiki/Twitter" target='_blank'><i class="fa-solid fa-phone"></i></a>

          </div>

         </div>

      </div>
      <p className='text-center mt-3'>Copyright &copy; Dec 2024 Media player. Built with react</p>

      
      
    </div>
  )
}

export default Footer