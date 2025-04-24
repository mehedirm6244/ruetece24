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
    title: 'Discrete Mathematics and Its Applications',
    desc: 'Written by Kenneth H. Rosen',
    type: 'Book',
    url: 'https://github.com/gigahidjrikaaa/Engineering-Books/blob/main/Discrete%20Mathematics/Rosen%20-%20Discrete%20Mathematics%20and%20Its%20Application%20%5B8th%20Edition%5D.pdf'
  },
  {
    title: 'Introductory Circuit Analysis',
    desc: 'Written by Robert L. Boylestad',
    type: 'Book',
    url: 'https://archive.org/details/doc-9-pdf-8b8cd5cadbd34b4c7e7be2eaf8457e3f-original'
  }
]
