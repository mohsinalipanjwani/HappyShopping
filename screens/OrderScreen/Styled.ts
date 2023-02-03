import MuiBox, { BoxProps } from "@mui/material/Box";
import Button, { ButtonProps } from "@mui/material/Button";
import InputLabel, { InputLabelProps } from "@mui/material/InputLabel";
import CardHeader, { CardHeaderProps } from "@mui/material/CardHeader";
import { styled } from "@mui/material/styles";
import { StepConnector, stepConnectorClasses } from "@mui/material";

export const CardHeaderWrapper = styled(CardHeader)<CardHeaderProps>(
  ({ theme }) =>
    ({
      borderBottom: "1px solid rgba(0,0,0,0.05)",
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    } as any),
) as (props: CardHeaderProps) => JSX.Element;

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

export const InputLabelWrapper = styled(InputLabel)<InputLabelProps>(
  ({ theme }) =>
    ({
      marginBottom: theme.spacing(1),
    } as any),
) as (props: InputLabelProps) => JSX.Element;

export const ButtonWrapper = styled(Button)<ButtonProps>(
  ({ theme }) =>
    ({
      fontSize: "15px",
      fontWeight: "400",
      height: "50px",
      textTransform: "capitalize",
      borderRadius: theme.borderRadius.radius1,
      backgroundColor: theme.palette.primary.main,
    } as any),
) as (props: ButtonProps) => JSX.Element;

export const StepIconWrapper = styled("div")<{
  ownerState: { completed?: boolean; active?: boolean };
}>(({ theme, ownerState }) => ({
  backgroundColor: theme.palette.secondary.light,
  zIndex: 1,
  color: "#fff",
  width: 90,
  height: 90,
  display: "flex",
  borderRadius: "50%",
  justifyContent: "center",
  alignItems: "center",
  ...(ownerState.active && {
    backgroundColor: theme.palette.primary.main,
    boxShadow: theme.shadow.boxShadow,
  }),
  ...(ownerState.completed && {
    backgroundColor: theme.palette.primary.main,
  }),
}));

export const StepConnectorWrapper = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 40,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      backgroundColor: theme.palette.primary.main,
    },
  },
  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundColor: theme.palette.secondary.light,
    borderRadius: 1,
  },
}));
