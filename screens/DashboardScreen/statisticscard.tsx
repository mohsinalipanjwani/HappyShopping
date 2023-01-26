import { Box, Card, Typography, Grid } from "@mui/material";
import { BoxWrapper, IconWrapper } from "./Styled";

interface dataProps {
  id: number;
  title: string;
  count: string;
  description: string;
  icon: JSX.Element;
}
interface StatisticsCardProps {
  data: dataProps[];
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({ data }) => {
  return (
    <>
      {data.map((card) => (
        <Grid item xs={12} sm={6} md={3}>
          <Card>
            <BoxWrapper>
              <Grid container alignItems="center">
                <Grid item>
                  <IconWrapper>{card.icon}</IconWrapper>
                </Grid>
                <Grid item xs={8}>
                  <Box>
                    <Typography variant="subtitle2" component="h6">
                      {card.title}
                    </Typography>

                    <Typography variant="h6" component="h5">
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
