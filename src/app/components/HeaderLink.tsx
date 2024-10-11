export default function HeaderLink({ link, onClick }: { link: string, onClick?: () => void }) {
  return (
    <p className=" font-futura text-base text-coffwhite hover:text-c5 cursor-pointer transition-all duration-300 ease-in-out">
        <a href="/" onClick={onClick}>{link}</a>
    </p>
  )
}
