import data from "@/app/MOCK_DATA.json"
import publicAmenities from "@/app/CommunityAmenities.json"

import Image from "next/image"
import { IoBedSharp } from "react-icons/io5";
import { MdOutlineHouseSiding } from "react-icons/md";
import { FaMoneyBill } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

const Property = ({params}: {params: {propertyId: string}}) => {
    const property : Property = data.filter(p => p.id == +params.propertyId)[0]
    const amenities = publicAmenities.filter(amenity => 
                property.publicAmenities?.includes(amenity.id))
  
  return (
    <div className="w-full  ">
        <div>
            <Image width={200} height={200} src={"/"+property.images[0]} alt="Alt"/>
        </div>
        {/*Carrousel*/}
        <div className="flex overflow-auto mt-2 gap-2 pb-3">

        { property.images.map(image => 
        <div className="w-[25%] border flex-shrink-0">
        <img  src={"/"+image} className="rounded-md"/>
             </div>       
            )
        }

        </div>            
    
    <div className="border border-gray-500 rounded-lg mt-8">
        <table className="border-collapse overflow-hidden table w-full">
            <tbody className="[&_td]:p-3" >      
                <tr className=" ">
                    <td className="flex items-center gap-1 "><FaMoneyBill/>Rent</td>
                    <td className="text-right font-bold">${property.rent}</td>
                </tr>
                <tr className="">
                    <td className="flex  items-center gap-1"><IoBedSharp/> Bathrooms</td>
                    <td className="text-right font-bold">{property.bathrooms}</td>
                </tr>
                <tr className="">
                    <td className="flex  items-center gap-1"><MdOutlineHouseSiding/>Rooms</td>
                    <td className="text-right font-bold">{property.rooms}</td>
                </tr>
            </tbody>
        </table>
    </div>
    
    <h2 className="text-2xl font-bold mt-8">{property.name}</h2>
    <h2 className="text-xl ">{property.address}</h2>
  
       
    <h3 className="mt-8 text-2xl">Description</h3>
    <p className="mt-2">
        {property.description}
    </p>

    <h3 className=" mt-8 text-2xl ">Communty Amenities</h3>
    <ul className="mt-2 mb-5 list-disc ml-4">
        { amenities.map(amenity => <li>
            {amenity.name}
        </li>)}
    </ul>

    <div className="flex gap-2 items-center mb-8">
        <p className="text-lg font-bold ">View on Map</p>
        <FaMapMarkerAlt/>
    </div>

    <form  className="[&_label]:text-sm">
        <label >Message</label>
        <textarea cols={20} rows={5} className="border outline-none mt-2 mb-4 p-2"/>

        <label className="">Name</label>
        <input type="text" className="border p-2 mt-2 mb-4"/>

        <label className="">Email</label>
        <input type="text" className="border p-2 mt-2"/>
    </form>

    <button type="button" 
    className="bg-blue-700 text-white px-4 py-2 rounded-full mt-4">Send message</button>
    </div>
  )
}

export default Property