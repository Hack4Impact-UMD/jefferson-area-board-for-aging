export interface Resource extends ResourceData {
  id: string;
}

export interface ResourceData {
  name: string;
  phone: string;
  Category: ServiceType;
}

// maybe list out all service type categories...
export enum ServiceType {
  type1 = 'type1',
  type2 = 'type2',
  type3 = 'type3'
};