import { Card, CardContent } from "@mui/material";
import { BasicFields } from "./productFields";

import { CardHeaderWrapper } from "../Styled";


export const Basic = () => {
  return (
    <Card>
      <CardHeaderWrapper
        title="Shrimp and Chorizo Paella"
      />
      <CardContent>
        <BasicFields />
      </CardContent>
    </Card>
  );
};
