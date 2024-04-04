import stars from 'icon/stars.gif'

export default function Logo() {
  return (
    <div className="flex items-center hover:cursor-pointer">
      <img
        src={'/icons/stars.gif'}
        alt="rightArrow"
        className="max-xs:w-8 max-xs:h-8 mr-4 h-16 w-16 animate-bounce rounded-md hover:animate-none max-lg:h-12 max-lg:w-12"
      />
      <p
        className={`max-xs:text-[1.2rem] whitespace-nowrap text-[2.4rem] text-white max-lg:text-[2rem] `}
      >
        Advise <span className="font-mono text-red-400">Me</span>
      </p>
    </div>
  )
}
