export default function getProjectTags(project: Project): string[] {
  const tags: string[] = project.tags?.map((tag) => {
    switch (tag) {
      case "duplex": return 'Дуплекс';
      default:
        throw new Error('');
    }
  }) || [];

  if ((project.area.terrace ?? 0) > 0) {
    tags.push('Веранда/Терраса')
  }
  if ((project.area.balcony ?? 0) > 0) {
    tags.push('Балкон')
  }
  if (project.complexWallsElement?.variant === 'oriel') {
    tags.push('Эркер')
  }
  if (project.oneFloorElement?.variant === 'garage') {
    tags.push('Гараж')
  }
  if (project.oneFloorElement?.variant === 'bath') {
    tags.push('Баня/Сауна')
  }
  if (project.roof.variant === 'flat-roof') {
    tags.push('Плоская крыша')
  }

  return tags;
}
