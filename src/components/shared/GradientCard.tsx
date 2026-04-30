import React from "react";
import Image from "next/image";
import { ServicesDataProps } from "@/data/services-and-expertise";
import SubHeading from "@/components/shared/SubHeading";
import Paragraph from "@/components/shared/Paragraph";
import { cn } from "@/lib/cn";

interface GradientCardProps extends ServicesDataProps {
    className?: string;
    imgClassName?: string;
}

export default function GradientCard({
    title,
    description,
    src,
    alt,
    className = "",
    imgClassName = "",
}: GradientCardProps) {
    return (
        <article>
            <div
                className={cn(
                    "w-full min-w-[333px] min-h-[361px] rounded-[14px] rounded-[14px] px-[25px] pt-[20px] pb-[60px] bg-linear-to-b from-card-gradient-start to-card-gradient-end overflow-hidden",
                    className,
                )}
            >
                <div>
                    <div>
                        <Image src={src} alt={alt} />
                    </div>

                    <div className="space-y-5 mt-[34px] max-w-[308px]">
                        <SubHeading className="whitespace-pre-line">
                            {title}
                        </SubHeading>
                        <Paragraph className="whitespace-pre-line">
                            {description}
                        </Paragraph>
                    </div>
                </div>
            </div>
        </article>
    );
}
