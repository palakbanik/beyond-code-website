import Container from "@/components/shared/Container";
import Heading from "@/components/shared/Heading";
import Paragraph from "@/components/shared/Paragraph";
import SubHeading from "@/components/shared/SubHeading";
import Image from "next/image";

export default function Beyond() {
    return (
        <div>
            <Container className="xl:mt-13.75">
                <div className="bg-linear-to-t from-dark-pink to-background rounded-[20px] xl:py-[76px] xl:px-[106px]">
                    <Heading className="text-center">Why Beyond Code</Heading>

                    <div>
                        <div className="bg-accent-pink w-[100px] aspect-square grid place-items-center rounded-full blur-2xl relative z-0">
                            <div className="bg-foreground w-full max-w-[63px] aspect-square rounded-full grid place-items-center relative z-10">
                                <Image
                                    src={"/icons/earth-icon.svg"}
                                    alt={"earth"}
                                    width={35}
                                    height={36}
                                />
                            </div>
                        </div>
                        <SubHeading className="">
                            Lorem, ipsum dolor.
                        </SubHeading>
                        <Paragraph>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Numquam officiis sequi quasi placeat quas rem,
                            magnam cum consequatur qui adipisci.
                        </Paragraph>
                    </div>
                </div>
            </Container>
        </div>
    );
}
