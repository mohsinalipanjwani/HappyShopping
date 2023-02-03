import {
  useQuery,
  useMutation,
  UseQueryResult,
  useQueryClient,
  UseMutationResult,
} from "react-query";
import * as api from "./api";
import { Products } from "./types";

const KEY = "Products";

export function getKeyFromProps(
  props: any,
  type: "LISTING" | "DETAIL",
): string[] {
  const key = [KEY, type];
  key.push(props);
  return key;
}
export function getStatsProviderKey(
  arg0: { productId: number | undefined },
  arg1: string,
): import("react-query").InvalidateQueryFilters<unknown> | undefined {
  throw new Error("Function not implemented.");
}
export function getFormProviderKey(
  arg0: { id: string | undefined },
  arg1: string,
): import("react-query").InvalidateQueryFilters<unknown> | undefined {
  throw new Error("Function not implemented.");
}
// Fetch
export function useProductsListing(
  props: Products.ListingProps = {},
): UseQueryResult<Products.ListingResponse> {
  return useQuery(
    getKeyFromProps(props, "LISTING"),
    () => api.fetch(props),
    {},
  );
}
