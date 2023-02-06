import { FormikErrors, FormikTouched } from "formik";
import { ChangeEvent } from "react";

interface ProductInputProps {
    title: string;
    description?: string;
    ratePrice: string;
    promotionalPrice?: string;
    currencySelect: string;
    taxRate?: string;
    shippingWidth?: string;
    shippingHeight?: string;
    shippingWeight?: string;
    shippingFees?: string;
    organizationTaxRate?: string;
    category: string;
    subCategory?: string;
    image?: File;
  }
  
  export interface ProductsProps {
    values: ProductInputProps;
    touched: FormikTouched<ProductInputProps>;
    errors: FormikErrors<ProductInputProps>;
    handleBlur: (e: ChangeEvent<any>) => void;
    handleChange: (e: ChangeEvent<any>) => void;
    setFieldValue?: (field: string, value: any, shouldValidate?: boolean) => void;
  }