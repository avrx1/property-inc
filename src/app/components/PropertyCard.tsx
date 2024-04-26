import Image from "next/image"
import Link from "next/link"



const PropertyCard = ({propertyData} : {propertyData : Property}) => {
  return (
    <Link  href={`/properties/${propertyData.id}`}
        className="border 
            rounded-lg sm:hover:scale-[1.1] transition-all w-full h-full overflow-hidden grid
        "
        >
      { /* <Link className="w-full h-full"> */}
            <div
                className="bg-black h-[30vh] sm:max-h-[160px] min-h-[100px] w-auto"
            >
                <Image 
                className="object-cover w-full h-full"
                src={"/"+propertyData.images[0]}
                width={200}
                height={200}
                alt="Alt "
            />

            </div>
            <div className="p-3  ">
                
                <div className="font-bold text-lg">${new Intl.NumberFormat().format( propertyData.rent)} <span className="text-sm">/ Month</span></div>
                <div>{propertyData.name}</div>
                <div>
                    <span> {propertyData.rooms} rooms </span>
                    <span>&middot; </span>
                    <span>{propertyData.bathrooms} bathrooms</span>
                </div>
                <div>{propertyData.address}</div>
                
            </div>
       {/* </Link> */}
    </Link>
  )
}

export default PropertyCard