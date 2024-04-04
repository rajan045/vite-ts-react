import Logo from '../atom/Logo'

export default function Header() {
  return (
    <div className="flex items-center justify-between bg-black px-10 py-4 max-lg:px-8">
      <Logo />
      <div className="flex items-center gap-4 font-semibold text-white max-md:hidden">
        <h6>Home</h6>
        <h6>About</h6>
        <h6>Contact</h6>
      </div>
    </div>
  )
}
