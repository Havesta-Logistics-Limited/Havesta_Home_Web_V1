import PagesHero from '../components/News/pagesHero';
import { Stack, Box, styled, Typography, Button } from '@mui/material';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { colors } from '../utils/globals';
import TextInput from '../common/textInput';
import TextArea from '../common/textArea';
import { Formik } from 'formik';
import FAQ from '../components/faq.';
import Avatar from '@mui/material/Avatar';
import { FaPhoneVolume } from 'react-icons/fa6';
import { IoMail } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const StyledAboutBox = styled(Box)({
  borderRadius: '10px',

  minHeight: '550px',
  '@media screen and (max-width: 1200px)': {
    height: '100px',
  },
});
const StyledButton = styled(Button)({
  color: colors.WHITE,
  textTransform: 'capitalize',
  backgroundColor: colors.primary,
  padding: '1rem 2.5rem',
  fontSize: '0.7rem',
  margin: '0.8rem 0',
  '&:hover': {
    backgroundColor: colors.primary,
  },
});

const StyledTextInput = styled(TextInput)({
  width: '100%',
});

const image =
  'https://res.cloudinary.com/dtc89xi2r/image/upload/v1721809120/Frame_1_ahkytv.png';
const Contact = () => {
  return (
    <>
      <PagesHero
        title={'Get In Touch Today'}
        des={'We are always available to support you '}
        height={['40vh', '55vh']}
      />
      <Box mx={[2, 35]}>
        <Stack
          direction={['column', 'row']}
          padding={2}
          marginTop={'15rem'}
          marginBottom={'25rem'}
          boxShadow={4}
          borderRadius={'15px'}
          fontFamily={'Plus Jakarta Sans'}
        >
          <Box
            width={['100%', '1000px']}
            // marginY={"1rem"}
            // marginRight={"3rem"}
            marginLeft={['0', '3rem']}
            sx={{ order: ['2', '2'] }}
            paddingY={5}
          >
            <form>
              <Stack direction={['column', 'row']} justifyContent="start">
                <Box width={'100%'}>
                  <StyledTextInput
                    name="first_name"
                    label={'First Name'}
                    value={'name'}
                  />
                </Box>
                <Box width={'100%'}>
                  <StyledTextInput
                    name="last_name"
                    label={'Last Name'}
                    value={'name'}
                  />
                </Box>
              </Stack>
              <Stack
                direction={['column', 'row']}
                justifyContent="start"
                mt={5}
                width={'100%'}
              >
                <Box width={'100%'}>
                  <StyledTextInput
                    name="first_name"
                    label={'Email'}
                    value={'name'}
                  />
                </Box>
                <Box width={'100%'}>
                  <StyledTextInput
                    name="last_name"
                    label={'Phone Number'}
                    value={'name'}
                  />
                </Box>
              </Stack>
              <Box my={5}>
                <Typography fontWeight={600}>Select Subject</Typography>
                <FormControl>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name="row-radio-buttons-group"
                  >
                    <FormControlLabel
                      value="deliveries"
                      control={
                        <Radio
                          sx={{
                            color: 'green',
                            '&.Mui-checked': { color: 'green' },
                          }}
                        />
                      }
                      label="Deliveries"
                    />
                    <FormControlLabel
                      value="product"
                      control={
                        <Radio
                          sx={{
                            color: 'green',
                            '&.Mui-checked': { color: 'green' },
                          }}
                        />
                      }
                      label="Product"
                    />
                    <FormControlLabel
                      value="vendors/riders"
                      control={
                        <Radio
                          sx={{
                            color: 'green',
                            '&.Mui-checked': { color: 'green' },
                          }}
                        />
                      }
                      label="Vendors/Riders"
                    />
                    <FormControlLabel
                      value="general_inquiry"
                      control={
                        <Radio
                          sx={{
                            color: 'green',
                            '&.Mui-checked': { color: 'green' },
                          }}
                        />
                      }
                      label="General"
                    />
                  </RadioGroup>
                </FormControl>
              </Box>
              <Formik
                initialValues={{ message: '' }}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ handleSubmit }) => (
                  <form onSubmit={handleSubmit}>
                    <Typography fontWeight={600}>Message</Typography>
                    <TextArea
                      name="message"
                      placeholder={'write your message'}
                    />
                  </form>
                )}
              </Formik>
            </form>
            <Box display="flex" justifyContent="center" mt={2}>
              <StyledButton>Send Message</StyledButton>
            </Box>
          </Box>
          <StyledAboutBox
            width={['100%', '800px']}
            sx={{
              order: ['1', '1'],
              background: `url(${image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
              color: 'white',
              padding: '3rem',
              display: 'flex',
              justifyContent: 'space-between',
              flexDirection: 'column',
            }}
          >
            <Box fontFamily={'Plus Jakarta Sans'}>
              <Typography
                variant="h2"
                color="white"
                fontSize={'2.5rem'}
                fontWeight={500}
              >
                Contact Information
              </Typography>
              <Typography
                variant="h5"
                color="#C9C9C9"
                fontSize={'1.2rem'}
                mt={1}
              >
                Send an e-mail or start a live chat!
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Stack
                direction={'row'}
                justifyContent={'start'}
                alignItems={'center'}
              >
                <Box>
                  <FaPhoneVolume size={24} />
                </Box>
                <Box ml={3}>
                  <Typography variant="h6" color="white" fontSize={'1.2rem'}>
                    080HARVESTA
                  </Typography>
                </Box>
              </Stack>
              <Stack
                direction={'row'}
                justifyContent={'start'}
                alignItems={'center'}
                my={5}
              >
                <Box>
                  <IoMail size={24} />
                </Box>
                <Box ml={3}>
                  <Typography variant="h6" color="white" fontSize={'1.2rem'}>
                    hello@harvesta.com
                  </Typography>
                </Box>
              </Stack>
              <Stack
                direction={'row'}
                justifyContent={'start'}
                alignItems={'center'}
              >
                <Box>
                  <FaLocationDot size={24} />
                </Box>
                <Box ml={3}>
                  <Typography variant="h6" color="white" fontSize={'1.2rem'}>
                    17 Kaffi Street, Behind ICM, Alausa, Ikeja, Lagos State.
                  </Typography>
                </Box>
              </Stack>
            </Box>
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ bgcolor: 'orange' }}>
                <FaFacebook />
              </Avatar>
              <Avatar sx={{ bgcolor: 'orange' }}>
                <FaTwitter />
              </Avatar>
              <Avatar sx={{ bgcolor: 'orange' }}>
                <FaInstagram />
              </Avatar>
              <Avatar sx={{ bgcolor: 'orange' }}>
                <FaLinkedin />
              </Avatar>
            </Stack>
          </StyledAboutBox>
        </Stack>
      </Box>
      <FAQ />
    </>
  );
};

export default Contact;
