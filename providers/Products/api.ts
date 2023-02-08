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

// Create
export async function create(
  props: Products.CreateAPIPayload,
): Promise<Products.CreateResponse> {
  return service({
    method: "POST",
    url: `/products`,
    body: props.data,
  });
}
