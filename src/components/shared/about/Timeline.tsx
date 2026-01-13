import { TIMELINE_STEPS, TimelineStep } from "@/constants/about";
import React from "react";

export default function Timeline() {
    return (
        <section className="py-12">
            <div className="container flex items-center flex-col">
                <h2 className="relative font-bold text-center text-2xl md:text-4xl mt-4 mb-12 group">رحلة منصــة أمــانـــك
                    <span className="absolute w-20 h-1 bg-primary top-14 left-1/2 -translate-x-1/2 transition-all duration-300 group-hover:w-[90%]"></span>


                </h2>
                <div className="grid grid-cols-[50px_1fr] gap-x-4">
                    {TIMELINE_STEPS.map(
                        ({ id, year, title, description, icon: Icon }: TimelineStep, idx) => (
                            <React.Fragment key={id}>
                                {/* Timeline marker */}
                                <div className="flex flex-col items-center gap-1 pt-1">
                                    {idx !== 0 && <div className="w-0.5 bg-gray-200 "></div>}

                                    <div className=" rounded-full p-2 bg-primary text-white flex items-center justify-center shadow-md z-10">
                                        <Icon className="text-xl" size={20}/>
                                    </div>

                                    {idx !== TIMELINE_STEPS.length - 1 && (
                                        <div className="w-0.5 bg-gray-200  h-full grow"></div>
                                    )}
                                </div>

                                {/* Timeline content */}
                                <div className="pb-10 pt-2 pr-4">
                                    <span className="text-primary font-bold text-sm bg-primary/10 px-2 py-1 rounded">
                                        {year}
                                    </span>
                                    <h3 className="text-xl font-bold mt-2">{title}</h3>
                                    <p className="opacity-80 mt-2">{description}</p>
                                </div>
                            </React.Fragment>
                        )
                    )}
                </div>


            </div>

        </section>
    );
}