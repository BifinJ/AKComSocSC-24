export default function RegisterButton({ className, text, href }: { className?: string, text: string, href: string}) {
  return (
    <button className={`${className} flex items-center justify-center md:w-36 w-32 h-10  border border-c5 rounded-md p-0.5`}>
        <a href={href} className=" text-lg font-bold flex items-center justify-center w-full h-full text-c5 hover:bg-c5 hover:text-c1 rounded-[4px] transition-all duration-300 ease-in-out">
            {text}
        </a>
    </button>
  )
}
