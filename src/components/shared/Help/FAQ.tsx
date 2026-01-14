import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { FAQ_DATA, FAQS } from "@/constants/help_center"

export default function FAQ() {
    return (
        <section className="py-12">
            <div className="flex flex-col items-center gap-2 pb-7">
                <span className="text-primary font-bold text-sm tracking-wider uppercase">FAQ</span>
                <h2 className="opacity-85 text-2xl md:text-3xl font-bold text-center">الأسئلة الأكثر شيوعاً</h2>
            </div>
            <div className="container">
                <Accordion
                    type="single"
                    collapsible
                    className="w-full flex flex-col gap-4 cursor-pointer"
                    defaultValue="item-1"
                >
                    {FAQS.map(({ id, value, icon: Icon, question, answer }: FAQ_DATA) => (
                        <AccordionItem value={value} className="bg-white p-4 rounded-2xl">
                            <AccordionTrigger className="w-full">
                                <div className="flex items-center gap-3 font-bold cursor-pointer">
                                    <Icon className="size-5 text-primary" />
                                    <span>{question}</span>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className=" text-balance">
                                <p className="font-semibold ">
                                    {answer}
                                </p>
                            </AccordionContent>
                        </AccordionItem>
                    ))}


                </Accordion>
            </div>

        </section>
    )
}
