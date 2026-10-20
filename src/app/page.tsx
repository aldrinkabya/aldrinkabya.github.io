import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { News } from "@/components/News";
import { Projects } from "@/components/Projects";
import { Publications } from "@/components/Publications";
import { Research } from "@/components/Research";
import { Talks } from "@/components/Talks";

export default function Home() {
  return (
    <>
      <Hero />
      <News />
      <Research />
      <Publications />
      <Experience />
      <Projects />
      <Education />
      <Talks />
    </>
  );
}
