
export interface Province {
    name: string;
    cities: string[];
  }
export interface Community {
    community: string;
    provinces: Province[];
  }