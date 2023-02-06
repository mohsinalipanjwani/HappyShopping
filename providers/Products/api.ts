import service from "services";
import { Products } from "./types";

// Fetch
export async function fetch(
  props: Products.ListingAPIPayload,
): Promise<Products.ListingResponse> {
  return service({
    method: "GET",
    url: `/products`,
  });
}
