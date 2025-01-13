import Link from "next/link"
import { InfiniteMovingCardsDemo } from "./infiniteMovingPartners"



export function Gallery() {

  return (
    <div id="gallery" className="bg-white py-2">

      <div className="mx-auto">
        <div className="grid gap-4 ">
          <InfiniteMovingCardsDemo />
          <Link href={"#contact"}  className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition-colors my-10 mx-auto ">
              Collaborons ensemble
        </Link>
        </div>
        
      </div>
    </div>
  )
}

