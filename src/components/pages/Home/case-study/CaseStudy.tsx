import React from "react";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import Button from "@/components/ui/Button";
import { FiArrowRight } from "react-icons/fi";
import { caseStudy } from "@/data/case-study";
import { CaseStudyCard } from "@/components/shared/CaseStudyCard";

export default function CaseStudy() {
    return (
        <section>
            <Container className="pt-13.75 2xl:pt-27.5">
                <div className="space-y-[50px]">
                    {/* heading */}
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                        <div className="space-y-[15px] md:space-y-[30px]">
                            <Heading className="2xl:text-[42px]">
                                Pilot Program / Case Study
                            </Heading>
                            <Paragraph className="2xl:text-xl">
                                Institutions can start with a controlled pilot
                                deployment to validate
                            </Paragraph>
                        </div>

                        <Button icon={<FiArrowRight />}>View All</Button>
                    </div>

                    {/* cards */}
                    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 place-items-center lg:gap-[50px]">
                        {caseStudy.slice(0, 3).map((item) => (
                            <CaseStudyCard key={item.id} item={item} />
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
}
