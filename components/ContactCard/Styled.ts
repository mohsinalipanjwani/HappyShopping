import MuiBox, { BoxProps } from "@mui/material/Box";
import { styled } from "@mui/material/styles";

export const IconWrapper = styled(MuiBox)<BoxProps>(
  ({ theme }) =>
    ({
      width: "48px",
      height: "48px",
      lineHeight: "55px",
      fontSize: "22px",
      fontWidth: "600",
      textAlign: "center",
      borderRadius: "100px",
      marginRight: "10px",
      boxShadow: theme.shadow.boxShadow,
    } as any),
) as (props: BoxProps) => JSX.Element;
