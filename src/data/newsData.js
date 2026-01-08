import cardiacImg from '../assets/specialties/cardiac.png';
import haematologyImg from '../assets/specialties/haematology.png';
import teamImg from '../assets/team.png';
import facilityImg from '../assets/facility.png';
import imagingImg from '../assets/specialties/imaging.png';
import doctorImg from '../assets/specialties/family_medicine.png';

export const newsItems = [
  {
    id: "cath-lab-opening",
    category: "Hospital News",
    date: "March 15, 2024",
    title: "New Cath Lab Now Open",
    excerpt: "We are proud to announce the opening of our state-of-the-art Catheterization Laboratory, bringing advanced heart care closer to our community.",
    image: cardiacImg, // Cath lab / surgery
    featured: true,
    content: `
      <h3>Advanced Care Close to Home</h3>
      <p>The new Cath Lab is equipped with the latest imaging technology, allowing our specialized cardiac team to perform complex procedures with greater precision and safety. Patients suffering from heart attacks, angina, and other cardiovascular conditions can now receive life-saving interventions such as angioplasty and stenting right here in our community, without the need to travel long distances.</p>
      
      <h3>Expert Team</h3>
      <p>Our lab is staffed by a dedicated team of interventional cardiologists, nurses, and technicians who have undergone rigorous training in the latest cardiac procedures. Their expertise, combined with our cutting-edge technology, ensures that our patients receive the highest standard of care.</p>
      
      <p>"This facility will save lives," says Dr. Amani, Head of Cardiology. "In cardiac emergencies, every minute counts. Having this capability on-site means faster treatment times and better outcomes for our patients."</p>
    `
  },
  {
    id: "clinical-trials",
    category: "Research",
    date: "December 10, 2023",
    title: "New Clinical Trials Launching",
    excerpt: "HOPE Hospital is participating in groundbreaking international clinical trials for novel diabetes treatments.",
    image: haematologyImg, // Research/Lab
    featured: false,
    content: `
      <p>"These trials represent a significant step forward in our understanding of metabolic diseases," explains Dr. Sarah Chen, lead investigator.</p>
      
      <p>Patients interested in learning more about eligibility criteria can contact our Research Department.</p>
    `
  },
  {
    id: "medical-camp",
    category: "Community",
    date: "November 22, 2023",
    title: "Successful Free Medical Camp",
    excerpt: "Our annual community health outreach program was a major success, serving over 500 residents.",
    image: teamImg, // Community / Doctor Patient
    featured: false,
    content: `
      <p>The event was held at the community center, with over 500 residents attending to receive free health screenings, consultations, and wellness advice.</p>
      
      <p>Services provided included blood pressure checks, diabetes screening, BMI assessments, and vision tests. Our team of volunteer doctors and nurses worked tirelessly to ensure everyone received attention and guidance on maintaining a healthy lifestyle.</p>
      
      <p>We are grateful to our community partners who helped make this event possible.</p>
    `
  },
  {
    id: "top-100-award",
    category: "Awards",
    date: "October 05, 2023",
    title: "Recognized as Top 100 Hospital",
    excerpt: "We are thrilled to be named one of the nation's Top 100 Hospitals for patient excellence.",
    image: facilityImg, // Modern Hospital Building
    featured: true,
    content: `
      <p>Hope Specialist Hospitals has been named one of the nation's Top 100 Hospitals. This prestigious recognition reflects our unwavering dedication to clinical excellence, patient safety, and operational efficiency.</p>
      
      <p>The award is based on an independent analysis of key performance indicators, including survival rates, complication rates, and patient satisfaction scores. We dedicate this award to our hardworking staff who go above and beyond every day to serve our patients.</p>
    `
  },
  {
    id: "mri-scanner",
    category: "Technology",
    date: "September 12, 2023",
    title: "New MRI Scanner Installed",
    excerpt: "Our radiology department has upgraded to the latest 3.0T MRI scanner for faster, clearer imaging.",
    image: imagingImg, // MRI Scanner
    featured: false,
    content: `
      <p>The new system utilizes AI-assisted imaging to reduce scan times by up to 50%, meaning patients spend less time in the machine while doctors get clearer, more detailed images for diagnosis.</p>
    `
  },
  {
    id: "dr-chen-joins",
    category: "Staff News",
    date: "August 30, 2023",
    title: "Welcoming Dr. Emily Chen",
    excerpt: "We are excited to welcome renowned oncologist Dr. Emily Chen to our specialist team.",
    image: doctorImg, // Female Doctor
    featured: false,
    content: `
        <p>Dr. Chen brings over 15 years of experience from City General Hospital, where she led the Breast Cancer Research Program. At HOPE, Dr. Chen will oversee the expansion of our chemotherapy services and lead our multidisciplinary tumor board.</p>
        
        <p>"I am excited to join the compassionate team at HOPE," says Dr. Chen. "I look forward to working with my colleagues to provide personalized, evidence-based care to our cancer patients."</p>
    `
  }
];
