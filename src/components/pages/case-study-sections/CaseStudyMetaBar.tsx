import React from "react";

type CaseStudyMetaBarProps = {
    companyName?: string;
    category?: string;
    timeline?: string;
    tags?: string[];
};

export default function CaseStudyMetaBar({
    companyName = "OpsIntel Solutions",
    category = "Dashboard Design",
    timeline = "3 Months",
    tags = ["Intelligent", "Artificial", "System"],
}: CaseStudyMetaBarProps) {
    const meta = [
        { label: "Company Name", value: companyName },
        { label: "Category", value: category },
        { label: "Timelines", value: timeline },
    ];

    return (
        <section
            aria-label="Case study meta information"
            className="w-full rounded-[28px] px-[18px] py-[20px] sm:px-[28px] sm:py-[28px] lg:px-[42px] lg:py-[48px] bg-[linear-gradient(90deg,#C9B7FF_0%,#F3D7FF_48%,#FFD2EE_100%)] mt-[34px]"
        >
            <div className="grid md:grid-cols-[0.6fr_0.6fr_0.3fr_1fr] md:items-center gap-[30px]">
                {meta.map((item, idx) => (
                    <div key={idx} className={`w-full `}>
                        <span className="text-[#4B5154] font-medium tracking-normal text-xs sm:text-[14px]">
                            {item.label}
                        </span>
                        <p className="mt-[10px] text-[#0F1112] shrink-0 font-semibold tracking-normal text-sm sm:text-base leading-[1.1]">
                            {item.value}
                        </p>
                    </div>
                ))}

                {/* Related Tags */}
                <div className="min-w-0">
                    <p className="text-[#4B5154] font-medium tracking-normal text-xs sm:text-[14px]">
                        Related Tags
                    </p>

                    <ul className="mt-[14px] flex gap-[14px]">
                        {tags.map((t) => (
                            <li key={t}>
                                <span className="inline-flex items-center justify-center rounded-full border border-#7E7E81/35 bg-foreground px-[20px] py-[4px] text-[#1B1B1B] font-normal text-[11px] sm:text-[13px]">
                                    {t}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
