import { Box, Button, Grid, Typography } from "@mui/material";
import { IconWrapper } from "./Styled";

interface dataProps {
  id: number;
  title: string;
  description: JSX.Element | string;
  link: string;
  button: JSX.Element | string;
  icon: JSX.Element;
  backgroundColor: string;
  color: string;
}
interface ContactCardProps {
  data: dataProps[];
  isIcon: boolean;
  column: number;
}

const ContactCard: React.FC<ContactCardProps> = ({ data, isIcon, column }) => {
  return (
    <>
      {data.map((card) => (
        <Grid item xs={12} md={6} lg={4} key={card.id}>
          <Grid container spacing={1}>
            {isIcon && (
              <Grid item>
                <IconWrapper
                  sx={{
                    backgroundColor: card.backgroundColor,
                    color: card.color,
                  }}
                >
                  {card.icon}
                </IconWrapper>
              </Grid>
            )}
            <Grid item xs={column}>
              <Box>
                <Typography
                  variant="h6"
                  component="h1"
                  sx={{ marginBottom: (theme) => theme.spacing(0.5) }}
                >
                  {card.title}
                </Typography>

                {card.description}

                <Button
                  href={card.link}
                  sx={{ padding: (theme) => theme.spacing(1, 0) }}
                >
                  {card.button}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default ContactCard;
