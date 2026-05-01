import React from "react";
import Image from "next/image";
import Heading from "@/components/shared/Heading";
import SubHeading from "@/components/shared/SubHeading";
import Paragraph from "@/components/shared/Paragraph";
import institutionalImpact from "@/public/institutional-impact.jpg";

export default function InstitutionalImpact() {
    return (
        <div
            className="w-full min-h-[594px] rounded-[10px] bg-custom-black/30 shadow-[inset_0_0_0_1px_rgba(255,255,255,0.4)]"
            aria-label="Institutional Impact"
        >
            <div className="relative h-full w-full overflow-hidden rounded-[10px]">
                <div className="relative z-10 h-full w-full">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 p-6 sm:p-8 xl:p-[42px] 2xl:px-[60px] 2xl:py-[72px]">
                        {/* left content */}
                        <div className="flex flex-col gap-[20px] lg:gap-[30px]">
                            <Heading className="2xl:text-[42px]">
                                Institutional Impact
                            </Heading>

                            <div>
                                <SubHeading className="2xl:text-[30px]">
                                    Operational Transformation
                                </SubHeading>

                                <div className="mt-[10px] lg:mt-[20px] space-y-[4px] text-[15px] leading-[22px] text-white/70">
                                    <Paragraph className="2xl:text-[20px]">
                                        Manual reporting → Automated reporting
                                        systems
                                    </Paragraph>
                                    <Paragraph className="2xl:text-[22px]">
                                        Fragmented knowledge → Integrated
                                        intelligence systems
                                    </Paragraph>
                                    <Paragraph className="2xl:text-[22px]">
                                        Delayed decisions → Real-time
                                        operational insight
                                    </Paragraph>
                                </div>
                            </div>

                            <div>
                                <SubHeading>Results</SubHeading>

                                <ul className="mt-[10px] lg:mt-[20px] list-disc pl-[18px] space-y-[6px] text-[15px] leading-[22px] text-white/65">
                                    <li>
                                        <Paragraph className="2xl:text-[22px]">
                                            Reduced operational delays
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph className="2xl:text-[22px]">
                                            Increased reporting accuracy
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph className="2xl:text-[22px]">
                                            Improved institutional visibility
                                        </Paragraph>
                                    </li>
                                    <li>
                                        <Paragraph className="2xl:text-[22px]">
                                            Faster executive decision cycles
                                        </Paragraph>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* right image */}
                        <div className="w-full max-w-[605px] h-full">
                            <Image
                                src={institutionalImpact}
                                alt="Presentation in classroom"
                                className="w-full h-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
