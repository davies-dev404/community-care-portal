import { 
  Scissors, 
  Eye, 
  Siren, 
  Baby, 
  Heart, 
  Pill, 
  Activity, 
  Users, 
  User, 
  TestTube, 
  ShieldCheck, 
  Clock, 
  Ambulance, 
  Microscope, 
  Zap, 
  CheckCircle,
  Stethoscope, 
  Brain, 
  Bone, 
  Ear, 
  Scan, 
  Smile, 
  Syringe, 
  Briefcase, 
  Clipboard,
  Wind,
  Apple
} from 'lucide-react';

import emergencyImg from '../assets/specialties/emergency.png';
import icuImg from '../assets/specialties/icu.png';
import pediatricsImg from '../assets/specialties/pediatrics.png';
import allergyImg from '../assets/specialties/allergy.png';
import ambulanceImg from '../assets/specialties/ambulance.png';
import audiologyImg from '../assets/specialties/audiology.png';
import cardiacImg from '../assets/specialties/cardiac.png';
import childDevImg from '../assets/specialties/child_development.png';
import dentistryImg from '../assets/specialties/dentistry.png';
import dermatologyImg from '../assets/specialties/dermatology.png';
import dieteticsImg from '../assets/specialties/dietetics.png';
import endocrinologyImg from '../assets/specialties/endocrinology.png';
import entImg from '../assets/specialties/ent.png';
import familyMedImg from '../assets/specialties/family_medicine.png';
import foetalMedImg from '../assets/specialties/foetal_medicine.png';
import gastroImg from '../assets/specialties/gastroenterology.png';
import gastroSurgImg from '../assets/specialties/gastro_surgery.png';
import lapSurgImg from '../assets/specialties/laparoscopic_surgery.png';
import genMedImg from '../assets/specialties/general_medicine.png';
import haematologyImg from '../assets/specialties/haematology.png';
import imagingImg from '../assets/specialties/imaging.png';
import careImg from '../assets/care.png';

