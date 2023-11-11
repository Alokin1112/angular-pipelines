export interface Environment {
  production: boolean,
  httpBackend: string;
  version: number,
}

export type Profile = 'dev' | 'local' | 'prod' | 'test';