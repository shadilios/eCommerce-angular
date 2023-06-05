// To parse this data:
//
//   import { Convert, Category } from "./file";
//
//   const category = Convert.toCategory(json);

export interface Category {
  id: number;
  name: string;
  description: string;
  image: string;
}

// Converts JSON strings to/from your types
export class Convert {
  public static toAccessToken(json: string): Category {
    return JSON.parse(json);
  }

  public static accessTokenToJson(value: Category): string {
    return JSON.stringify(value);
  }
}
