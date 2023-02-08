export namespace Products {
  export type Items = {
    _id: string;
    title: string;
    price: number;
    category: {
      _id: string;
      name: string;
      slug: string;
    };
    description: string;
    createdBy: {
      role: string;
      _id: string;
      name: string;
    };
    image: string;
  };

  // Fetch
  export type ListingProps = {};
  export type ListingResponse = {
    data: Items[];
  };
  export interface ListingAPIPayload extends ListingProps {}
  // Create
  export type CreateProps = {};
  export type CreateResponse = {
    data: Items;
  };
  export type CreateMutationPayload = {
    title: string;
    description: string;
    price: number;
    category: string;
    image: string;
  };
  export interface CreateAPIPayload extends CreateProps {
    data: CreateMutationPayload;
  }
}
