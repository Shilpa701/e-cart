import React from 'react'
import Header from '../components/Header'

const View = () => {
  return (
    <>
   <Header/>
    <div className='flex flex-col mx-5'>
     <div className='grid grid-cols-2 items-center h-screen'>
     <img width={'100%'} height={'200px'} src="https://img.freepik.com/free-vector/shopping-supermarket-cart-with-grocery-pictogram_1284-11697.jpg?semt=ais_hybrid" alt="" />


     <div>
    <h3 className='font-bold'> PID : id</h3>
    <h1 className='text-5xl font-bold'>Product Name</h1>
    <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
    <h4>Brand : brand</h4>
    <h4>Category : category</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error quam fugiat accusantium vero doloribus quasi mollitia consequatur ipsam reiciendis animi numquam, veniam temporibus est autem rem, voluptatibus non nisi optio.</p>
    <div className='flex justify-between mt-5'>
        <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
        <button className='bg-green-600 text-white p-2'>Add to Cart</button>

    </div>
   </div>
 </div>
</div>
    
    </>
  )
}

export default View