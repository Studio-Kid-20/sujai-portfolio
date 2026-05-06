import { SectionHeading } from "@/components/common/SectionHeading";
import { SkillsArsenal } from "@/components/sections/skills/SkillsArsenal";
import { Reveal } from "@/components/ui/Reveal";
import { SKILLS_PAGE_COPY } from "@/data/pages/skills";

export function SkillsPage() {
  return (
    <main className="pb-24 pt-12">
      <div className="mx-auto max-w-7xl px-8 mb-20">
        <Reveal>
          <SectionHeading
            as="h1"
            titleId="skills-heading"
            title={SKILLS_PAGE_COPY.title}
            description={SKILLS_PAGE_COPY.intro}
            showLine
            titleClassName="md:text-5xl"
            descriptionClassName="text-xl"
          />
        </Reveal>
      </div>
      
      <SkillsArsenal />
    </main>
  );
}
