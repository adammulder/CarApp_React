import Background from '../assets/images/car.avif'



function Home() {
  return (
    <div
      style={{ backgroundImage: `url(${ Background })`}}
      className="flex justify-center mx-auto bg-cover bg-fixed"
      >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-5 text-slate-100 rounded text-5xl animate-pulse'>
            Welcome to Car Inventory</h3>
        </div>

    </div>
  )
}

export default Home
