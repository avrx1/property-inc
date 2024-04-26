"use client"
import Link from "next/link"
import data from "./MOCK_DATA.json"
import PropertyCard from "./components/PropertyCard"
import { VscFilter } from "react-icons/vsc";
import { FaSortAmountDown } from "react-icons/fa";
import { useEffect, useRef, useState } from "react";


const ButtonToggle = ({title, children} : {title : string, children: React.ReactNode}) => {
  const [activated, setActivated] = useState(false)
  const ref = useRef<HTMLInputElement>(null);

/*   useEffect( () => {

    const handleOutside = (e)=> {
      if(ref && activated)
        if (ref.current && !ref.current.contains(e.target)) {
            setActivated(false)
            console.log("HERE")
            console.log(ref)
        }
    }
    window.addEventListener("click", handleOutside)

    return () => {
      document.removeEventListener('click', handleOutside, true);
    }
  
  }, [activated] ) */
  
  return <div className="relative">
      <div className="btn bg-white" onClick={()=>setActivated(p=>!p)}>
        {title} 
          <div className={`arrow ${activated?"up":"down"}`}></div>


      </div>

       {activated &&
          <div ref={ref} className="left-0 top-[100%] mt-1 rounded-md  bg-white absolute border 
            toggle-shadow
          ">
              {children}
          </div>
          }
          
  </div>
}

const Home = () => {
    
  const [sortActivated, setSortActivated] = useState(false)
  return (
    <div >
        <div className=" flex gap-4 mb-8 justify-between">
            <div className="hidden sm:flex gap-4">
              <ButtonToggle title={"Price"}> _ </ButtonToggle>
              <ButtonToggle title={"Type"}> 
                <h3>Type</h3>

                <form>
                  <div className="flex">
                    <input type="checkbox" name="House" value={"house"}/> 
                     <label>House</label>
                  </div>
           
                </form>
              </ButtonToggle>
              <ButtonToggle title={"Location"}> _ </ButtonToggle>
              
              <div className="btn bg-white">Filters <VscFilter /></div>
            </div>
            <div className="relative ">
              <div className="btn bg-white"
                onClick={e => setSortActivated(p=>!p)}
              >Sort By <FaSortAmountDown/></div>

              {sortActivated && <div className="absolute border  w-[160px] bg-white rounded-md mt-2 left-0 sm:left-auto sm:right-0 top-[100%] p-3">
                <div>One</div>
                <div>One</div>
                <div>One</div>
                <div>One</div>
              </div>}
            </div>
        </div>

        <p className="my-4">Number of Apartments: {data.length}</p>
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full auto-rows-[1fr]">
            {data.map(property =>
                <PropertyCard propertyData={property} />
           )}
        </div>
    </div>
  )
}

export default Home