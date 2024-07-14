import { Box, Container, Typography, styled } from "@mui/material";
import PagesHero from "../components/News/pagesHero";
import FAQ from "../components/faq.";
import { privacyPolicy } from "../config/privacyPolicy.config";

const StyledText = styled(Typography)({
  fontSize: "1rem",
  marginTop: "2rem",
  marginBottom: "2rem",
});
const StyledTitle = styled(Typography)({
  fontWeight: 700,
  fontSize: "1.2rem",
  marginBottom: "1rem",
});

const PrivacyPolicy = () => {
  return (
    <>
      <PagesHero title={"PRIVACY POLICY"} />
      <div className="full mb-[250px]">
        <Container>
          {privacyPolicy.map((policy, i) => (
            <Box fontFamily={"Plus Jakarta Sans"} my={10} key={i}>
              <StyledTitle>
                {i + 1} {policy.title}
              </StyledTitle>
              {policy.paragraphs.map((subPolicy, i) => (
                <StyledText key={i}>{subPolicy.text}</StyledText>
              ))}
            </Box>
          ))}
        </Container>
      </div>
      <FAQ />
    </>
  );
};
export default PrivacyPolicy;
