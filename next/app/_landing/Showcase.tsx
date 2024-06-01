import Image from "next/image";
import Link from "next/link";
import { Code } from "./Hero";
import { Section } from "./Section";

export const Showcase = () => {
    return (
        <>
            <Section>
                {/* <h2 className='text-3xl lg:text-4xl font-bold'>From 3k followers to 41k </h2>
                <p className="text-lg text-muted-foreground mt-2 lg:mt-4">It's the story of
                    <Link href="https://youtube.com/@marclou">
                        <Code>Marc Lou</Code>
                    </Link>. He was making his own video but it was not growing FAST. So he called me and I fixed his channel.
                </p>
                <Image className="w-full h-auto mt-6 lg:mt-8 mr-auto" src="/data.jpeg" width={500} height={300} alt="Your image description" /> */}
            </Section>
        </>
    );
};
