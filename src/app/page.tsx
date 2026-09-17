import { Approach } from "@/components/sections/approach";
import { Contact } from "@/components/sections/contact";
import { Direction } from "@/components/sections/direction";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { Stack } from "@/components/sections/stack";

export default function Home() {
  return (
    <main id="main-content">
      <Hero />
      <Approach />
      <Projects />
      <Stack />
      <Direction />
      <Contact />
    </main>
  );
}
