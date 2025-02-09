import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const OurService = () => {
  const services = [
    { title: "SEO & SEM", imgSrc: "/images/seo_sem.png" },
    { title: "Email and Whatsapp Marketing", imgSrc: "/images/email_whatsapp.png" },
    { title: "Social Media Management", imgSrc: "/images/social_media.png" },
    { title: "Web Development & UI/UX", imgSrc: "/images/web_dev.png" },
  ];

  return (
    <div className="bg-[#0f0f0f] text-white flex flex-col justify-center items-center py-12">
      <h1 className="text-5xl font-poppins font-semibold mb-12">Our Services</h1>
      <div className="relative flex justify-center w-full px-4">
        <Carousel
          opts={{ align: "start", loop: true }}
          className="w-full max-w-6xl relative"
        >
          <CarouselContent className="flex flex-wrap">
            {services.map((service, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/4 p-2">
                <div className="w-full flex justify-center">
                  <Card className="bg-gradient-to-t from-[#FC7901] via-transparent to-transparent text-white w-full h-auto">
                    <CardContent className="flex flex-col items-center justify-center p-4">
                      <img src={service.imgSrc} alt={service.title} className="w-full h-40 object-cover" />
                      <p className="mt-4 text-center">{service.title}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-[#FC7901] absolute left-0 top-1/2 transform -translate-y-1/2 z-10" />
          <CarouselNext className="bg-[#FC7901] absolute right-0 top-1/2 transform -translate-y-1/2 z-10"/>
        </Carousel>
      </div>
    </div>
  );
};

export default OurService;
