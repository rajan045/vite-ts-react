import Footer from '@/component/organism/Footer'
import Header from '@/component/organism/Header'

export default function Home() {
  return (
    <>
      <Header />
      <video className="w-full h-screen object-cover fixed top-0 left-0 z-[-1]" autoPlay loop muted>
        <source src="/images/astroids.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="w-full h-screen flex items-center justify-center">
        <form>
          Hello
        </form>
      </div>
      <Footer />
    </>
  )
}
