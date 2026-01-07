import { 
  Scissors, 
  Brain, 
  Eye, 
  Siren, 
  Baby, 
  Stethoscope, 
  Heart, 
  Ear, 
  Bone, 
  Pill, 
  Scan, 
  Activity, 
  Smile, 
  Users,
  User,
  TestTube,
  ShieldCheck,
  Award,
  Clock,
  Ambulance,
  Syringe,
  Microscope,
  Zap,
  Thermometer,
  CloudLightning,
  CheckCircle,
  Briefcase,
  Box,
  Clipboard
} from 'lucide-react';
import { LucideIcon } from 'lucide-react';
import * as HealthcareIcons from '@/components/HealthcareIcons';

export interface SpecialtyData {
  id: string;
  title: string;
  subtitle?: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  icon: LucideIcon | React.ElementType;
  benefits: {
    title: string;
    description?: string;
    icon: LucideIcon | React.ElementType;
  }[];
}

export const specialtiesData: SpecialtyData[] = [
  // --- Detailed Specialties (Original 7) ---
  {
    id: 'surgery',
    title: 'Surgery',
    subtitle: 'Advanced Surgical Care',
    shortDescription: 'Comprehensive surgical services delivered by experienced specialists using modern techniques.',
    fullDescription: `
      <p>At St. Elizabeth Hospital, our Surgery Department provides comprehensive and specialized surgical care designed to meet the highest standards of safety and efficacy.</p>
      <p>Our team of highly skilled surgeons performs a wide range of procedures, from minimally invasive laparoscopic surgeries to complex open procedures. We utilize state-of-the-art technology to ensure precision and faster recovery times for our patients.</p>
      <p>We are committed to patient-centered care, providing thorough pre-operative counseling and dedicated post-operative support to ensure the best possible outcomes.</p>
    `,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000&auto=format&fit=crop',
    icon: HealthcareIcons.SurgeryIcon,
    benefits: [
      {
        title: 'Minimally Invasive Techniques',
        description: 'Less pain and faster recovery.',
        icon: Scissors
      },
      {
        title: 'Expert Surgeons',
        description: 'Board-certified specialists.',
        icon: Users
      },
      {
        title: 'Modern Theaters',
        description: 'State-of-the-art surgical suites.',
        icon: Activity
      }
    ]
  },
  {
    id: 'haematology',
    title: 'Haematology',
    subtitle: 'Comprehensive Blood Care',
    shortDescription: 'Diagnosis and treatment of blood-related disorders.',
    fullDescription: `
      <p>The Haematology department plays a crucial role in diagnosing and treating a wide range of conditions related to the blood and its components. Haematologists are medical professionals who specialize in this field and are trained to diagnose and manage disorders such as sickle cell disease, anaemia, haemophilia, thrombosis, and blood cancers like leukaemia, lymphoma, and multiple myeloma.</p>
      <p>One of the primary diagnostic tools used by Haematologists is the complete blood count (CBC), which provides information about the number and types of cells in the blood, including red blood cells, white blood cells, and platelets. Other tests commonly performed include coagulation tests to assess blood clotting function, blood smears to examine cell morphology, and bone marrow biopsies to evaluate the production of blood cells.</p>
      <p>Treatment approaches in Haematology vary depending on the specific condition but may include medications, blood transfusions, chemotherapy, radiation therapy, and bone marrow transplantation. Haematologists work closely with other medical specialists, such as surgeons, and radiation oncologists, to provide comprehensive care to patients.</p>
      <p>Overall, the Haematology department is essential for the diagnosis, management, and research of blood-related disorders, playing a vital role in improving the health and well-being of patients with these conditions.</p>
    `,
    image: 'https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2000&auto=format&fit=crop',
    icon: TestTube,
    benefits: [
      { title: 'Covid safe Environment', icon: ShieldCheck },
      { title: 'Infectious disease free environment', icon: ShieldCheck },
      { title: 'Experienced Medical Doctors', icon: Users },
      { title: 'Safe and Faster recovery', icon: Clock },
      { title: 'World Class Infrastructure', icon: Activity },
      { title: 'Cashless Facility', icon: Award },
      { title: 'State-of-the Art- Medical Equipments', icon: Activity },
      { title: 'Honest & Affordable pricing', icon: Award }
    ]
  },
  {
    id: 'oncology',
    title: 'Oncology',
    subtitle: 'Cancer Care Center',
    shortDescription: 'Advanced cancer care focused on early diagnosis and innovative treatment.',
    fullDescription: `
      <p>St. Elizabeth’s Oncology is a full-fledged oncology care centre, committed to providing world-class cancer treatment. We offer a holistic approach that includes screening, early diagnosis, and personalized treatment plans.</p>
      <p>Our multidisciplinary team of oncologists, radiologists, and support staff work together to deliver chemotherapy, immunotherapy, and palliative care with compassion and expertise.</p>
    `,
    image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2000&auto=format&fit=crop',
    icon: HealthcareIcons.OncologyIcon,
    benefits: [
      { title: 'Advanced Chemotherapy', icon: Pill },
      { title: 'Palliative Care support', icon: Heart },
      { title: 'Cancer Screening', icon: Scan }
    ]
  },
  {
    id: 'ophthalmology',
    title: 'Ophthalmology',
    subtitle: 'Advanced Eye Care',
    shortDescription: 'Specialized eye care services utilizing modern diagnostic technologies.',
    fullDescription: `
      <p>Ophthalmology has undergone several advancements in diagnosis and treatment of eye disorders. Our department is equipped with cutting-edge technology to treat cataracts, glaucoma, retinal diseases, and refractive errors.</p>
      <p>We provide comprehensive eye exams and advanced surgical interventions to restore and preserve vision for patients of all ages.</p>
    `,
    image: 'https://images.unsplash.com/photo-1579684385180-1ea55f9f498d?q=80&w=2000&auto=format&fit=crop',
    icon: HealthcareIcons.OphthalmologyIcon,
    benefits: [
      { title: 'Laser Eye Surgery', icon: Eye },
      { title: 'Glaucoma Management', icon: Activity },
      { title: 'Pediatric Ophthalmology', icon: Baby }
    ]
  },
  {
    id: 'critical-care',
    title: 'Critical Care & ICU',
    subtitle: 'Intensive Life Support',
    shortDescription: 'High-dependency services for complex life-threatening conditions.',
    fullDescription: `
      <p>St. Elizabeth has invested heavily in developing the region's most competent critical care areas. Our Intensive Care Unit (ICU) is staffed by intensivists and critical care nurses available 24/7 to monitor and treat severely ill patients.</p>
      <p>We feature advanced monitoring systems, ventilators, and organ support technologies to provide the highest level of care when it matters most.</p>
    `,
    image: 'https://images.unsplash.com/photo-1516574187841-693083f69802?q=80&w=2000&auto=format&fit=crop',
    icon: HealthcareIcons.CriticalCareIcon,
    benefits: [
      { title: '24/7 Intensivist Cover', icon: Clock },
      { title: 'Advanced Ventilators', icon: Activity },
      { title: '1:1 Nursing Ratio', icon: Users }
    ]
  },
  {
    id: 'emergency',
    title: 'Accident & Emergency',
    subtitle: '24/7 Emergency Services',
    shortDescription: 'Rapid response trauma care and lifesaving interventions.',
    fullDescription: `
      <p>Our Accident & Emergency (A&E) Department is a critical component of St. Elizabeth Hospital, operating 24 hours a day, 365 days a year. We are prepared to handle medical emergencies, trauma cases, and acute illnesses with speed and precision.</p>
      <p>Our triage system ensures that critical patients receive immediate attention, and our ambulance services provide rapid transport for pre-hospital care.</p>
    `,
    image: 'https://images.unsplash.com/photo-1587351021759-3e566b9af922?q=80&w=2000&auto=format&fit=crop',
    icon: HealthcareIcons.AccidentEmergencyIcon,
    benefits: [
      { title: 'Trauma Center', icon: Siren },
      { title: 'Ambulance Service', icon: Ambulance },
      { title: 'Rapid Triage', icon: Activity }
    ]
  },
  {
    id: 'maternity',
    title: 'Maternity',
    subtitle: 'Mother & Child Care',
    shortDescription: 'Comprehensive maternal and newborn care.',
    fullDescription: `
      <p>We offer a comprehensive range of maternity services, including antenatal classes to prepare expectant mothers, delivery options ranging from natural birth to caesarean sections, and postnatal support.</p>
      <p>Our maternity wing is designed to provide a comfortable and safe environment for both mother and baby, with neonatal intensive care (NICU) backup if needed.</p>
    `,
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2000&auto=format&fit=crop',
    icon: HealthcareIcons.MaternityIcon,
    benefits: [
      { title: 'Antenatal Classes', icon: Users },
      { title: 'NICU Backup', icon: Baby },
      { title: 'Luxury Delivery Suites', icon: Heart }
    ]
  },

  // --- Restored Specialties (Standardized Layout) ---
  {
    id: 'aesthetic',
    title: 'Aesthetic',
    subtitle: 'Cosmetic & Aesthetic Services',
    shortDescription: 'Enhancing beauty and confidence through advanced aesthetic procedures.',
    fullDescription: `<p>We offer a range of aesthetic treatments designed to enhance your natural beauty and boost your confidence. Our specialists use the latest techniques to ensure safe and effective results.</p>`,
    image: 'https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=2000',
    icon: Smile,
    benefits: [{ title: 'Expert Consultants', icon: Users }, { title: 'Modern Technology', icon: Zap }]
  },
  {
    id: 'allergy-immunology',
    title: 'Allergy and Immunology',
    subtitle: 'Allergy Care',
    shortDescription: 'Diagnosis and treatment of allergic conditions and immune system disorders.',
    fullDescription: `<p>Our Allergy and Immunology department specializes in diagnosing and treating various allergic reactions and immune system deficiencies to improve your quality of life.</p>`,
    image: 'https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&w=2000',
    icon: ShieldCheck,
    benefits: [{ title: 'Comprehensive Testing', icon: TestTube }, { title: 'Personalized Plans', icon: Activity }]
  },
  {
    id: 'anaesthesiology',
    title: 'Anaesthesiology',
    subtitle: 'Pain Management & Anesthesia',
    shortDescription: 'Safe anesthesia administration and pain management for surgical procedures.',
    fullDescription: `<p>Our Anaesthesiology team ensures patient safety and comfort during surgical procedures through expert administration of anesthesia and comprehensive pain management.</p>`,
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2000',
    icon: Syringe,
    benefits: [{ title: 'Safety First', icon: ShieldCheck }, { title: 'Pain Relief', icon: Pill }]
  },
  {
    id: 'ambulance',
    title: 'Ambulance',
    subtitle: 'Emergency Transport',
    shortDescription: 'Rapid emergency medical transport services available 24/7.',
    fullDescription: `<p>We provide 24/7 ambulance services equipped with life-saving technology and staffed by trained paramedics to transport patients safely and quickly.</p>`,
    image: 'https://images.unsplash.com/photo-1625123627242-97ef1000c6d1?q=80&w=2000',
    icon: Ambulance,
    benefits: [{ title: '24/7 Availability', icon: Clock }, { title: 'Advanced Life Support', icon: Activity }]
  },
  {
    id: 'audiology',
    title: 'Audiology',
    subtitle: 'Hearing Care',
    shortDescription: 'Comprehensive hearing assessments and treatment for auditory disorders.',
    fullDescription: `<p>Our Audiology department offers advanced hearing tests, balance assessments, and hearing aid fittings to help you connect better with the world around you.</p>`,
    image: 'https://images.unsplash.com/photo-1599426866236-4076ea2468d6?q=80&w=2000',
    icon: Ear,
    benefits: [{ title: 'Hearing Screening', icon: Activity }, { title: 'Hearing Aids', icon: CheckCircle }]
  },
  {
    id: 'bariatric-surgery',
    title: 'Bariatric Surgery',
    subtitle: 'Weight Loss Surgery',
    shortDescription: 'Surgical solutions for long-term weight management and metabolic health.',
    fullDescription: `<p>We provide comprehensive metabolic and bariatric surgery options for patients seeking sustainable weight loss and improved overall health.</p>`,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2000',
    icon: Scissors,
    benefits: [{ title: 'Metabolic Health', icon: Activity }, { title: 'Long-term Support', icon: Users }]
  },
  {
    id: 'cardiac-sciences',
    title: 'Cardiac Sciences',
    subtitle: 'Heart Care',
    shortDescription: 'Advanced diagnosis and treatment for heart and vascular conditions.',
    fullDescription: `<p>Our Cardiac Sciences center offers state-of-the-art diagnostic and therapeutic services for a wide spectrum of heart conditions, ensuring optimal heart health.</p>`,
    image: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?q=80&w=2000',
    icon: Heart,
    benefits: [{ title: 'ECG & Echo', icon: Activity }, { title: 'Interventional Cardiology', icon: Zap }]
  },
  {
    id: 'child-development',
    title: 'Child Development Department',
    subtitle: 'Pediatric Development',
    shortDescription: 'Supporting the growth and developmental needs of children.',
    fullDescription: `<p>We specialize in assessing and supporting children with developmental delays, ensuring they reach their full potential through personalized therapy and care.</p>`,
    image: 'https://images.unsplash.com/photo-1602052577122-f73b9710f972?q=80&w=2000',
    icon: Baby,
    benefits: [{ title: 'Early Intervention', icon: Clock }, { title: 'Family Support', icon: Users }]
  },
  {
    id: 'dentistry',
    title: 'Dentistry',
    subtitle: 'Dental Care',
    shortDescription: 'Complete oral healthcare services for the whole family.',
    fullDescription: `<p>From routine check-ups to complex dental surgeries, our Dentistry team is dedicated to preserving your oral health and creating beautiful smiles.</p>`,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2000',
    icon: Smile,
    benefits: [{ title: 'Cosmetic Dentistry', icon: Smile }, { title: 'Oral Surgery', icon: Scissors }]
  },
  {
    id: 'dermatology',
    title: 'Dermatology',
    subtitle: 'Skin Care',
    shortDescription: 'Treatment for skin, hair, and nail conditions.',
    fullDescription: `<p>Our Dermatologists provide expert care for a variety of skin conditions, ranging from medical dermatology to cosmetic procedures.</p>`,
    image: 'https://images.unsplash.com/photo-1616391182219-e080b4d1043a?q=80&w=2000',
    icon: User,
    benefits: [{ title: 'Skin Cancer Screening', icon: Scan }, { title: 'Acne Treatment', icon: Zap }]
  },
  {
    id: 'dietetics-nutrition',
    title: 'Dietetics and Nutrition',
    subtitle: 'Nutritional Health',
    shortDescription: 'Personalized dietary planning and nutritional counseling.',
    fullDescription: `<p>We offer evidence-based nutrition advice and personalized meal planning to manage health conditions and promote overall wellness.</p>`,
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2000',
    icon: Activity,
    benefits: [{ title: 'Weight Management', icon: Activity }, { title: 'Clinical Nutrition', icon: Stethoscope }]
  },
  {
    id: 'endocrinology',
    title: 'Endocrinology, Diabetology',
    subtitle: 'Hormonal Health',
    shortDescription: 'Management of diabetes and other hormonal disorders.',
    fullDescription: `<p>Our specialists manage complex hormonal disorders, with a strong focus on diabetes care, thyroid disorders, and metabolic health.</p>`,
    image: 'https://images.unsplash.com/photo-1579684453423-f84349ca60df?q=80&w=2000',
    icon: Activity,
    benefits: [{ title: 'Diabetes Care', icon: Activity }, { title: 'Hormone Therapy', icon: Pill }]
  },
  {
    id: 'ent',
    title: 'ENT, Head and Neck Surgery',
    subtitle: 'Ear, Nose & Throat',
    shortDescription: 'Treatment for conditions affecting the ear, nose, and throat.',
    fullDescription: `<p>We provide comprehensive medical and surgical care for patients with diseases and disorders of the ear, nose, throat, and related structures of the head and neck.</p>`,
    image: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=2000',
    icon: Ear,
    benefits: [{ title: 'Hearing Restoration', icon: Ear }, { title: 'Sinus Surgery', icon: Scissors }]
  },
  {
    id: 'family-medicine',
    title: 'Family Medicine',
    subtitle: 'Primary Care',
    shortDescription: 'Comprehensive healthcare for individuals and families.',
    fullDescription: `<p>Our Family Medicine practitioners provide continuous and comprehensive health care for the individual and family across all ages, genders, and diseases.</p>`,
    image: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2000',
    icon: Users,
    benefits: [{ title: 'Preventive Care', icon: ShieldCheck }, { title: 'Routine Checkups', icon: Stethoscope }]
  },
  {
    id: 'foetal-medicine',
    title: 'Foetal Medicine',
    subtitle: 'Unborn Baby Care',
    shortDescription: 'Diagnosis and treatment of complications in unborn babies.',
    fullDescription: `<p>We monitor the health of the unborn baby and provide care for high-risk pregnancies, ensuring the best outcomes for mother and child.</p>`,
    image: 'https://images.unsplash.com/photo-1633934542330-941d4022c4f8?q=80&w=2000',
    icon: Baby,
    benefits: [{ title: 'Advanced Ultrasound', icon: Scan }, { title: 'Genetic Counseling', icon: Activity }]
  },
  {
    id: 'gastroenterology',
    title: 'Gastroenterology',
    subtitle: 'Digestive Health',
    shortDescription: 'Care for the digestive system and liver disorders.',
    fullDescription: `<p>Our Gastroenterology department diagnoses and treats conditions of the digestive tract, liver, and pancreas using advanced endoscopic techniques.</p>`,
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2000',
    icon: Activity,
    benefits: [{ title: 'Endoscopy', icon: Scan }, { title: 'Liver Care', icon: Activity }]
  },
  {
    id: 'gastrointestinal-surgery',
    title: 'Gastrointestinal Surgery',
    subtitle: 'Digestive Surgery',
    shortDescription: 'Surgical treatment for digestive system conditions.',
    fullDescription: `<p>Specialized surgical interventions for the treatment of benign and malignant conditions of the gastrointestinal tract.</p>`,
    image: 'https://images.unsplash.com/photo-1516574187841-693083f69802?q=80&w=2000',
    icon: Scissors,
    benefits: [{ title: 'Minimally Invasive', icon: Scissors }, { title: 'Cancer Surgery', icon: ShieldCheck }]
  },
  {
    id: 'general-laparoscopic-surgery',
    title: 'General and Laparoscopic Surgery',
    subtitle: 'General Surgery',
    shortDescription: 'Routine and complex surgical procedures.',
    fullDescription: `<p>We perform a wide range of general surgeries with a focus on laparoscopic techniques to minimize pain and speed up recovery.</p>`,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000',
    icon: Scissors,
    benefits: [{ title: 'Fast Recovery', icon: Clock }, { title: 'Small Incisions', icon: Activity }]
  },
  {
    id: 'general-medicine',
    title: 'General Medicine',
    subtitle: 'Adult Health',
    shortDescription: 'Diagnosis and non-surgical treatment of adult diseases.',
    fullDescription: `<p>Our General Medicine department handles the diagnosis and treatment of a broad spectrum of acute and chronic adult illnesses.</p>`,
    image: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=2000',
    icon: Stethoscope,
    benefits: [{ title: 'Chronic Disease Mgmt', icon: Activity }, { title: 'Health Screening', icon: Scan }]
  },
  {
    id: 'imaging',
    title: 'Imaging',
    subtitle: 'Radiology Services',
    shortDescription: 'Advanced diagnostic imaging services.',
    fullDescription: `<p>We provide high-quality diagnostic imaging services including X-rays, MRI, CT scans, and ultrasound to aid in accurate diagnosis.</p>`,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0833860?q=80&w=2000',
    icon: Scan,
    benefits: [{ title: 'MRI & CT', icon: Scan }, { title: 'Digital X-Ray', icon: Zap }]
  },
  {
    id: 'internal-medicine',
    title: 'Internal Medicine',
    subtitle: 'Complex Case Management',
    shortDescription: 'Specialized care for complex adult health conditions.',
    fullDescription: `<p>Internal Medicine specialists focus on the prevention, diagnosis, and treatment of internal diseases, managing patients with multi-system diseases.</p>`,
    image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=2000',
    icon: Stethoscope,
    benefits: [{ title: 'Diagnostic Accuracy', icon: Activity }, { title: 'Holistic Care', icon: Heart }]
  },
  {
    id: 'lactation-services',
    title: 'Lactation Services',
    subtitle: 'Breastfeeding Support',
    shortDescription: 'Guidance and support for breastfeeding mothers.',
    fullDescription: `<p>Our lactation consultants provide education and support to help mothers successfully breastfeed their infants.</p>`,
    image: 'https://images.unsplash.com/photo-1555252333-9f8e92e65df4?q=80&w=2000',
    icon: Baby,
    benefits: [{ title: 'Expert Consultants', icon: Users }, { title: 'Feeding Plans', icon: Activity }]
  },
  {
    id: 'midwifery-services',
    title: 'Midwifery Services',
    subtitle: 'Pregnancy & Birth',
    shortDescription: 'Nurse-led care for pregnancy and childbirth.',
    fullDescription: `<p>Our midwives provide personalized care during pregnancy, labor, and the postpartum period, focusing on natural and safe childbirth.</p>`,
    image: 'https://images.unsplash.com/photo-1531983412531-1f49a365ffed?q=80&w=2000',
    icon: Users,
    benefits: [{ title: 'Natural Birth', icon: Heart }, { title: 'Postnatal Care', icon: Baby }]
  },
  {
    id: 'neonatology',
    title: 'Neonatology',
    subtitle: 'Newborn Care',
    shortDescription: 'Specialized care for ill or premature newborn infants.',
    fullDescription: `<p>We provide intensive care for premature babies or newborns with serious illness in our state-of-the-art Neonatal unit.</p>`,
    image: 'https://images.unsplash.com/photo-1519781542704-957ff19aa471?q=80&w=2000',
    icon: Baby,
    benefits: [{ title: 'Specialized Incubators', icon: Box }, { title: '24/7 Monitoring', icon: Activity }]
  },
  {
    id: 'nephrology',
    title: 'Nephrology',
    subtitle: 'Kidney Care',
    shortDescription: 'Diagnosis and treatment of kidney diseases.',
    fullDescription: `<p>Our Nephrology department offers comprehensive care for kidney-related conditions, including hypertension and electrolyte disorders.</p>`,
    image: 'https://images.unsplash.com/photo-1579684385180-1ea55f9f498d?q=80&w=2000',
    icon: Activity,
    benefits: [{ title: 'Hypertension Mgmt', icon: Activity }, { title: 'Kidney Health', icon: CheckCircle }]
  },
  {
    id: 'nicu',
    title: 'NICU',
    subtitle: 'Neonatal Intensive Care',
    shortDescription: 'Intensive care unit specializing in the care of ill or premature newborn infants.',
    fullDescription: `<p>The NICU uses advanced technology and a specialized team to care for newborns who need intensive medical attention.</p>`,
    image: 'https://images.unsplash.com/photo-1519781542704-957ff19aa471?q=80&w=2000',
    icon: Baby,
    benefits: [{ title: 'Advanced Life Support', icon: Activity }, { title: 'Developmental Care', icon: Heart }]
  },
  {
    id: 'obstetrics-gynaecology',
    title: 'Obstetrics & Gynaecology',
    subtitle: 'Women\'s Health',
    shortDescription: 'Care for women during pregnancy and childbirth, and diagnosis of female reproductive diseases.',
    fullDescription: `<p>We provide comprehensive health services for women, covering everything from reproductive health to pregnancy and menopause.</p>`,
    image: 'https://images.unsplash.com/photo-1516575334481-f85287e5c6a8?q=80&w=2000',
    icon: Users,
    benefits: [{ title: 'Prenatal Care', icon: Baby }, { title: 'Reproductive Health', icon: Heart }]
  },
  {
    id: 'occupational-medicine',
    title: 'Occupational Medicine',
    subtitle: 'Workplace Health',
    shortDescription: 'Prevention and management of workplace injuries and illnesses.',
    fullDescription: `<p>We focus on the health and safety of employees, offering services like pre-employment medicals and injury management.</p>`,
    image: 'https://images.unsplash.com/photo-1576091160550-21733e99dbb9?q=80&w=2000',
    icon: Briefcase, 
    benefits: [{ title: 'Workplace Safety', icon: ShieldCheck }, { title: 'Medical Assessments', icon: Clipboard }]
  },
  {
    id: 'oral-maxillofacial',
    title: 'Oral and Maxillofacial Surgery',
    subtitle: 'Facial Surgery',
    shortDescription: 'Surgery for diseases affecting the mouth, jaws, face, and neck.',
    fullDescription: `<p>Our specialists perform surgery to treat injuries, diseases, and defects in the head, neck, face, jaws, and oral tissues.</p>`,
    image: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?q=80&w=2000',
    icon: Smile,
    benefits: [{ title: 'Reconstructive Surgery', icon: Scissors }, { title: 'Dental Implants', icon: Smile }]
  },
  {
    id: 'orthopaedics',
    title: 'Orthopaedics',
    subtitle: 'Bone & Joint Care',
    shortDescription: 'Treatment of musculoskeletal conditions.',
    fullDescription: `<p>We provide diagnosis and treatment for disorders of the bones, joints, ligaments, tendons, and muscles.</p>`,
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=2000',
    icon: Bone,
    benefits: [{ title: 'Joint Replacement', icon: Activity }, { title: 'Sports Medicine', icon: Activity }]
  },
  {
    id: 'picu',
    title: 'P.I.C.U',
    subtitle: 'Pediatric Intensive Care',
    shortDescription: 'Intensive care for critically ill infants, children, and teenagers.',
    fullDescription: `<p>The PICU provides the highest level of medical care for sick children, staffed by pediatric intensivists and specialized nurses.</p>`,
    image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=2000',
    icon: Baby,
    benefits: [{ title: '24/7 Monitoring', icon: Clock }, { title: 'Pediatric Specialists', icon: Users }]
  },
  {
    id: 'paediatrics',
    title: 'Paediatrics',
    subtitle: 'Child Health',
    shortDescription: 'Medical care for infants, children, and adolescents.',
    fullDescription: `<p>Our Paediatric department offers comprehensive healthcare for children from birth through adolescence, creating a friendly environment for kids.</p>`,
    image: 'https://images.unsplash.com/photo-1602052577122-f73b9710f972?q=80&w=2000',
    icon: Baby,
    benefits: [{ title: 'Child-Friendly', icon: Smile }, { title: 'Vaccinations', icon: Syringe }]
  },
  {
    id: 'pathology',
    title: 'Pathology & Lab Medicine',
    subtitle: 'Laboratory Services',
    shortDescription: 'Diagnostic testing of patient samples.',
    fullDescription: `<p>Our certified laboratories provide accurate and timely diagnostic testing services to support all clinical departments.</p>`,
    image: 'https://images.unsplash.com/photo-1579165466741-7f35a4755657?q=80&w=2000',
    icon: Microscope,
    benefits: [{ title: 'Accurate Results', icon: CheckCircle }, { title: 'Fast Turnaround', icon: Clock }]
  },
  {
    id: 'pharmacy',
    title: 'Pharmacy',
    subtitle: 'Medication Services',
    shortDescription: 'Dispensing of medications and pharmaceutical care.',
    fullDescription: `<p>Our pharmacy ensures the safe and effective use of medications, providing patients with counseling and high-quality pharmaceutical products.</p>`,
    image: 'https://images.unsplash.com/photo-1585435557343-3b092031a831?q=80&w=2000',
    icon: Pill,
    benefits: [{ title: 'Medication Counseling', icon: Users }, { title: 'Wide Availability', icon: CheckCircle }]
  },
  {
    id: 'physiotherapy',
    title: 'Physiotherapy',
    subtitle: 'Rehabilitation',
    shortDescription: 'Restoring movement and function through therapy.',
    fullDescription: `<p>We help patients recover function and mobility after injury or surgery through personalized physical therapy programs.</p>`,
    image: 'https://images.unsplash.com/photo-1574680376330-ab54aaa3a901?q=80&w=2000',
    icon: Activity,
    benefits: [{ title: 'Rehabilitation', icon: Activity }, { title: 'Pain Management', icon: Pill }]
  },
  {
    id: 'psychiatry',
    title: 'Psychiatry',
    subtitle: 'Mental Health',
    shortDescription: 'Diagnosis and treatment of mental health disorders.',
    fullDescription: `<p>Our Psychiatrists provide compassionate care for mental health conditions, offering medication management and psychotherapy.</p>`,
    image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=2000',
    icon: Brain,
    benefits: [{ title: 'Evaluation', icon: Clipboard }, { title: 'Counseling', icon: Users }]
  },
  {
    id: 'psychology',
    title: 'Psychology',
    subtitle: 'Behavioral Health',
    shortDescription: 'Counseling and therapy services.',
    fullDescription: `<p>We offer psychological assessment and therapy to help individuals cope with life issues and mental health challenges.</p>`,
    image: 'https://images.unsplash.com/photo-1527137342181-19aab11a8ee8?q=80&w=2000',
    icon: Brain,
    benefits: [{ title: 'Therapy Sessions', icon: Users }, { title: 'Mental Wellness', icon: Heart }]
  },
  {
    id: 'pulmonology',
    title: 'Pulmonology',
    subtitle: 'Lung Health',
    shortDescription: 'Treatment of respiratory system diseases.',
    fullDescription: `<p>Our Pulmonologists specialize in diagnosing and treating diseases of the lungs and respiratory tract, including asthma and COPD.</p>`,
    image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=2000',
    icon: Activity,
    benefits: [{ title: 'Lung Function Tests', icon: Activity }, { title: 'Respiratory Care', icon: Stethoscope }]
  },
  {
    id: 'radiology',
    title: 'Radiology and Imaging',
    subtitle: 'Diagnostic Imaging',
    shortDescription: 'Medical imaging for diagnosis and treatment.',
    fullDescription: `<p>We use advanced imaging technologies like CT and MRI to visualize the inside of the body for accurate diagnosis.</p>`,
    image: 'https://images.unsplash.com/photo-1516549655169-df83a0833860?q=80&w=2000',
    icon: Scan,
    benefits: [{ title: 'High Tech Imaging', icon: Zap }, { title: 'Expert Radiologists', icon: Users }]
  },
  {
    id: 'renal-dialysis',
    title: 'Renal/Dialysis',
    subtitle: 'Kidney Support',
    shortDescription: 'Life-saving dialysis treatments for kidney failure.',
    fullDescription: `<p>We provide chronic and acute dialysis services for patients with kidney failure, utilizing modern equipment for safe treatment.</p>`,
    image: 'https://images.unsplash.com/photo-1579684385180-1ea55f9f498d?q=80&w=2000',
    icon: Activity,
    benefits: [{ title: 'Hemodialysis', icon: Activity }, { title: 'Patient Comfort', icon: Heart }]
  },
  {
    id: 'rheumatology',
    title: 'Rheumatology',
    subtitle: 'Arthritis & Immune Care',
    shortDescription: 'Treatment of autoimmune diseases and arthritis.',
    fullDescription: `<p>Our Rheumatologists manage autoimmune conditions and musculoskeletal diseases affecting joints, muscles, and bones.</p>`,
    image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000',
    icon: Activity,
    benefits: [{ title: 'Joint Care', icon: Activity }, { title: 'Immune Support', icon: ShieldCheck }]
  }
];

export const specialties = specialtiesData;
