import Juliana from './assets/Juliana.jpg'
import Rebecca from './assets/Rebecca.png'
import Nelly from './assets/Nelly.webp'
import Francis from './assets/Francis.jpg'
import Tonee from'./assets/Tonee.png'
import shikoh from './assets/shikoh.jpg'
import iHub from './assets/iHub.jpg'
import moringa from './assets/moringa.jpg'
import akira from './assets/akira.jpg'
import niehub from './assets/niehub.jpeg'
import kenyaScience from './assets/kenya science.jpg'
import garissa from './assets/garissa.jpg'

export const roleModels = [
  {
    id: 1,
    name: "Juliana Rotich",
    field: "Computer Science",
    country: "Kenya",
    image: Juliana,
    quote: "Advocates using technology to address societal challenges and empower communities across Africa.",
    bio: "Professor at University of Nairobi, pioneering AI research for agricultural solutions in East Africa.",
    achievement: "Developed drought prediction systems used across Kenya",
    category: "technology"
  },
  {
    id: 2,
    name: "Rebecca Enonchong",
    field: "Tech Enterpreneur", 
    country: "Kenya",
    image: Rebecca,
    quote: "“You dont envy the best, you learn from the best and you apply those to your business.” .",
    bio: "Leading researcher in affordable medical technology, focusing on maternal health solutions.",
    achievement: "Recognized alongside digital luminaries like Larry Page and Marc Benioff. ",
    category: "engineering"
  },
  {
    id: 3,
    name: "Nelly cheboi",
    field: "Environmental Science",
    country: "Kenya",
    image: Nelly,
    quote: "We want our students to have the skills to work for international companies remotely from the village.",
    bio: "Environmental scientist working on climate adaptation strategies for arid and semi-arid regions.",
    achievement: "Founder of TechLit Africa, which builds computer labs in rural Kenyan schools using recycled computers.",
    category: "science"
  },
  {
    id: 4,
    name: "Francis Nderitu",
    field: "Renewable Energy",
    country: "Kenya",
    image: Francis,
    quote: "Solar energy is not just about technology - it's about bringing light to every village.",
    bio: "Solar engineer designing affordable solar solutions for off-grid communities in Northern Kenya.",
    achievement: "Installed solar systems in over 100 schools in Garissa County",
    category: "engineering"
  },
  {
    id: 5,
    name: "Tonee Ndungu",
    field: "Data Science",
    country: "Kenya",
    image:  Tonee,
    quote: "Data tells stories that can transform entire communities when we listen carefully.",
    bio: "Data scientist using machine learning to improve healthcare delivery in marginalized communities.",
    achievement: "Built predictive models that reduced disease outbreaks by 40%",
    category: "technology"
  },
  {
    id: 6,
    name: "Shikoh Gitau",
    field: "Mathematics",
    country: "Kenya", 
    image: shikoh,
    quote: "Sometimes I sleep and I think everything that has happened is a dream .",
    bio: "Mathematics professor and researcher, promoting STEM education for girls in Northern Kenya.",
    achievement: "Founded 'Girls Math Club' reaching 5000+ students",
    category: "science"
  }
];

export const techHubs = [
  {
    id: 1,
    name: "iHub Nairobi",
    type: "Tech Hub",
    location: "Nairobi",
    description: "Kenya's premier tech innovation hub supporting startups and tech talent development.",
    programs: ["Startup Incubation", "Coding Bootcamps", "Women in Tech Workshops"],
    contact: "+254 20 2471264",
    website: "ihub.co.ke",
    image: iHub,
    ageGroup: "18+",
    cost: "Free - 50,000 KES",
    duration: "3-6 months"
  },
  {
    id: 2,
    name: "Moringa School",
    type: "Coding Bootcamp",
    location: "Nairobi",
    description: "Intensive coding bootcamp training software developers and data scientists.",
    programs: ["Full Stack Development", "Data Science", "Android Development"],
    contact: "+254 703 829 578",
    website: "moringaschool.com",
    image: moringa,
    ageGroup: "18+",
    cost: "150,000 - 300,000 KES",
    duration: "4-6 months"
  },
  {
    id: 3,
    name: "AkiraChix",
    type: "Training Program",
    location: "Nairobi",
    description: "Empowering young women with technical skills and leadership development.",
    programs: ["Web Development", "Mobile App Development", "Leadership Training"],
    contact: "+254 712 345 678",
    website: "akirachix.com",
    image: akira,
    ageGroup: "16-25",
    cost: "Free",
    duration: "1 year"
  },
  {
    id: 4,
    name: "NieHub",
    type: "Tech Hub",
    location: "Garissa",
    description: "Northern Kenya's premier innovation hub empowering young entrepreneurs and developers in underserved communities. Focused on creating tech solutions for local challenges while building digital skills.",
    programs: ["Mobile Development", "Digital Marketing", "Entrepreneurship Training", "UI/UX Design", "Data Analytics"],
    contact: "+254 798 456 123",
    website: "niehub.co.ke",
    image: niehub,
    ageGroup: "16+",
    cost: "Free - 20,000 KES",
    duration: "2-8 months"
  },
  {
    id: 9,
    name: "Kenya Science Campus",
    type: "Science Club",
    location: "Garissa",
    description: "Local science club promoting STEM education in Northern Kenya.",
    programs: ["Science Fair Training", "Math Olympiad Prep", "Laboratory Skills"],
    contact: "+254 756 123 456",
    website: "kenyasciencecampus.org",
    image: kenyaScience,
    cost: "Free",
    duration: "Ongoing"
  },
  {
    id: 5,
    name: "Nailab",
    type: "Tech Hub",
    location: "Nairobi",
    description: "Technology incubator focusing on mobile and web application development.",
    programs: ["Mobile App Development", "UI/UX Design", "Digital Marketing"],
    contact: "+254 20 2020202",
    website: "nailab.co.ke",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=250&fit=crop",
    ageGroup: "18+",
    cost: "25,000 - 100,000 KES",
    duration: "2-4 months"
  },
  {
    id: 6,
    name: "Garissa Girls Code Club",
    type: "Coding Club",
    location: "Garissa",
    description: "Community-based coding club specifically for girls in Garissa County.",
    programs: ["Basic Programming", "Web Design", "Computer Literacy"],
    contact: "+254 722 456 789",
    website: "garissagirlscode.org",
    image: garissa ,
    ageGroup: "10-18",
    cost: "Free",
    duration: "Ongoing"
  }
];

export const categories = [
  { id: 'all', name: 'All Fields', icon: 'Star' },
  { id: 'technology', name: 'Technology', icon: 'BookOpen' },
  { id: 'engineering', name: 'Engineering', icon: 'Award' },
  { id: 'science', name: 'Science', icon: 'Calendar' }
];

export const locations = ['all', 'Nairobi', 'Garissa', 'Mombasa'];

export const types = ['all', 'Tech Hub', 'Coding Bootcamp', 'Training Program', 'Science Club', 'Coding Club'];