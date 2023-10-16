export interface Resource extends ResourceData {
  id: string;
}

export interface ResourceData {
  name: string;
  phone: string;
  Category: ServiceType;
  city: string;
  state: string;
  zip: number;
}

// maybe list out all service type categories...
export enum ServiceType {
  type1 = 'type1',
  type2 = 'type2',
  type3 = 'type3'
};
