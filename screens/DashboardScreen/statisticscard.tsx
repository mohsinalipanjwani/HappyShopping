import { Box, Card, Typography, Grid } from "@mui/material";
import { ReactElement, JSXElementConstructor, ReactFragment, ReactPortal } from "react";
import { BoxWrapper, IconWrapper } from "./Styled";


const StatisticsCard = ({data} : any) => {
  return (
    <>
    {data.map((card: { icon: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; count: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; description: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal | null | undefined; }) => (
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
  )
};

export default StatisticsCard;
