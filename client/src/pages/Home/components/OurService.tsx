import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const OurService = () => {
  return (
    <div className="bg-[#0f0f0f] text-white flex flex-col justify-center items-center py-12">
        <h1 className="text-5xl font-poppins font-semibold mb-12">Our Services</h1>
        <div className="flex justify-center">
          <Carousel
          opts={{
            align: "start",
          }}
          className="w-full max-w-6xl"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                  <div className="w-full flex justify-center">
                    <Card className="bg-[#0f0f0f] text-white bg-custom-gradient">
                      <CardContent className="flex flex-col gap-14 mt-2 items-center justify-center">
                        <img src="/images/card_1.png" alt="" className="" />
                        <p>SEO & SEM</p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="bg-[#FC7901]" />
            <CarouselNext className="bg-[#FC7901]"/>
          </Carousel>
        </div>
    </div>
  )
}

export default OurService

import * as React from "react"

// import { Card, CardContent } from "@/components/ui/card"
// import {
//   Carousel,
//   CarouselContent,
//   CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
// } from "@/components/ui/carousel"

// export function CarouselSize() {
//   return (
//     <Carousel
//       opts={{
//         align: "start",
//       }}
//       className="w-full max-w-sm"
//     >
//       <CarouselContent>
//         {Array.from({ length: 5 }).map((_, index) => (
//           <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
//             <div className="p-1">
//               <Card>
//                 <CardContent className="flex aspect-square items-center justify-center p-6">
//                   <span className="text-3xl font-semibold">{index + 1}</span>
//                 </CardContent>
//               </Card>
//             </div>
//           </CarouselItem>
//         ))}
//       </CarouselContent>
//       <CarouselPrevious />
//       <CarouselNext />
//     </Carousel>
//   )
// }
