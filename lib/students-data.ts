export interface Student {
  id: number
  name: string
  imageUrl: string
  capabilities: string[]
}

export const students: Student[] = [
  {
    id: 1,
    name: "Adi Pratama",
    imageUrl: "/images/students/adi.png",
    capabilities: ["Web Development", "React", "UI/UX Design"]
  },
  {
    id: 2,
    name: "Siti Nurhaliza",
    imageUrl: "/images/students/siti.png",
    capabilities: ["Game Development", "Unity", "3D Modeling"]
  },
  {
    id: 3,
    name: "Budi Santoso",
    imageUrl: "/images/students/budi.png",
    capabilities: ["Backend Development", "Database Design", "APIs"]
  },
  {
    id: 4,
    name: "Maya Kusuma",
    imageUrl: "/images/students/maya.png",
    capabilities: ["Mobile App Development", "Flutter", "iOS Development"]
  },
  {
    id: 5,
    name: "Reza Wijaya",
    imageUrl: "/images/students/reza.png",
    capabilities: ["Frontend Development", "JavaScript", "CSS Animation"]
  },
  {
    id: 6,
    name: "Dina Amelia",
    imageUrl: "/images/students/dina.png",
    capabilities: ["UI Design", "Figma", "Prototyping"]
  },
  {
    id: 7,
    name: "Fajar Rahman",
    imageUrl: "/images/students/fajar.png",
    capabilities: ["Python", "Data Analysis", "Automation"]
  },
  {
    id: 8,
    name: "Lisa Handoko",
    imageUrl: "/images/students/lisa.png",
    capabilities: ["DevOps", "Cloud Computing", "Linux"]
  }
]
