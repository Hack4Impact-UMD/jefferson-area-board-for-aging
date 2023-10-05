export interface TestObject extends TestObjectData {
  id: string;
}

export interface TestObjectData {
  testField1: string;
  testField2: number;
  testField3: boolean;
  testField4: TestType;
}
  
export enum TestType {
  type1 = 'type1',
  type2 = 'type2',
  type3 = 'type3'
};