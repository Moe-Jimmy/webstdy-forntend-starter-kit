export interface IWishlist {
  success: boolean;
  data: Data;
  message: string;
}

export interface Data {
  unavailiable_ids: any[];
  cars: any[];
}
