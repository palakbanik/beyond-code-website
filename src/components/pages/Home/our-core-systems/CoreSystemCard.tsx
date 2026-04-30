import Paragraph from "@/components/shared/Paragraph";
import SubHeading from "@/components/shared/SubHeading";

type Section = {
    title: string;
    items: string[];
};

type CoreSystemCardProps = {
    badge: string;
    title: string;
    description?: string;
    linkText?: string;
    sections: Section[];
};

export default function CoreSystemCard({
    badge,
    title,
    description,
    linkText,
    sections,
}: CoreSystemCardProps) {
    return (
        <div className="w-full bg-[#222222]/50 backdrop-blur-[111px] rounded-[10px] max-w-[770px] min-h-[711px] p-6 sm:p-8 xl:p-[42px] gradient-border">
            {/* Badge */}
            <div className="px-4 py-2 inline-flex rounded-full p-[1px] gradient-border">
                <p className="text-foreground text-sm sm:text-base xl:text-xl">
                    {badge}
                </p>
            </div>

            {/* Title */}
            <div className="mt-3 md:mt-4 lg:mt-5">
                <SubHeading className="font-bold xl:[30px]">{title}</SubHeading>
            </div>

            {/* Description + underlined link line (like screenshot) */}
            {(description || linkText) && (
                <Paragraph className="mt-3 2xl:text-lg text-muted-foreground-primary">
                    {description}
                </Paragraph>
            )}

            {/* Sections */}
            <div className="mt-8 space-y-7">
                {sections.map((sec) => (
                    <div key={sec.title}>
                        <h4 className="text-muted-foreground-primary font-semibold tracking-wide">
                            {sec.title}
                        </h4>
                        <ul className="mt-3 space-y-0.5 list-disc pl-5 2xl:text-lg text-muted-foreground-primary leading-normal md:leading-[1.4] text-sm sm:text-base">
                            {sec.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
}
