import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent } from "react";

interface ProductInputProps {
  title: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export interface ProductsProps {
  values: ProductInputProps;
  touched: FormikTouched<ProductInputProps>;
  errors: FormikErrors<ProductInputProps>;
  handleBlur: (e: ChangeEvent<any>) => void;
  handleChange: (e: ChangeEvent<any>) => void;
  setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
}
