type ResourceType = {
  title: string,
  type: string,
  desc: string,
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
  }
]
