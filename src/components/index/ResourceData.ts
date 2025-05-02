type ResourceType = {
  title: string,
  type: string,
  desc?: string,
  url: string,
}

type CourseResourceType = {
  title: string,
  type: string,
  courses: string[],
  url: string,
}

export const ResourceData: ResourceType[] = [
  {
    title: 'MIT OpenCourseWare',
    type: 'Website',
    desc: 'Courses from MIT',
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

export const CourseResourceData: CourseResourceType[] = [
  {
    title: 'Unix Processes in C',
    type: 'Playlist',
    courses: ['Unix Programming'],
    url: 'https://www.youtube.com/playlist?list=PLfqABt5AS4FkW5mOn2Tn9ZZLLDwA3kZUY'
  }
]
