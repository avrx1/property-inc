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
      <div className="btn bg-white
        hover:bg-gray-100/50
      " onClick={()=>setActivated(p=>!p)}>
        {title} 
          <div className={`arrow ${activated?"up":"down"}`}></div>


      </div>

       {activated &&
          <div ref={ref} className="left-0 top-[100%] mt-1 rounded-md  bg-white absolute border 
            toggle-shadow z-10
          ">
              {children}
          </div>
          }
          
  </div>
}

const Home = () => {
    
  const [sortActivated, setSortActivated] = useState(false)
  const characteristics : string[] = ["Aire Condicionado","Lavadora","Lavavajillas","Balcon","Calefaccion","Horno",
    "Ascensor"
  ]


  return (
    <div >
        <div className=" flex gap-4 mb-8 justify-between">
            <div className="hidden sm:flex gap-4">
              <ButtonToggle title={"Price"}> _ </ButtonToggle>
              <ButtonToggle title={"Type"}> 
                
                <div className="p-3 w-[200px] grid [&>div]:mb-3 [&_label]:text-black/80"> 
                  <h3 className="mb-3 text-2xl font-semibold">Type</h3>
                  <div className=" flex  items-center w-fit gap-3">
                     <input type="checkbox" name="house" value={"house"} /> 
                     <label>House</label>
                  </div>
                  <div className="flex  items-center w-fit gap-3">
                    <input type="checkbox" name="apartment" value={"apartment"}/> 
                     <label>Apartment</label>
                  </div>
                  <div className="flex  items-center w-fit gap-3">
                    <input type="checkbox" name="shared" value={"shared"}/> 
                     <label>Shared</label>
                  </div>
                  <div className="flex  items-center w-fit gap-3  ">
                    <input type="checkbox" name="condo" value={"condo"}/> 
                     <label>Condo</label>
                  </div>
                  <div className="btn mx-auto w-full text-center bg-slate-600 text-white"><p className="w-full text-center">Filter</p></div>
                </div>
              </ButtonToggle>
              <ButtonToggle title={"Location"}> _ </ButtonToggle>
              
              <ButtonToggle title={"Filters"}> 
                <div className="w-[360px] p-3">
                  <h3 className="text-2xl font-semibold mb-4">Filters</h3>
                  <h2 className="font-semibold mb-4">Characteristics</h2>
                  <div className="grid grid-cols-2 gap-4 p-1">
                    {characteristics.map((c : string) =><div className="flex  items-center  gap-3 ">
                        <input type="checkbox" name="ac" value={"ac"} className="w-fit"/> 
                        <label className="text-black/80">{c}</label>
                      </div> )}
                    
                  </div>
                </div>
                <div className="px-4 mb-5 text-center">
                  <p className="btn w-full bg-slate-600 text-white  ">Filter Properties</p>
                </div>
               </ButtonToggle>
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