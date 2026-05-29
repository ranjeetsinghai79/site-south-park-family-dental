import type { SiteConfig } from "@core/web/types"

export const config: SiteConfig = {
  business: {
    name: "South Park Family Dental",
    tagline: "Your Smile, Our Priority",
    phone: "(210) 927-1400",
    phoneHref: "tel:+12109271400",
    email: "info@southparkfamilydental.com",
    address: "2310 SW Military Drive, Suite 406 San Antonio, TX 78224",
    city: "San Antonio",
    serviceAreas: ["San Antonio, TX", "South Park", "Springtime", "Westover Hills"],
    license: "Licensed & Insured",
    since: "2005",
    google_rating: "4.9",
    review_count: "200",
    emergency: true,
    theme: "ember",
    niche: "dentist",
  },

  services: [
    { icon: "shield-check", title: "Emergency Dental Care", desc: "Immediate relief for unexpected dental pain or injury." },
    { icon: "star", title: "General Dentistry", desc: "Comprehensive care for your everyday oral health needs." },
    { icon: "sparkles", title: "Cosmetic Dentistry", desc: "Enhance your smile with our aesthetic dental solutions." },
    { icon: "heart", title: "Family Dentistry", desc: "Gentle dental care for every member of your family." },
    { icon: "scissors", title: "Pediatric Dentistry", desc: "Specialized, friendly dental care for children of all ages." },
    { icon: "thermometer", title: "Dental Implants", desc: "Permanent solutions for missing teeth, restoring your smile." }
  ],

  testimonials: [
    { name: "Shawna E", location: "San Antonio, TX", stars: 5, text: "My children LOVED it here and they, honestly, can’t wait to go back to the dentist! The staff is incredibly kind and very accommodating. I really appreciate the calm and laid-back atmosphere at SA Family Dental. Even my 4-year-old felt right at home! Thank you for the amazing service!!" },
    { name: "Joann T", location: "San Antonio, TX", stars: 5, text: "I LOVE MY DENTIST! I never thought I’d ever say that! After years of getting treated badly and always being in pain after seeing the dentist, I finally found someone who truly cared. Dr. Shiva Izaddous did an awesome job! I got an appointment easily, the front office staff knew exactly what to do and got me back fast. The staff even entertained my kids while I was being seen. Marsha did my cleaning and was super gentle. She talked to me throughout the whole thing to let me know what to expect. I needed a root canal and didn’t need anything stronger than Advil afterwards! I took my kids back for cavities and it was taken care of with ease! WOULD RECOMMEND TO ANYONE!" },
    { name: "Victoria L", location: "San Antonio, TX", stars: 5, text: "The people are very professional and kind and also very quick, caring and they get the job done! They even stayed open longer when they were supposed to close just to see my boyfriend even when he was just a walk in. They even work with you for payment plans. Everyone was so kind and friendly and helpful towards us on both of our visits. Love love love this place and highly recommend it!" }
  ],

  trustBadges: [
    "Patients Treated Like Family", "Affordable Payment Plans", "State-of-the-Art Locations", "Dental Experts On Staff", "Calm & Laid-Back Atmosphere", "Walk-Ins & Extended Hours"
  ],

  stats: [
    { value: 4.9, label: "Google Rating", suffix: "★", decimals: 1 },
    { value: 1000, label: "Happy Smiles", suffix: "+", decimals: 0 },
    { value: 15, label: "Yrs Experience", suffix: "+", decimals: 0 }
  ],

  reasons: [
    { icon: "clock", title: "Fast Appointments", desc: "We offer quick scheduling to address your dental needs promptly." },
    { icon: "dollar-sign", title: "Affordable Pricing", desc: "Quality dental care with transparent and budget-friendly options." },
    { icon: "award", title: "Certified Experts", desc: "Our team consists of highly trained and certified dental professionals." },
    { icon: "thumbs-up", title: "Satisfaction Guarantee", desc: "Your comfort and satisfaction are our top priorities." },
    { icon: "phone", title: "Friendly Staff", desc: "Our accommodating team ensures a pleasant visit every time." },
    { icon: "home", title: "Family Atmosphere", desc: "Experience a warm and welcoming environment for all ages." }
  ],

  formServiceOptions: ["Emergency Dental Care", "General Dentistry", "Cosmetic Dentistry", "Family Dentistry", "Pediatric Dentistry", "Sedation Dentistry", "Dental Implants", "Check Ups", "Tooth Extraction", "Fillings", "Root Canal", "Dental Crowns", "Invisalign", "Sleep Apnea Treatment", "Teeth Whitening", "Dental Bridges", "Oral Surgery", "Veneers"]
}

// Backward-compat re-exports
export const BUSINESS = config.business
export const SERVICES = config.services!
export const TESTIMONIALS = config.testimonials!
export const TRUST_BADGES = config.trustBadges!