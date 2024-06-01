import { Section } from "./Section"
import { CustomeIcon } from "./icons/CustomeIcon"

export const Footer = () => {
    return (
        <Section className="flex text-center  items-center flex-col border-t py-8 lg:py-24 md:py-14 border-t-accent flex-cols gap-4">
            <p className="text-muted-fareground font-bold inline-flex gap-1">Build by <span className="underline">Sacha Foucard</span> using NextJs <CustomeIcon name="nextJs" size={20} className="mt-1 ml-2" /></p>
            <p>© {new Date().getFullYear()} Sacha. All rights reserved</p>
        </Section>
    )
}
