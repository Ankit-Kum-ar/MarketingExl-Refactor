import { serviceDetails } from '@/utils/Constant';
import { useParams } from 'react-router-dom';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type ServiceKeys = keyof typeof serviceDetails;

const ServiceDetail = () => {
    const { id } = useParams<{ id: ServiceKeys }>();

    const service = id ? serviceDetails[id] : undefined;

    if (!service) {
        return <div className='text-white'>Service not found</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <div className='flex flex-col text-white h-80 w-[80vw] justify-center items-center gap-6 bg-[url("/images/cards/background.png")] rounded-3xl border-2 border-[#FC7901]'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={`${service.vecSrc}`} alt="" className="relative" />
                    <img src={`${service.imgSrc}`} alt="" className="absolute" />
                </div>
                <h2 className="text-white text-center md:text-5xl text-2xl font-poppins font-semibold">{service.title}</h2>
            </div>

            <h1 className='font-poppins md:text-2xl text-lg my-16 font-medium text-white md:text-center w-[80vw]'><span className='text-[#FC7901]'>At MarketingEXL,</span> we connect your brand with potential customers through comprehensive social media management. Our expert team leverages the power of social platforms to build your brand, engage your audience, and drive conversions. Our services include:</h1>

            <div className='w-screen flex justify-center items-center gap-6'>
                <div className='w-1/2 flex justify-center items-center text-white'>
                    <Accordion type="single" collapsible className="w-[80%]">
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Is it accessible?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It adheres to the WAI-ARIA design pattern.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger>Is it styled?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It comes with default styles that matches the other
                            components&apos; aesthetic.
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <AccordionTrigger>Is it animated?</AccordionTrigger>
                            <AccordionContent>
                            Yes. It's animated by default, but you can disable it if you prefer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div> 
                <div className='w-1/2 text-white'>
                    <img src={service.imgSrc} alt="" />
                </div>
            </div>

        </div>
    )
}

export default ServiceDetail
