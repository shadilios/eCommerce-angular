export interface LoginResponse{
  token: string;
  expiryDate : Date;
  userId: string;
  userName : string;
  roles : any[];
}
