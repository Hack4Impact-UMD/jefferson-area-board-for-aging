import { FieldValue } from "firebase/firestore";

export interface Resource extends ResourceData {
  id: string;
}

export interface ResourceData {
  // required fields
  name: string;
  phone: string;
  physicalAddress: Address;
  // will need to add serviceArea
  primaryCategory: string;
  subCategory: string;
  lastEdited: FieldValue;
  lastEditorName: string;

  // optional fields
  forProfit: boolean;
  website: string;
  email: string;
  tollFreePhone: string;
  phoneTtyTdd: string;
  mailingAddress: Address;
  edCeo: EdCeo
  mainContact: Contact;
  secondContact: Contact;
  notes: string;
  officeHours: string;
  application: string;
  communityPartner: boolean;
  relationshipNotes: string;
  eligibilityNotes: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface EdCeo {
  name: string;
  phone: string;
  email: string;
}

export interface Contact {
  name: string;
  phone: string;
  email: string;
  department: string;
}

// maybe list out all service type categories...
// export enum PrimaryCategory {
//   alzheimersAndDementia,
//   abuse,
//   areaAgenciesOnAging,
//   associations,
//   caregiverServices,
//   careManagement,
//   childCare,
//   childWelfare,
//   communityServiceOrganizations,
//   disabilityServices,
//   emergencyServices,
//   employment,
//   employmentAssistance,
//   endOfLife,
//   familyServices,
//   financialAssistance,
//   fraud,
//   housing,
//   inHomeCareSupplies,
//   insuranceCounselingQuestions,
//   internetBroadband,
//   legalServices,
//   longTermCare,
//   medicalCareNeeds,
//   mentalHealth,
//   multilingualServices,
//   nutrition,
//   socialServices,
//   socializationRecreation,
//   socialSecurity,
//   supportGroups,
//   taxes,
//   transportation,
//   tribalServices,
//   veterans,
//   volunteerOpportunities
// };
