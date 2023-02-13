import * as React from "react";
import {
  Stepper,
  Step,
  StepLabel,
  StepIconProps,
  Box,
  Typography,
} from "@mui/material";

import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { StepIconWrapper, StepConnectorWrapper } from "../Styled";

function StepIcons(props: StepIconProps) {
  const { active, completed, className } = props;

  const icons: { [index: string]: React.ReactElement } = {
    1: <ShoppingCartIcon />,
    2: <SettingsIcon />,
    3: <ShoppingBagIcon />,
    4: <LocalShippingIcon />,
    5: <CheckCircleIcon />,
  };

  return (
    <StepIconWrapper ownerState={{ completed, active }} className={className}>
      {icons[String(props.icon)]}
    </StepIconWrapper>
  );
}

interface OrderStageProps {
  steps: {
    label: string;
    date: string;
  }[];
}

const OrderStage: React.FC<OrderStageProps> = ({ steps }) => {
  return (
    <Box>
      <Stepper
        alternativeLabel
        activeStep={3}
        connector={<StepConnectorWrapper />}
      >
        {steps.map((step) => (
          <Step key={step.label}>
            <StepLabel StepIconComponent={StepIcons}>
              <Typography sx={{ fontSize: "17px" }}>{step.label}</Typography>
              <Typography
                variant="subtitle2"
                component="p"
                sx={{ opacity: 0.7 }}
              >
                {step.date}
              </Typography>
            </StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};

export default OrderStage;
