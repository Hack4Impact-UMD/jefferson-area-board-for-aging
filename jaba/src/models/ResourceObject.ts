export interface Resource extends ResourceData {
  id: string;
}

export interface ResourceData {
  name: string;
  phone: string;
  city: string;
  state: string;
  zip: number;
  category: ServiceType;
  last_edited: string;
  last_editor_name: string;
  for_profit: boolean;
  website: string;
  email: string;
  toll_free_phone: string;
  phone_tty_tdd: string;
  address_pt1: string;
  address_pt2: string;
  mailing_address: string;
  ed_ceo_name: string;
  ed_ceo_phone: string;
  ed_ceo_email: string;
  main_contact_name: string;
  main_contact_phone: string;
  department: string;
  second_contact_name: string;
  second_contact_phone: string;
  notes: string;
  office_hours: string;
  application: string;
  community_partner: boolean;
  relationship_notes: string;
  eligibility_notes: string;
}

// maybe list out all service type categories...
export enum ServiceType {
  type1 = 'type1',
  type2 = 'type2',
  type3 = 'type3'
};
