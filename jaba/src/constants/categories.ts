interface CategoriesType {
  [key: string]: string[];
}

const Categories: CategoriesType = {
  "Alzeheimers and Dementia": [],
  Abuse: ["Social Services", "Local Law Enforcement"],
  "Area Agencies on Aging": [],
  Associations: [],
  "Caregiver Services": ["Caregiver Support/General", "Support Group"],
  "Care Management": [
    "Care Manager/Private Pay",
    "Care Coordination/Local AAA",
  ],
  "Child Care": ["Pre-school/Child Day Care", "Social Services"],
  "Child Welfare": [],
  "Community Service Organizations": ["Mediation", " Social Groups"],
  "Disability Services": [
    "Assistive Technology Programs",
    "Deaf and Hard of Hearing",
    "Dept. Blind and Visually Impaired",
    "Employment Services",
    "General Disability Resources",
    "Independenence Resource Centers",
    "Independent Living Services",
    "Interpretive Service",
  ],
  "Emergency Services": [
    "Emergency response Systems",
    "Fire Departments",
    "Local Law Enforcement",
    "Rescue Squad",
  ],
  Employment: [],
  "Employment Assistance": [],
  "End of Life": ["Documents", "Elder Law Attorneys", "Funeral Arrangements"],
  "Family Services": [
    "Clothing Assistance",
    "Education Support",
    "Literacy",
    "Maternal/Child Health",
    "School Supplies",
    "Social Services",
  ],
  "Financial Assistance": [
    "Benefit Programs",
    "Budgeting Assistance",
    "Christmas Programs",
    "Clothing Assistance",
    "Cooling/Crisis Assistance",
    "Debt Relief",
    "Financial Counseling",
    "Financial Advisors",
    "Financial Counseling",
    "Food Stamps/SNAP",
    "Fuel Assistance",
    "Medication Assistance",
    "Rental/Mortgage Assistance",
    "Senior Cool Care",
    "Tax Relief",
    "Telephone/Low Income",
    "Utiliy Assistance",
  ],
  Fraud: ["Agencies", "Local Law Enforcement"],
  Housing: [
    "Apartment Complexes",
    "Assisted Living",
    "Emergency Shelters",
    "Home Modifications",
    "Homeless Services",
    "Local Foundations",
    "Low Income/Section 8 Housing",
    "Rehabilitation",
    "Rental/Mortgage Assistance",
    "Senior Living",
    "Skilled Nursing",
    "Weatherization",
  ],
  "In Home Care/Supplies": [
    "Adaptive/Medical Equipment",
    "Companion Programs",
    "Emergency Response Systems",
    "Home Care",
    "Home Health Care",
    "Incontinence Supplies",
  ],
  "Insurance Counseling/Questions": [
    "Affordable Care Act Counseling",
    "Medicare",
    "Social Services",
    "VICAP/SHIP",
  ],
  "Internet/Broadband": [
    "Broadband/Low Income Assistance Programs",
    "Device Assistance",
    "Internet Provider",
  ],
  "Legal Services": ["Advance Directives/Wills", "Elder Law Attourney"],
  "Long Term Care": [
    "Adult Day Care",
    "Assisted Living",
    "Community-Based Care Screenings",
    "Hospice Providers",
    "Memory Care",
    "Respite Care/Service",
    "Skilled Nursing",
  ],
  "Medical Care/Needs": [
    "Dental Care",
    "Diabetes Resources",
    "Diabetic Supplies",
    "Dialysis Centers",
    "Emergency Response Systems",
    "Evidence Based/Health Literacy",
    "Eye Care",
    "Free and Federal Health Clinics",
    "Hospice Provider",
    "Hospitals",
    "Incontinence Supplies",
    "Maternal/Child Health",
    "Medication Assistance",
    "Pharmacies",
    "Physician Offices",
    "Rescue Squad",
    "Substance Abuse",
    "Support Group",
    "VICAP/SHIP",
  ],
  "Mental Health": [
    "Low Income/Free Mental Health Service",
    "Mental Health Provider",
  ],
  "Multi-Lingual Services": [
    "Immigration Service",
    "Interpretive Service",
    "Language Lines/Translation Services",
  ],
  Nutrition: [
    "Farmers Market/Community Co-op",
    "Food Bank",
    "Food Stamps/SNAP/WIC",
    "Home Delivered Meals",
    "Nutrition Education",
    "Nutrition/Other Support",
  ],
  "Social Services": [],
  "Socialization/Recreation": [
    "Adult Day Care",
    "Community Center/Children",
    "Community Center/Family",
    "Community Center/Seniors",
    "Parks and Recreation",
    "Social Club",
  ],
  "Social Security": [],
  "Support Groups": [],
  Taxes: ["Tax Completion Assistance Program", "Tax Relief for Elderly"],
  Transportation: [
    "Local Transportation Provider",
    "Medicaid Transportation Providers",
    "Non-Medical Transportation",
    "On Demand Services",
    "Paratransit",
    "Ride Sharing Services",
  ],
  "Tribal Services": [],
  Veterans: ["Veterans Affairs", "Veteran Supports/General"],
  "Volunteer Opportunities": [],
  "Other": [],
};

export const getSubCategory = (category: any) => {
  if (category in Categories) {
    // @ts-ignore
    return Categories[category];
  }
  return [];
};

export default Categories;
