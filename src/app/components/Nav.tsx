import Image from "next/image"
import Link from "next/link"
import { FaSearch } from "react-icons/fa";



type Props = {}

const Nav = (props: Props) => {
  return (
    <header className="h-[6rem] w-full sticky bg-white top-0 left-0 font-white border-b mb-8 z-30">
        <nav className="flex items-center h-full px-2  gap-4 max-w-[1000px] mx-auto justify-between ">
            {/*<div className="w-8 h-5 flex flex-col items-center justify-between
                [&>div]:w-full  [&>div]:h-1 [&>div]:bg-black
            "><div></div><div></div><div></div>
            </div>
*/
            }
            <ul className="">
                <li className="flex items-center gap-2">
                    <Link href={"/"} className="flex items-center">
                        <img src="/logo.png" className="w-14" alt="alt"/>
                    </Link>
                    <Link href={"/"} className="flex items-center">
                        <h1 className="font-bold text-xl">PropertyInc</h1>
                    </Link>
                </li>
            </ul>

            <div className="border px-3 hidden md:flex md:items-center gap-2 w-[40%] rounded-full overflow-hidden">
                <FaSearch/>
                <input type="input" className="py-[0.8rem] outline-none" placeholder="Enter tags"/>
            </div>

            <div className="hidden sm:flex gap-2">
                <div className="btn hover:bg-gray-300/20">
                    Login
                </div>

                <div className="btn hover:bg-gray-300/20">
                    Register
                </div>
            </div>
        </nav>

    </header>
  )
}

export default Nav