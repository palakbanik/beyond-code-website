import Image from "next/image";
import type { CaseStudyItem } from "@/data/case-study";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import CaseStudyMetaBar from "./CaseStudyMetaBar";
import SubHeading from "@/components/shared/SubHeading";
import Paragraph from "@/components/shared/Paragraph";

import aiOverviewImg from "@/public/ai-overview-img.jpg";
import robotReadBook from "@/public/robot-read-book.jpg";
import humanTouchRobot from "@/public/human-touch-robot.jpg";

const challengeSolutionData = [
    {
        id: 1,
        section: "Challenge",
        description:
            "Despite investing in digital tools, OpsIntel Solutions struggled with:",
        points: [
            "Lack of real-time operational visibility",
            "Heavy reliance on manual reporting processes",
            "Disconnected systems across departments",
            "Delays in executive decision-making",
            "Inefficient data retrieval and workflow bottlenecks",
        ],
        summary:
            "These challenges limited the organization's ability to scale efficiently and respond to operational demands.",
    },
    {
        id: 2,
        section: "Solution",
        description:
            "A structured Operational Intelligence System was deployed to integrate workflows, automate reporting, and enable real-time decision support.",
        points: [
            "Deployment of AI-powered operational intelligence assistants",
            "Integration with ERP systems and internal databases",
            "Automated reporting infrastructure with real-time dashboards",
            "Workflow automation and execution tracking systems",
            "Centralized knowledge and document intelligence system",
        ],
    },
];

const systemIntegrationOperationData = [
    {
        id: 1,
        section: "System Capability",
        description:
            "The system was engineered to handle complex operational environments with:",
        points: [
            "Real-time data processing and intelligence generation",
            "Seamless integration across multiple platforms",
            "Scalable infrastructure aligned with organizational growth",
            "Secure deployment within internal infrastructure",
        ],
    },
    {
        id: 2,
        section: "Integration Readiness",
        description:
            "The solution was fully integrated into existing infrastructure:",
        points: [
            "Connected with ERP, reporting tools, and internal systems",
            "No disruption to ongoing operations during deployment",
            "Aligned with governance frameworks and security policies",
            "Configured to match organizational workflows",
        ],
    },
    {
        id: 3,
        section: "Operational Impact",
        description: "Following deployment, OpsIntel Solutions achieved:",
        points: [
            "60–80% faster information retrieval",
            "Up to 85% reduction in manual reporting workload",
            "Real-time operational visibility across departments",
            "Significant improvement in decision-making speed",
            "Enhanced workflow efficiency and execution tracking",
        ],
    },
];

const resultsText =
    "Improved operational efficiency and system reliability\nFaster and more informed executive decisions\nReduced dependency on manual processes\nScalable infrastructure supporting long-term growth";

const conclusionText =
    "By implementing a structured operational intelligence system, OpsIntel Solutions successfully transformed its operational model from fragmented and manual to intelligent, automated, and data-driven.";

