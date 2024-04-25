"use client"
import Link from "next/link"
import data from "./MOCK_DATA.json"
import PropertyCard from "./components/PropertyCard"
import { VscFilter } from "react-icons/vsc";
import { FaSortAmountDown } from "react-icons/fa";
import { useState } from "react";


const Home = () => {
    
  const [sortActivated, setSortActivated] = useState(false)
  return (
    <div >

        <div className="flex gap-4 mb-8 justify-between">
            <div className="hidden sm:flex gap-4">
              <div className="btn bg-white">Price <div className="arrow down"></div></div>
              <div className="btn bg-white">Location <div className="arrow down"></div></div>
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
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(200px,1fr))] w-full">
            {data.map(property => <div className="">
               
                  <PropertyCard propertyData={property} />
              
            </div>)}
        </div>
    </div>
  )
}

export default Home