export namespace Products {
  export type Item = {
    _id: string;
    title: string;
    price: number;
    category: {
      _id: string;
      name: string;
      slug: string;
    };
    createdBy: {
      role: string;
      _id: string;
      name: string;
    };
  };

  // Fetch
  export type ListingProps = {};
  export type ListingResponse = {
    data: Item[];
  };
  export interface ListingAPIPayload extends ListingProps {}
}
