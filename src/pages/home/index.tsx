import Footer from '@/component/organism/Footer'
import Header from '@/component/organism/Header'

export default function Home() {
  return (
    <>
      <Header />
      <video
        className="fixed left-0 top-0 z-[-1] h-screen w-full object-cover"
        autoPlay
        loop
        muted
      >
        <source src="/images/astroids.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex h-screen w-full items-center justify-center">
        <div className="relative flex flex-col backdrop-blur bg-[#240046/20] max-h-[420px] overflow-hidden rounded-xl w-80 border-zinc-600 border-[1px]">
          <input type="checkbox" id="chk" aria-hidden="true" />

          <div className="relative w-full h-full mt-6">
            <form className="flex flex-col gap-[14px] p-6">
              <label
                htmlFor="chk"
                aria-hidden="true"
                className='mb-[5%] text-[#fff] text-3xl flex justify-center font-bold cursor-pointer transition duration-500 ease-in-out'
              >
                Log in
              </label>
              <input className="input" type="email" name="email" placeholder="Email" />
              <input className="input" type="password" name="pswd" placeholder="Password" />
              <button className='w-[85%] h-[40px]mt-[12px] mr-auto mb-[10%] text-white bg-[#573b8a] text-base font-bold border-none rounded-sm cursor-pointer transition ease-in duration-300 hover:bg-[#6d44b8]'>
                Log in
              </button>
            </form>
          </div>

          <div className="register">
            <form className="flex flex-col gap-[14px] p-6">
              <label
                htmlFor="chk"
                aria-hidden="true"
                className='mb-[5%] text-[#fff] text-3xl flex justify-center font-bold cursor-pointer transition duration-500 ease-in-out'
              >
                Register
              </label>
              <input className="input" type="text" name="txt" placeholder="Username" />
              <input className="input" type="email" name="email" placeholder="Email" />
              <input className="input" type="password" name="pswd" placeholder="Password" />
              <button className='w-[85%] h-[40px] mt-[12px] mr-auto mb-[10%] text-white bg-[#573b8a] text-base font-bold border-none rounded-sm cursor-pointer transition ease-in duration-300 hover:bg-[#6d44b8]'>
                Register
              </button>
            </form>
          </div>
        </div>

      </div>
      <Footer />
    </>
  )
}
