export interface Resource extends ResourceData {
  id: string;
}

export interface ResourceData {
  // required fields
  name: string;
  phone: string;
  physicalAddress: Address;
  // will need to add serviceArea
  category: ServiceType;
  lastEdited: string;
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
  office_hours: string;
  application: string;
  community_partner: boolean;
  relationship_notes: string;
  eligibility_notes: string;
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
export enum ServiceType {
  type1 = 'type1',
  type2 = 'type2',
  type3 = 'type3'
};
