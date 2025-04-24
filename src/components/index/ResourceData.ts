type ResourceType = {
  title: string,
  type?: string,
  desc?: string,
  url: string,
}

export const ResourceData: ResourceType[] = [
  {
    title: 'MIT OpenCourseWare',
    type: 'Website',
    desc: 'Open courses from MIT',
    url: 'https://ocw.mit.edu/courses/'
  },
  {
    title: 'Core Dumped',
    desc: 'Informative videos on CS and arch',
    type: 'YT Channel',
    url: 'https://www.youtube.com/@CoreDumpped'
  },
  {
    title: 'Introductory Circuit Analysis',
    desc: 'Written by Robert L. Boylestad',
    type: 'Book',
    url: 'https://archive.org/details/doc-9-pdf-8b8cd5cadbd34b4c7e7be2eaf8457e3f-original'
  }
]
