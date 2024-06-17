import React from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Stack,
  styled,
  Typography,
} from "@mui/material";
import { colors } from "../../utils/globals";

const GridContainer = styled(Box)({
  display: "grid",
  gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
  gridGap: "30px",
  alignItems: "stretch",

  "@media screen and (max-width: 1200px)": {
    gridGap: "14px",
    gridTemplateColumns: `repeat(auto-fill, minmax(200px, 1fr))`,
  },
});

const StyledGridElements = styled(Box)({
  width: "100%",
});

const ArticlesGallery = ({ data }) => {
  return (
    <Box marginTop={[6, 6]} marginBottom={[6, 8]}>
      <GridContainer>
        {data.map((ele, index) => (
          <StyledGridElements key={index}>
            <Card
              sx={{
                backgroundColor: `${colors.harvestaLightGreen}`,
                p: 1,
                borderRadius: "25px",
                border: "1px solid rgba(0, 0, 0, 0.1)",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.05)",
                borderColor: `grey`,
                ":hover": {
                  backgroundColor: `${colors.primary}`,
                },
              }}
              elevation={0}
            >
              <CardMedia
                component="img"
                alt=""
                height="200"
                image={ele.img}
                sx={{ objectFit: "cover", borderRadius: "25px 25px 0 0" }}
              />
              <CardContent sx={{ paddingX: 0 }}>
                {ele.des && (
                  <Stack direction="column">
                    <Typography
                      fontWeight="500"
                      paddingRight={[1, 5]}
                      mb
                      color={colors.WHITE}
                      textTransform={"capitalize"}
                      fontFamily={"Plus Jakarta Sans"}
                    >
                      {ele.des}
                    </Typography>
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography
                        fontSize="0.8rem"
                        color={colors.WHITE}
                        fontFamily={"Plus Jakarta Sans"}
                      >
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Minus accusantium molestias rem illo
                        exercitationem quaerat consectetur. Iure aliquid facere
                        fugit debitis odio commodi totam repellat ducimus,
                        beatae itaque non culpa!
                      </Typography>
                      {/* <Avatar sx={{ background: `${colors.harvestaYellow}` }}>
                        <IoIosArrowForward color={colors.primary} />
                      </Avatar> */}
                    </Stack>
                  </Stack>
                )}
              </CardContent>
            </Card>
          </StyledGridElements>
        ))}
      </GridContainer>
    </Box>
  );
};

export default ArticlesGallery;
