type ResourceType = {
  title: string,
  type: string,
  desc?: string,
  course?: string,
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
    title: 'Shafaet\'s Planet',
    desc: 'Various algorithm tutorials in Bangla',
    type: 'Blog',
    url: 'https://www.shafaetsplanet.com/'
  },
  {
    title: 'CP Algorithms',
    desc: 'Algorithms for competitive programming',
    type: 'Blog',
    url: 'https://cp-algorithms.com/'
  }
]

export const CourseResourceData: ResourceType[] = [
  {
    title: 'Unix Processes in C',
    type: 'YT Playlist',
    course: 'Unix Programming',
    url: 'https://www.youtube.com/playlist?list=PLfqABt5AS4FkW5mOn2Tn9ZZLLDwA3kZUY'
  }
]
