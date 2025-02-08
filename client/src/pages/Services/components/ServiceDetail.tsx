import { serviceDetails } from '@/utils/Constant';
import { useParams } from 'react-router-dom';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import ClientCarousel from '@/components/ClientCarousel';
import PageTitle from '@/components/PageTitle';

type ServiceKeys = keyof typeof serviceDetails;

const ServiceDetail = () => {
    const { id } = useParams<{ id: ServiceKeys }>();

    const service = id ? serviceDetails[id] : undefined;

    if (!service) {
        return <div className='text-white'>Service not found</div>;
    }

    return (
        <div className="flex flex-col items-center justify-center mt-10">
            <PageTitle title={`${service.title} - MarketingExl`} />
            <div className='flex flex-col text-white h-80 w-[80vw] justify-center items-center gap-6 bg-[url("/images/cards/background.png")] rounded-3xl border-2 border-[#FC7901]'>
                <div className='flex flex-col justify-center items-center'>
                    <img src={`${service.vecSrc}`} alt="" className="relative" />
                    <img src={`${service.imgSrc}`} alt="" className="absolute" />
                </div>
                <h2 className="text-white text-center md:text-5xl text-2xl font-poppins font-semibold">{service.title}</h2>
            </div>

            <h1 className='font-poppins md:text-2xl text-lg my-16 font-medium text-white md:text-center w-[80vw]'><span className='text-[#FC7901]'>At MarketingEXL,</span> {service.description}</h1>

            <div className='w-screen md:flex justify-center items-center gap-6'>
                <div className='md:w-1/2 flex justify-center items-center text-white'>
                    <Accordion type="single" collapsible className="w-[85%]">
                        {
                            service.accordionTitleArr.map((title, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-2 bg-cover border-[#FC7901] rounded-3xl px-4 py-2 mb-4 bg-no-repeat" style={{ backgroundImage: 'url(/images/cards/Card.png)' }}>
                                    <AccordionTrigger>{title}</AccordionTrigger>
                                    <AccordionContent>
                                        {service.accordionDescArr[index]}
                                    </AccordionContent>
                                </AccordionItem>
                            ))
                        }
                    </Accordion>
                </div> 
                <div className='md:w-1/2 text-white flex justify-center items-center'>
                    <img src={service.photoUrl} alt="" className='md:w-[80%] rounded-3xl hidden md:block'/>
                </div>
            </div>

            <ClientCarousel />

        </div>
    )
}

export default ServiceDetail
