import React from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Link, 
  Divider, 
  IconButton,
  useTheme,
  useMediaQuery
} from '@mui/material';
import {
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  Instagram as InstagramIcon,
  Phone as PhoneIcon,
  Email as EmailIcon,
  LocationOn as LocationIcon
} from '@mui/icons-material';

const Footer = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const services = [
    { name: 'AePS', link: '/services/aeps' },
    { name: 'M-ATM', link: '/services/m-atm' },
    { name: 'DMT', link: '/services/dmt' },
    { name: 'Pan Card', link: '/services/pan-card' },
    { name: 'Insurance', link: '/services/insurance' },
    { name: 'Utility Bills', link: '/services/utility-bills' },
    { name: 'Travel', link: '/services/travel' },
  ];

  const company = [
    { name: 'About Us', link: '/about' },
    { name: 'Become an Agent', link: '/agent' },
    { name: 'Careers', link: '/careers' },
  ];

  const resources = [
    { name: 'Help Center', link: '#' },
    { name: 'API Documentation', link: '#' },
    { name: 'Partner Program', link: '#' },
    { name: 'Blog', link: '#' },
    { name: 'Security', link: '#' }
  ];

  const socialIcons = [
    { icon: <FacebookIcon />, link: 'https://facebook.com' },
    { icon: <TwitterIcon />, link: 'https://twitter.com' },
    { icon: <LinkedInIcon />, link: 'https://linkedin.com' },
    { icon: <InstagramIcon />, link: 'https://instagram.com' }
  ];

  return (
    <Box 
      sx={{ 
        bgcolor: '#2C3E50', // Dark background color for footer
        color: '#fff', // Light text color for contrast
        pt: 6, 
        pb: 3,
        borderTop: 5,
        borderColor: 'divider',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', // Add subtle shadow
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <Box sx={{ mb: 3 }}>
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 1 }}>
                Rizing Pay
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, maxWidth: '90%' }}>
                Empowering businesses with innovative financial technology solutions for seamless transactions and growth.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                <PhoneIcon sx={{ mr: 1, fontSize: 20 }} />
                <Box>
                  <Typography variant="body2">0565 355 5722</Typography>
                  <Typography variant="body2">+91 7599909376</Typography>
                  <Typography variant="body2">+91 8532806132</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 1 }}>
                <EmailIcon sx={{ mr: 1, fontSize: 20 }} />
                <Box>
                  <Typography variant="body2">account@rizingpay.com</Typography>
                  <Typography variant="body2">support@rizingpay.com</Typography>
                  <Typography variant="body2">hr@rizingpay.com</Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
                <LocationIcon sx={{ mr: 1, fontSize: 20 }} />
                <Typography variant="body2">
                  Hari Nagar P/O Krishna Nagar<br />
                  Mathura UP India 281004
                </Typography>
              </Box>
            </Box>
            <Box sx={{ mt: 2 }}>
              {socialIcons.map((social, index) => (
                <IconButton 
                  key={index} 
                  component="a" 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener"
                  sx={{ 
                    mr: 1,
                    color: '#fff', // White color for icons
                    '&:hover': {
                      color: theme.palette.primary.light,
                      transform: 'scale(1.2)',
                      transition: 'transform 0.3s ease'
                    },
                    '&:active': {
                      transform: 'scale(1.1)',
                    },
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Grid>

          {/* Links Section */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={2}>
              {/* Services */}
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Services
                </Typography>
                {services.map((service, index) => (
                  <Box key={index} sx={{ mb: 1 }}>
                    <Link 
                      href={service.link} 
                      underline="hover" 
                      color="inherit" 
                      sx={{ 
                        display: 'block',
                        transition: 'color 0.3s, padding-left 0.3s',
                        '&:hover': { 
                          color: theme.palette.primary.light, 
                          paddingLeft: '8px' 
                        }
                      }}
                    >
                      {service.name}
                    </Link>
                  </Box>
                ))}
              </Grid>

              {/* Company */}
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Company
                </Typography>
                {company.map((item, index) => (
                  <Box key={index} sx={{ mb: 1 }}>
                    <Link 
                      href={item.link} 
                      underline="hover" 
                      color="inherit" 
                      sx={{ 
                        display: 'block',
                        transition: 'color 0.3s, padding-left 0.3s',
                        '&:hover': { 
                          color: theme.palette.primary.light, 
                          paddingLeft: '8px' 
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  </Box>
                ))}
              </Grid>

              {/* Resources */}
              <Grid item xs={12} sm={4}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{ mb: 2 }}>
                  Resources
                </Typography>
                {resources.map((resource, index) => (
                  <Box key={index} sx={{ mb: 1 }}>
                    <Link 
                      href={resource.link} 
                      underline="hover" 
                      color="inherit" 
                      sx={{ 
                        display: 'block',
                        transition: 'color 0.3s, padding-left 0.3s',
                        '&:hover': { 
                          color: theme.palette.primary.light, 
                          paddingLeft: '8px' 
                        }
                      }}
                    >
                      {resource.name}
                    </Link>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <Divider sx={{ my: 3, bgcolor: theme.palette.primary.light }} />

        {/* Copyright Area */}
        <Box sx={{ display: 'flex', flexDirection: isMobile ? 'column' : 'row', justifyContent: 'space-between', alignItems: isMobile ? 'center' : 'flex-start', textAlign: isMobile ? 'center' : 'left' }}>
          <Typography variant="body2" color="white">
            © {new Date().getFullYear()} Rizing Pay. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: isMobile ? 2 : 0, }}>
            <Link  underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem',color: 'white' }}>
              Privacy Policy
            </Link>
            <Link  underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem',color: 'white' }}>
              Terms of Service
            </Link>
            <Link  underline="hover" color="text.secondary" sx={{ fontSize: '0.875rem',color: 'white' }}>
              Cookie Policy
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
