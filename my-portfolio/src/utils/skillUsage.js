import { skillGroups } from '../data/skills'
import { projects } from '../data/projects'
import { experience } from '../data/experience'

const normalize = (text) => text.toLowerCase()

// Returns the names of items whose tags include the given skill
function findUsage(items, skill, nameField) {
  return items
    .filter((item) => item.tags.some((tag) => normalize(tag) === normalize(skill)))
    .map((item) => item[nameField])
}

// One flat row per skill, like a DataFrame
export const skillTable = skillGroups
  .flatMap((group) =>
    group.skills.map((skill) => ({
      skill,
      category: group.category,
      projects: findUsage(projects, skill, 'title'),
      roles: findUsage(experience, skill, 'role'),
    })),
  )
  .map((row, index) => ({ index, ...row }))