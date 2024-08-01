export interface Resource extends ResourceData {
  id: string;
}

export interface ResourceData {
  name: string;
  description: string;
  npo: boolean;
  mainPhone: string;
  impairedPhone: string;
  email: string;
  physicalAddress: Address;
  mailingAddress: Address;
  nationalResource: boolean;
  zips: string[];
  planningDistricts: PlanningDistricts[];
  states: { [state: string]: string[] };
  primaryCategory: string;
  subCategory: string;
  edCeo: Contact;
  officeHours: string;
  communityPartner: boolean;
  relationshipNotes: string;
  mainContact: Contact;
  secondContact: Contact;
  applicationNotes: string;
  eligibilityNotes: string;
  otherNotes: string;
  lastEditTime: Date;
  lastEditUser: string;
  creationDate: Date;
  website: string;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

export interface Contact {
  name: string;
  phone: string;
  email: string;
  department: string;
}

export enum PlanningDistricts {
  "Planning District 1",
  "Planning District 2",
  "Planning District 3",
  "Planning District 4",
  "Planning District 5",
  "Planning District 6",
  "Planning District 7",
  "Planning District 8A",
  "Planning District 8B",
  "Planning District 8C",
  "Planning District 8D",
  "Planning District 8E",
  "Planning District 9",
  "Planning District 10",
  "Planning District 11",
  "Planning District 12",
  "Planning District 13",
  "Planning District 14",
  "Planning District 15",
  "Planning District 16",
  "Planning District 17",
  "Planning District 18",
  "Planning District 19",
  "Planning District 20",
  "Planning District 21",
  "Planning District 22",
}

export interface ResourceSearchParam {
  inputField: string;
  primaryCategory: string;
  secondaryCategory: string;
  includeNationalServices: string;
  zipCode: string;
  state: string;
  county: string;
  planningDistrict: string;
}
