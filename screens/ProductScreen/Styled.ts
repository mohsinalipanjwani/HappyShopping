import CardHeader, { CardHeaderProps } from "@mui/material/CardHeader";
import { styled } from "@mui/material/styles";




export const CardHeaderWrapper = styled(CardHeader)<CardHeaderProps>(
  ({ theme }) =>
    ({
      borderBottom: "1px solid rgba(0,0,0,0.05)"
    } as any),
) as (props: CardHeaderProps) => JSX.Element;
