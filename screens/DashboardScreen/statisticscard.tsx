import { Box, Card, Typography, Grid } from "@mui/material";
import { BoxWrapper, IconWrapper } from "./Styled";

interface dataProps {
  id: number;
  title: string;
  count: string;
  description: string;
  icon: JSX.Element;
  backgroundColor: string;
  color: string;
}
interface StatisticsCardProps {
  data: dataProps[];
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ data }) => {
  return (
    <>
      {data.map((card, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card>
            <BoxWrapper>
              <Grid container spacing={1}>
                <Grid item>
                  <IconWrapper sx={{ backgroundColor: card.backgroundColor, color: card.color}}>{card.icon}</IconWrapper>
                </Grid>
                <Grid item xs={8}>
                  <Box>
                    <Typography variant="subtitle2" component="h6">
                      {card.title}
                    </Typography>

                    <Typography variant="h6" component="h3">
                      {card.count}
                    </Typography>

                    <Typography variant="caption" component="p">
                      {card.description}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </BoxWrapper>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default StatisticsCard;