export default function CaseStudyDetails({ item }: { item: CaseStudyItem }) {
    const meta = item as Partial<{
        title: string;
        companyName: string;
        category: string;
        timeline: string;
        tags: string[];
    }>;

    return (
        <section className="bg-[#050506] text-white">
            <Container className="max-w-[898px] pt-30 md:pt-46 lg:pt-50 pb-50 sm:pb-30 lg:pb-50">
                {/* heading */}
                <Heading className="text-center">
                    Transforming Operational Efficiency Through Intelligent
                    Systems
                </Heading>
                <article className="space-y-[26px] sm:space-y-[30px] max-w-[865px] mx-auto">
                    <div className="space-y-[18px]">
                        {/* banner section */}
                        <div className="pt-[4px]">
                            <CaseStudyMetaBar
                                companyName={
                                    meta.companyName ?? "OpsIntel Solutions"
                                }
                                category={meta.category ?? "Dashboard Design"}
                                timeline={meta.timeline ?? "3 Months"}
                                tags={
                                    meta.tags ?? [
                                        "Intelligent",
                                        "Artificial",
                                        "System",
                                    ]
                                }
                            />
                        </div>
                    </div>

                    {/* text content */}
                    <div className="space-y-[34px] sm:space-y-[40px] md:space-y-[46px]">
                        {/* overview */}
                        <div className="space-y-[14px]">
                            <div className="space-y-[10px]">
                                <SubHeading className="xl:text-[36px]">
                                    Overview
                                </SubHeading>

                                <Paragraph className="text-white/65 text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21px]">
                                    OpsIntel Solutions is a large enterprise
                                    organization facing challenges in
                                    operational visibility, reporting
                                    inefficiencies, and delayed decision-making
                                    due to fragmented systems and manual
                                    workflows.
                                </Paragraph>
                            </div>

                            <Image
                                src={aiOverviewImg}
                                alt="AI Over View"
                                priority
                                className="object-cover"
                                placeholder="blur"
                                draggable={false}
                            />
                        </div>

                        {/* challenge solution */}
                        <section className="space-y-[22px]">
                            <div className="space-y-[26px]">
                                {challengeSolutionData.map((data) => (
                                    <div
                                        key={data.id}
                                        className="space-y-[10px]"
                                    >
                                        <SubHeading className="xl:text-[36px]">
                                            {data.section}
                                        </SubHeading>

                                        <Paragraph className="text-white/65 text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21px]">
                                            {data.description}
                                        </Paragraph>

                                        <ul className="mt-[6px] list-disc pl-[18px] space-y-[6px] marker:text-white/45">
                                            {data.points?.map((point, idx) => (
                                                <li key={idx}>
                                                    <Paragraph className="text-white/70 text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21px]">
                                                        {point}
                                                    </Paragraph>
                                                </li>
                                            ))}
                                        </ul>

                                        {data.summary ? (
                                            <Paragraph className="pt-[6px] text-white/60 text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21px]">
                                                {data.summary}
                                            </Paragraph>
                                        ) : null}
                                    </div>
                                ))}
                            </div>

                            {/* image */}
                            <Image
                                src={robotReadBook}
                                alt="robot read book"
                                className="object-cover"
                                placeholder="blur"
                                draggable={false}
                            />
                        </section>

                        {/* systemIntegrationOperationData */}
                        <div className="space-y-[22px]">
                            <div className="space-y-[30px]">
                                {systemIntegrationOperationData.map((data) => {
                                    return (
                                        <div
                                            key={data.id}
                                            className="space-y-[10px]"
                                        >
                                            <SubHeading className="xl:text-[36px]">
                                                {data.section}
                                            </SubHeading>

                                            <Paragraph className="text-white/65 text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21px]">
                                                {data.description}
                                            </Paragraph>

                                            <ul className="mt-[6px] list-disc pl-[18px] space-y-[6px] marker:text-white/45">
                                                {data.points?.map(
                                                    (point, idx) => (
                                                        <li key={idx}>
                                                            <Paragraph className="text-white/70 text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21px]">
                                                                {point}
                                                            </Paragraph>
                                                        </li>
                                                    ),
                                                )}
                                            </ul>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* image */}
                            <Image
                                src={humanTouchRobot}
                                alt="human touch robot hand"
                                className="object-cover"
                                placeholder="blur"
                                draggable={false}
                            />
                        </div>

                        {/* Results (missing in your code) */}
                        <section className="space-y-[10px]">
                            <SubHeading className="xl:text-[36px]">
                                Results
                            </SubHeading>

                            <Paragraph className="text-white/65 text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21px] whitespace-pre-line">
                                {resultsText}
                            </Paragraph>
                        </section>

                        {/* Conclusion (missing in your code) */}
                        <section className="space-y-[10px]">
                            <SubHeading className="xl:text-[36px]">
                                Conclusion
                            </SubHeading>

                            <Paragraph className="text-white/65 text-[13px] sm:text-[13.5px] leading-[20px] sm:leading-[21px]">
                                {conclusionText}
                            </Paragraph>
                        </section>
                    </div>
                </article>
            </Container>
        </section>
    );
}
