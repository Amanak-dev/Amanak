import { TEAM, TeamMember } from "@/constants/about";
import Image from "next/image";

export default function TeamSection() {
    return (
        <section className=" py-16 px-4 bg-white">
            <div className="container  text-center">
                <h2 className="text-3xl font-bold  mb-12">
                    فــــــريق العمـــــل
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
                    {TEAM.map(({ id, name, role, bio, image, stack }: TeamMember) => (
                        <div key={id} className="flex flex-col items-center ">
                            {/* Member Image */}
                            <div className="relative w-32 h-32 rounded-full overflow-hidden mb-4 border-2 shadow-md cursor-pointer group">
                                <Image
                                    src={image}
                                    alt={name}
                                    fill
                                    className="object-cover transition-all duration-300 group-hover:scale-105"
                                    sizes="128px"
                                />
                            </div>
                            {/* Member Name */}
                            <h4 className="text-lg font-black ">
                                {name}
                            </h4>
                            
                            {/* Member Role */}
                            <p className="text-primary text-sm font-bold mb-1">
                                {role}
                            </p>

                            {/* Member Stack */}
                            <span className="text-xs text-gray-400 mb-2">
                                {stack}
                            </span>

                            {/* Member Bio */}
                            <p className=" text-sm max-w-[200px]">
                                {bio}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