export const specialtiesData = [
  {
    id: "surgery",
    title: "General Surgery",
    subtitle: "Advanced Surgical Procedures",
    shortDescription: "Minimally invasive and complex surgical interventions.",
    fullDescription: `<p>Our Surgery Department provides comprehensive and specialized surgical care designed to meet the highest standards of safety and efficacy.</p>`,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop",
    icon: Scissors,
    benefits: [{ title: "Minimally Invasive", icon: Zap }, { title: "Expert Surgeons", icon: User }]
  },
  {
    id: "emergency",
    title: "Accident & Emergency",
    subtitle: "24-Hour Emergency Services",
    shortDescription: "Rapid response medical care for emergencies.",
    fullDescription: `<p>Our Accident and Emergency (A&E) Department operates 24/7/365 to handle medical emergencies, trauma cases, and acute illnesses with speed and precision.</p>`,
    image: emergencyImg,
    icon: Ambulance,
    benefits: [{ title: "Rapid Response", icon: Ambulance }, { title: "Trauma Care", icon: ShieldCheck }]
  },
  {
    id: "aesthetic",
    title: "Aesthetic",
    subtitle: "Cosmetic & Plastic Surgery",
    shortDescription: "Enhancing appearance through medical and surgical procedures.",
    fullDescription: `<p>Our Aesthetic department offers a range of cosmetic and reconstructive procedures to enhance appearance and correct defects.</p>`,
    image: "https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=2000&auto=format&fit=crop",
    icon: Smile,
    benefits: [{ title: "Cosmetic Surgery", icon: Scissors }, { title: "Reconstructive", icon: Activity }]
  },
  {
    id: "allergy-immunology",
    title: "Allergy and Immunology",
    subtitle: "Allergic Disease Management",
    shortDescription: "Diagnosis and treatment of allergies and immune system disorders.",
    fullDescription: `<p>We specialize in the diagnosis and management of asthma, allergies, and immune deficiency disorders.</p>`,
    image: allergyImg,
    icon: Wind,
    benefits: [{ title: "Allergy Testing", icon: TestTube }]
  },
  {
    id: "anaesthesiology",
    title: "Anaesthesiology",
    subtitle: "Pain Management & Anesthesia",
    shortDescription: "Safe anesthesia care for surgical procedures.",
    fullDescription: `<p>Our Anaesthesiology team ensures patient safety and comfort during surgical procedures through advanced pain management techniques.</p>`,
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop",
    icon: Syringe,
    benefits: [{ title: "Pain Relief", icon: Zap }]
  },
  {
    id: "ambulance",
    title: "Ambulance Services",
    subtitle: "Emergency Transport",
    shortDescription: "24/7 Rapid response ambulance services.",
    fullDescription: `<p>Our ambulance fleet is equipped with life-saving technology to provide immediate care during transport.</p>`,
    image: ambulanceImg,
    icon: Ambulance,
    benefits: [{ title: "Rapid Transport", icon: Clock }]
  },
  {
    id: "audiology",
    title: "Audiology",
    subtitle: "Hearing & Balance",
    shortDescription: "Diagnosis and treatment of hearing and balance disorders.",
    fullDescription: `<p>We provide comprehensive hearing assessments and rehabilitation services for patients of all ages.</p>`,
    image: audiologyImg,
    icon: Ear,
    benefits: [{ title: "Hearing Tests", icon: Activity }]
  },
  {
    id: "bariatric",
    title: "Bariatric Surgery",
    subtitle: "Weight Loss Surgery",
    shortDescription: "Surgical solutions for obesity and metabolic disorders.",
    fullDescription: `<p>We offer specialized surgical procedures for long-term weight loss and health improvement.</p>`,
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2000&auto=format&fit=crop",
    icon: Scissors,
    benefits: [{ title: "Weight Management", icon: Activity }]
  },
  {
    id: "cardiac-sciences",
    title: "Cardiac Sciences",
    subtitle: "Heart Care",
    shortDescription: "Comprehensive care for heart conditions.",
    fullDescription: `<p>Our Cardiac Sciences centre offers advanced diagnosis and treatment for all heart-related ailments.</p>`,
    image: cardiacImg,
    icon: Heart,
    benefits: [{ title: "Cardiology", icon: Activity }]
  },
  {
    id: "child-development",
    title: "Child Development",
    subtitle: "Pediatric Development",
    shortDescription: "Supporting the growth and development of children.",
    fullDescription: `<p>We assess and support children with developmental delays and disabilities.</p>`,
    image: childDevImg,
    icon: Baby,
    benefits: [{ title: "Early Intervention", icon: CheckCircle }]
  },
  {
    id: "critical-care",
    title: "Critical Care and I.C.U",
    subtitle: "Intensive Care",
    shortDescription: "24/7 life support and monitoring.",
    fullDescription: `<p>Our ICU provides critical care for life-threatening injuries and illnesses.</p>`,
    image: icuImg,
    icon: Siren,
    benefits: [{ title: "24/7 Monitoring", icon: Activity }]
  },
  {
    id: "dentistry",
    title: "Dentistry",
    subtitle: "Dental Care",
    shortDescription: "Comprehensive oral health services.",
    fullDescription: `<p>We offer general, cosmetic, and restorative dental services.</p>`,
    image: dentistryImg,
    icon: Smile,
    benefits: [{ title: "Oral Health", icon: CheckCircle }]
  },
  {
    id: "dermatology",
    title: "Dermatology",
    subtitle: "Skin Care",
    shortDescription: "Diagnosis and treatment of skin, hair, and nail conditions.",
    fullDescription: `<p>Our dermatologists treat a wide range of skin conditions using medical and surgical methods.</p>`,
    image: dermatologyImg,
    icon: User,
    benefits: [{ title: "Skin Health", icon: Activity }]
  },
  {
    id: "dietetics",
    title: "Dietetics and Nutrition",
    subtitle: "Nutritional Therapy",
    shortDescription: "Personalized nutrition plans for health and recovery.",
    fullDescription: `<p>Our dietitians provide medical nutrition therapy to manage diseases and promote health.</p>`,
    image: dieteticsImg,
    icon: Apple,
    benefits: [{ title: "Healthy Eating", icon: Heart }]
  },
  {
    id: "endocrinology",
    title: "Endocrinology",
    subtitle: "Hormonal Disorders",
    shortDescription: "Diabetes and metabolic disorder management.",
    fullDescription: `<p>We specialize in treating hormonal imbalances, including diabetes and thyroid disorders.</p>`,
    image: endocrinologyImg,
    icon: Activity,
    benefits: [{ title: "Diabetes Care", icon: CheckCircle }]
  },
  {
    id: "ent",
    title: "ENT, Head and Neck Surgery",
    subtitle: "Ear, Nose, Throat",
    shortDescription: "Surgical and medical treatment for ENT conditions.",
    fullDescription: `<p>We provide comprehensive care for disorders of the ear, nose, throat, head, and neck.</p>`,
    image: entImg,
    icon: Ear,
    benefits: [{ title: "ENT Surgery", icon: Scissors }]
  },
  {
    id: "family-medicine",
    title: "Family Medicine",
    subtitle: "Primary Care",
    shortDescription: "Comprehensive health care for individuals and families.",
    fullDescription: `<p>We offer continuous and comprehensive health care for individuals and families across all ages.</p>`,
    image: familyMedImg,
    icon: Users,
    benefits: [{ title: "Preventive Care", icon: ShieldCheck }]
  },
  {
    id: "foetal-medicine",
    title: "Foetal Medicine",
    subtitle: "Unborn Baby Care",
    shortDescription: "Specialized care for the fetus and high-risk pregnancies.",
    fullDescription: `<p>We assist in the assessment and management of high-risk pregnancies and fetal health.</p>`,
    image: foetalMedImg,
    icon: Baby,
    benefits: [{ title: "Prenatal Care", icon: Heart }]
  },
  {
    id: "gastroenterology",
    title: "Gastroenterology",
    subtitle: "Digestive Health",
    shortDescription: "Treatment of digestive system disorders.",
    fullDescription: `<p>We diagnose and treat conditions affecting the esophagus, stomach, intestines, and liver.</p>`,
    image: gastroImg,
    icon: Activity,
    benefits: [{ title: "Digestive Care", icon: CheckCircle }]
  },
  {
    id: "gastro-surgery",
    title: "Gastrointestinal Surgery",
    subtitle: "Abdominal Surgery",
    shortDescription: "Surgical treatment for digestive diseases.",
    fullDescription: `<p>We perform surgeries for conditions of the digestive tract.</p>`,
    image: gastroSurgImg,
    icon: Scissors,
    benefits: [{ title: "Surgical Care", icon: Zap }]
  },
  {
    id: "laparoscopic-surgery",
    title: "General and Laparoscopic Surgery",
    subtitle: "Minimally Invasive Surgery",
    shortDescription: "General surgical procedures using keyhole techniques.",
    fullDescription: `<p>We specialize in minimally invasive surgeries for faster recovery.</p>`,
    image: lapSurgImg,
    icon: Scissors,
    benefits: [{ title: "Minimal Scarring", icon: CheckCircle }]
  },
  {
    id: "general-medicine",
    title: "General Medicine",
    subtitle: "Adult Care",
    shortDescription: "Diagnosis and treatment of adult diseases.",
    fullDescription: `<p>Our physicians provide comprehensive care for chronic and acute illnesses in adults.</p>`,
    image: genMedImg,
    icon: Stethoscope,
    benefits: [{ title: "Chronic Care", icon: Heart }]
  },
  {
    id: "haematology",
    title: "Haematology",
    subtitle: "Blood Disorders",
    shortDescription: "Diagnosis and treatment of blood-related conditions.",
    fullDescription: `<p>Treatment of blood disorders including anemia, leukemia, and clotting problems.</p>`,
    image: haematologyImg,
    icon: TestTube,
    benefits: [{ title: "Blood Health", icon: Activity }]
  },
  {
    id: "imaging",
    title: "Imaging",
    subtitle: "Diagnostic Imaging",
    shortDescription: "Advanced radiology and imaging services.",
    fullDescription: `<p>We utilize advanced imaging technology for accurate diagnosis.</p>`,
    image: imagingImg,
    icon: Scan,
    benefits: [{ title: "Accurate Diagnosis", icon: Eye }]
  },
  {
    id: "internal-medicine",
    title: "Internal Medicine",
    subtitle: "Internal Diseases",
    shortDescription: "Prevention, diagnosis, and treatment of adult diseases.",
    fullDescription: `<p>Our internists manage complex medical issues and chronic diseases.</p>`,
    image: genMedImg,
    icon: Stethoscope,
    benefits: [{ title: "Complex Care", icon: Clipboard }]
  },
  {
    id: "lactation",
    title: "Lactation Services",
    subtitle: "Breastfeeding Support",
    shortDescription: "Support and guidance for breastfeeding mothers.",
    fullDescription: `<p>We provide education and support to help mothers successfully breastfeed.</p>`,
    image: pediatricsImg,
    icon: Baby,
    benefits: [{ title: "Mother Support", icon: Heart }]
  },
  {
    id: "maternity",
    title: "Maternity",
    subtitle: "Mother & Baby",
    shortDescription: "Comprehensive maternity services.",
    fullDescription: `<p>Safe delivery and care for mothers and newborns.</p>`,
    image: foetalMedImg,
    icon: Baby,
    benefits: [{ title: "Safe Delivery", icon: CheckCircle }]
  },
  {
    id: "midwifery",
    title: "Midwifery Services",
    subtitle: "Midwife Care",
    shortDescription: "Expert midwifery care for pregnancy and birth.",
    fullDescription: `<p>Our midwives provide personalized care for expectant mothers.</p>`,
    image: foetalMedImg,
    icon: Users,
    benefits: [{ title: "Personalized Care", icon: Heart }]
  },
  {
    id: "neonatology",
    title: "Neonatology",
    subtitle: "Newborn Care",
    shortDescription: "Specialized care for ill or premature newborn infants.",
    fullDescription: `<p>We provide intensive care for premature and sick newborns.</p>`,
    image: pediatricsImg,
    icon: Baby,
    benefits: [{ title: "Newborn Health", icon: ShieldCheck }]
  },
  {
    id: "nephrology",
    title: "Nephrology",
    subtitle: "Kidney Care",
    shortDescription: "Diagnosis and treatment of kidney diseases.",
    fullDescription: `<p>We treat kidney disorders and provide dialysis services.</p>`,
    image: genMedImg,
    icon: Activity,
    benefits: [{ title: "Kidney Health", icon: CheckCircle }]
  },
  {
    id: "nicu",
    title: "NICU",
    subtitle: "Neonatal Intensive Care",
    shortDescription: "Intensive care for critical newborns.",
    fullDescription: `<p>Our NICU is equipped to care for the most critical newborns.</p>`,
    image: icuImg,
    icon: Baby,
    benefits: [{ title: "Critical Care", icon: Siren }]
  },
  {
    id: "obgyn",
    title: "Obstetrics & Gynaecology",
    subtitle: "Women's Health",
    shortDescription: "Care for women's reproductive health and childbirth.",
    fullDescription: `<p>Comprehensive medical and surgical care for women's health issues.</p>`,
    image: foetalMedImg,
    icon: User,
    benefits: [{ title: "Women's Health", icon: Heart }]
  },
  {
    id: "occupational-medicine",
    title: "Occupational Medicine",
    subtitle: "Workplace Health",
    shortDescription: "Management of work-related injuries and illnesses.",
    fullDescription: `<p>We focus on the health and safety of workers.</p>`,
    image: familyMedImg,
    icon: Briefcase,
    benefits: [{ title: "Worker Health", icon: ShieldCheck }]
  },
  {
    id: "oncology",
    title: "Oncology",
    subtitle: "Cancer Care",
    shortDescription: "Comprehensive cancer diagnosis and treatment.",
    fullDescription: `<p>We offer advanced cancer treatments including chemotherapy and surgery.</p>`,
    image: careImg,
    icon: Activity,
    benefits: [{ title: "Cancer Treatment", icon: Pill }]
  },
  {
    id: "ophthalmology",
    title: "Ophthalmology",
    subtitle: "Eye Care",
    shortDescription: "Eye exams and surgery.",
    fullDescription: `<p>We treat eye diseases and perform vision correction surgeries.</p>`,
    image: careImg,
    icon: Eye,
    benefits: [{ title: "Vision Care", icon: Eye }]
  },
  {
    id: "oral-maxillofacial",
    title: "Oral and Maxillofacial Surgery",
    subtitle: "Face & Jaw Surgery",
    shortDescription: "Surgery of the face, mouth, and jaws.",
    fullDescription: `<p>We specialize in treating diseases and injuries of the face and mouth.</p>`,
    image: dentistryImg,
    icon: Smile,
    benefits: [{ title: "Facial Surgery", icon: Scissors }]
  },
  {
    id: "orthopaedics",
    title: "Orthopaedics",
    subtitle: "Bone & Joint Care",
    shortDescription: "Treatment of musculoskeletal conditions.",
    fullDescription: `<p>We treat bone, joint, and muscle injuries and diseases.</p>`,
    image: careImg,
    icon: Bone,
    benefits: [{ title: "Joint Health", icon: Activity }]
  },
  {
    id: "picu",
    title: "P.I.C.U",
    subtitle: "Pediatric Intensive Care",
    shortDescription: "Critical care for children.",
    fullDescription: `<p>Intensive care unit dedicated to critically ill children.</p>`,
    image: icuImg,
    icon: Baby,
    benefits: [{ title: "Child Critical Care", icon: Siren }]
  },
  {
    id: "paediatrics",
    title: "Paediatrics",
    subtitle: "Child Health",
    shortDescription: "Medical care for infants, children, and adolescents.",
    fullDescription: `<p>Comprehensive health care for children from birth to young adulthood.</p>`,
    image: pediatricsImg,
    icon: Baby,
    benefits: [{ title: "Child Health", icon: Heart }]
  },
  {
    id: "pathology",
    title: "Pathology & Lab Medicine",
    subtitle: "Laboratory Services",
    shortDescription: "Diagnostic testing and analysis.",
    fullDescription: `<p>We identify diseases through analysis of body fluids and tissues.</p>`,
    image: haematologyImg,
    icon: Microscope,
    benefits: [{ title: "Disease Detection", icon: TestTube }]
  },
  {
    id: "pharmacy",
    title: "Pharmacy",
    subtitle: "Medication Services",
    shortDescription: "Dispensing of medications and advice.",
    fullDescription: `<p>Our pharmacy ensures safe and effective medication use.</p>`,
    image: careImg,
    icon: Pill,
    benefits: [{ title: "Medicine Access", icon: Pill }]
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy",
    subtitle: "Physical Therapy",
    shortDescription: "Rehabilitation and physical therapy.",
    fullDescription: `<p>We help restore movement and function through physical therapy.</p>`,
    image: careImg,
    icon: Activity,
    benefits: [{ title: "Rehabilitation", icon: Activity }]
  },
  {
    id: "psychiatry",
    title: "Psychiatry",
    subtitle: "Mental Health",
    shortDescription: "Diagnosis and treatment of mental disorders.",
    fullDescription: `<p>We provide mental health care including therapy and medication.</p>`,
    image: familyMedImg,
    icon: Brain,
    benefits: [{ title: "Mental Wellness", icon: Heart }]
  },
  {
    id: "psychology",
    title: "Psychology",
    subtitle: "Mental Health Support",
    shortDescription: "Therapeutic mental health services.",
    fullDescription: `<p>We offer counseling and therapy for mental health issues.</p>`,
    image: familyMedImg,
    icon: Brain,
    benefits: [{ title: "Therapy", icon: Users }]
  },
  {
    id: "pulmonology",
    title: "Pulmonology",
    subtitle: "Lung Health",
    shortDescription: "Treatment of respiratory diseases.",
    fullDescription: `<p>We manage diseases of the respiratory system and lungs.</p>`,
    image: allergyImg,
    icon: Wind,
    benefits: [{ title: "Respiratory Care", icon: Stethoscope }]
  },
  {
    id: "radiology",
    title: "Radiology and Imaging",
    subtitle: "Medical Imaging",
    shortDescription: "X-rays, CT scans, and other imaging.",
    fullDescription: `<p>We use imaging technologies to diagnose and treat diseases.</p>`,
    image: imagingImg,
    icon: Scan,
    benefits: [{ title: "Imaging", icon: Eye }]
  },
  {
    id: "dialysis",
    title: "Renal/Dialysis",
    subtitle: "Kidney Support",
    shortDescription: "Treatment for kidney failure.",
    fullDescription: `<p>We provide dialysis services for patients with kidney failure.</p>`,
    image: genMedImg,
    icon: Activity,
    benefits: [{ title: "Dialysis", icon: CheckCircle }]
  },
  {
    id: "rheumatology",
    title: "Rheumatology",
    subtitle: "Joint & Autoimmune",
    shortDescription: "Treatment of arthritis and autoimmune diseases.",
    fullDescription: `<p>We treat rheumatic diseases affecting joints, muscles, and bones.</p>`,
    image: genMedImg,
    icon: Bone,
    benefits: [{ title: "Joint Care", icon: Activity }]
  },
  {
    id: "urgent-care",
    title: "Urgent Care",
    subtitle: "Immediate Care",
    shortDescription: "Treatment for non-life-threatening conditions.",
    fullDescription: `<p>We provide immediate care for urgent medical issues.</p>`,
    image: emergencyImg,
    icon: Clock,
    benefits: [{ title: "Quick Care", icon: CheckCircle }]
  },
  {
    id: "urology",
    title: "Urology and Andrology",
    subtitle: "Urinary Tract Health",
    shortDescription: "Treatment of urinary tract system disorders.",
    fullDescription: `<p>We treat conditions of the urinary tract and male reproductive system.</p>`,
    image: genMedImg,
    icon: Activity,
    benefits: [{ title: "Urology Care", icon: ShieldCheck }]
  }
];

export const specialties = specialtiesData;
