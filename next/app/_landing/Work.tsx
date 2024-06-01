import { Carousel, CarouselContent, CarouselItem } from "../components/ui/carousel"; // Adjust the import path as needed
import { Section } from "./Section";
import { useState } from "react";
import Image from 'next/image'

interface Project {
    img: string | undefined 
}

export const Work = () => {
    const [projects, setProjects] = useState<Project[]>([
        { img: '../public/clodio/clodio.png' },
        { img: './clodio/clodio2.png' },
        { img: './clodio/clodio3.png' },
        { img: './clodio/clodio4.png' },
        { img: './clodio/clodio5.png' },
        { img: './clodio/clodio6.png' },
        { img: './clodio/clodio7.png' },
        { img: './clodio/clodio8.png' },
        { img: './clodio/clodio9.png' },

    ]);

    const [projectsSecond, setProjectsSecond] = useState<Project[]>([
        { img: './commerce/commerce1.png' },
        { img: './commerce/commerce2.png' },
        { img: './commerce/commerce3.png' },
        { img: './commerce/commerce4.png' },
        { img: './commerce/commerce5.png' },
        { img: './commerce/commerce6.png' },
        { img: './commerce/commerce7.png' },
        { img: './commerce/commerce8.png' },
        { img: './commerce/commerce9.png' },
        { img: './commerce/commerce10.png' },


    ]);

    const [projectsThird, setProjectsThird] = useState<Project[]>([
        { img: './resto/resto1.png' },
        { img: './resto/resto2.png' },
        { img: './resto/resto3.png' },
        { img: './resto/resto4.png' },
        { img: './resto/resto5.png' },
        { img: './resto/resto6.png' },
        { img: './resto/resto7.png' },
        { img: './resto/resto8.png' },
   
    ]);

    const ProjectCarousel = ({ projects }: { projects: Project[] }) => {
        return (
          <div className="grid mt-4 lg:mt-6 gap-2 pt-10 lg:gap-4 ">
            <Carousel>
              <CarouselContent className="-m-1">
                {projects.map((project: Project, index: number) => (
                  <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                    <div className="p-1">
                      <div className="rounded-md overflow-hidden shadow-md">
                        <img src={project.img} width={300} height={100} alt="photo" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        );
      };
    
      return (
        <Section>
          <h2 className='text-3xl lg:text-4xl font-bold'>Some achievements.. </h2>
          <p className="text-lg text-muted-foreground mt-2 lg:mt-4">This websites made thousands of visits and grew the business of my client.</p>
          <ProjectCarousel projects={projects} />
        </Section>
      );
    };

