import Image from "next/image"
import Link from "next/link"



const PropertyCard = ({propertyData} : {propertyData : Property}) => {
  return (
    <div
        className="border 
            rounded-lg sm:hover:scale-[1.1] transition-all w-full  overflow-hidden min-h-[200px] 
        "
        >
        <Link href={`/properties/${propertyData.id}`} className="w-full h-full">
            <div
                className="bg-black"
            >
                <Image 
                className=""
                src={"/"+propertyData.images[0]}
                width={200}
                height={200}
                alt="Alt "
            />

            </div>
            <div className="p-3 bg-white">
                
                <div className="font-bold">${new Intl.NumberFormat().format( propertyData.rent)} / Month</div>
                <div>{propertyData.name}</div>
                <div>
                    <span> {propertyData.rooms} rooms </span>
                    <span>&middot; </span>
                    <span>{propertyData.bathrooms} bathrooms</span>
                    
                </div>
                <div>{propertyData.address}</div>
                
            </div>
        </Link>
    </div>
  )
}

export default PropertyCard