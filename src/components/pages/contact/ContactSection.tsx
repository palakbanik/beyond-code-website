import Link from "next/link";
import {
    contactInfo,
    contactSectionData,
    contactSocialLinks,
} from "@/data/contact";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { FiArrowUpRight } from "react-icons/fi";
import {
    RiInstagramLine,
    RiLinkedinLine,
    RiFacebookCircleLine,
    RiTwitterXLine,
} from "react-icons/ri";
import Button from "@/components/ui/Button";
import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import SubHeading from "@/components/shared/SubHeading";
import Paragraph from "@/components/shared/Paragraph";
import Image from "next/image";
import { PiHeadphonesBold } from "react-icons/pi";

// function SocialIcon({
//     type,
// }: {
//     type: "instagram" | "facebook" | "linkedin" | "x";
// }) {
//     const className = "h-5 w-5";
//     switch (type) {
//         case "instagram":
//             return <RiInstagramLine className={className} />;
//         case "facebook":
//             return <RiFacebookCircleLine className={className} />;
//         case "linkedin":
//             return <RiLinkedinLine className={className} />;
//         case "x":
//             return <RiTwitterXLine className={className} />;
//     }
// }

export default function ContactSection() {
    const { left, right } = contactSectionData;
    console.log(left.blocks);

    return (
        <div>
            <Container>
                <div className="px-4 sm:px-6 lg:px-10">
                    <div className="gradient-border">
                        <div className="2xl:rounded-[30px] bg-[#222222]/50 ">
                            <div className="flex flex-col lg:flex-row justify-between">
                                {/* left contact info */}
                                <div className="p-6 sm:p-12 flex flex-col justify-between">
                                    <div className="xl:space-y-[30px] ">
                                        <div className="max-w-[282px]">
                                            <SubHeading>
                                                <span className="text-[#636363]">
                                                    Book a consultation
                                                </span>{" "}
                                                unlock operational intelligence.
                                            </SubHeading>
                                        </div>

                                        <div>
                                            <Link href={left.cta.href}>
                                                <Button
                                                    icon={<PiHeadphonesBold />}
                                                >
                                                    {left.cta.label}
                                                </Button>
                                            </Link>
                                        </div>
                                    </div>

                                    <div className="mt-10 space-y-8">
                                        <div className="space-y-12.5">
                                            <div className="space-y-5">
                                                <SubHeading>
                                                    Contact Details
                                                </SubHeading>

                                                <div>
                                                    {contactInfo.map(
                                                        (info, i) => (
                                                            <Paragraph
                                                                key={i}
                                                                className="flex items-center gap-2"
                                                            >
                                                                <span>
                                                                    <Image
                                                                        src={
                                                                            info.src
                                                                        }
                                                                        alt="phone"
                                                                        width={
                                                                            25
                                                                        }
                                                                        height={
                                                                            25
                                                                        }
                                                                        draggable={
                                                                            false
                                                                        }
                                                                    />
                                                                </span>
                                                                <span>
                                                                    {info.label}
                                                                </span>
                                                            </Paragraph>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                            <div className="space-y-5">
                                                <SubHeading>
                                                    Social links
                                                </SubHeading>

                                                <div className="flex items-center gap-2.5">
                                                    {contactSocialLinks.map(
                                                        (info, i) => (
                                                            <span key={i}>
                                                                <Image
                                                                    src={
                                                                        info.src
                                                                    }
                                                                    alt="phone"
                                                                    width={48}
                                                                    height={48}
                                                                    draggable={
                                                                        false
                                                                    }
                                                                />
                                                            </span>
                                                        ),
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* right form card */}
                                <div className="p-6 sm:p-8 ">
                                    <div className="w-full max-w-[731px] rounded-2xl bg-[#1A1A1A] backdrop-blur-[20px] border border-border/60 p-6 sm:p-7 2xl:p-[58px]">
                                        <span className="capitalize rounded-full border border-foreground px-[15px] py-[12px] text-lg text-muted-foreground-secondary">
                                            contact us
                                        </span>

                                        <h3 className="mt-4 xl:mt-[30px] whitespace-pre-line text-xl sm:text-2xl 2xl:text-[42px] font-semibold leading-snug xl:leading-[1.2]">
                                            Let’s discuss how we can transform
                                            your operations with intelligent
                                            systems.
                                        </h3>

                                        <form className="mt-6 xl:mt-[50px] space-y-4">
                                            {right.fields.map((f) => (
                                                <div
                                                    key={f.name}
                                                    className="space-y-2"
                                                >
                                                    <label
                                                        className="text-xs xl:text-base text-muted-foreground-secondary/30"
                                                        htmlFor={f.name}
                                                    >
                                                        {f.label}
                                                    </label>

                                                    {f.type === "textarea" ? (
                                                        <Textarea
                                                            id={f.name}
                                                            name={f.name}
                                                            required={
                                                                f.required
                                                            }
                                                            placeholder={
                                                                f.placeholder
                                                            }
                                                        />
                                                    ) : (
                                                        <Input
                                                            id={f.name}
                                                            name={f.name}
                                                            type={f.type}
                                                            required={
                                                                f.required
                                                            }
                                                            placeholder={
                                                                f.placeholder
                                                            }
                                                        />
                                                    )}
                                                </div>
                                            ))}

                                            <div className="xl:mt-[50px]">
                                                <Button
                                                    type="submit"
                                                    icon={<FiArrowUpRight />}
                                                    className="w-full justify-between px-5"
                                                >
                                                    {right.submitLabel}
                                                </Button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
