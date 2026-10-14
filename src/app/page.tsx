import { FloorIndicator } from "@/components/layout/FloorIndicator"
import { sectionRegistry } from "@/components/home/registry"
import { getHomeSections, getVisibleFloors } from "@/lib/sections"

export default function HomePage() {
  const sections = getHomeSections()

  return (
    <main>
      <FloorIndicator floors={getVisibleFloors(sections)} />
      {sections.map((section) => {
        const Section = sectionRegistry[section.id]
        return <Section key={section.id} section={section} />
      })}
    </main>
  )
}
