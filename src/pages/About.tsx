import Background from '../assets/images/car1.avif'

function About() {
  return (
   <div>
      <div className='bg-gradient-to-tl from-purple-900 to-green-700
      h-screen w-full relative -z-10'>
        <img src={Background} className="w-full h-full object-cover absolute mix-blend-multiply"/>
        <div className='p-24'>
          <h1 className='text-white text-6xl font-bold text-center'>About</h1>
          <p className='text-white text-center pt-60 text-2xl'>At Car Inventory+ </p>
          <p className='text-white text-center text-xl pt-4'>We strive to build a beautiful dashboard for all your car needs! </p>
        </div>
      </div>

   </div>
  )
}

export default About