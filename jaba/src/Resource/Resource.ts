export interface Resource extends ResourceData {
    id: string;
  }
  
  export interface ResourceData {
    organizationName: string;
    phoneNumber: string;
    serviceType: ServiceType;
  }
    
  export enum ServiceType {
    type1 = 'type1',
    type2 = 'type2',
    type3 = 'type3'
  };