import { cn } from "../lib/utils";
import { PropsWithChildren } from "react";

export type SectionProps = PropsWithChildren<{
    className?: string
}>;

export const Section = (props: SectionProps) => {
    return <section className={cn(" md:my-20 lg:my-20 max-w-7xl px-6 m-auto lg:px-4", props.className,'my-16')}>{props.children}</section>
}

export const SectionCarousel  = (props: SectionProps) => {
    return <section className={cn(" md:my-20 lg:my-32 px-6 m-auto lg:px-4", props.className,'my-16')}>{props.children}</section>
}

export const SectionPrice  = (props: SectionProps) => {
    return <section className={cn(" md:my-20 lg:my-32 px-10 lg:px-10 m-auto", props.className,'my-16')}>{props.children}</section>
}