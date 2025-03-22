import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Grid,
  Box,
  Container,
  ThemeProvider,
  createTheme,
  alpha,
  Collapse,
  List,
  ListItem,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FlightIcon from "@mui/icons-material/Flight";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BoltIcon from "@mui/icons-material/Bolt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { useRouter } from "next/router";

// Type definitions
interface NavItem {
  id: number;
  path: string;
  label: string;
}

interface ServiceItem {
  id: number;
  label: string;
  icon: React.ReactNode;
  color: string;
  path: string;
}

interface IconContainerProps {
  color: string;
  isHovered: boolean;
}

interface ServiceTextProps {
  isHovered: boolean;
}

interface StyledAppBarProps {
  scrolled: boolean;
}

// Navigation items
const navItems: NavItem[] = [
  { id: 1, path: "/", label: "Home" },
  { id: 2, path: "/about", label: "About-us" },
  { id: 3, path: "#", label: "Services" },
  { id: 4, path: "contact-us", label: "Contact" },
];

// Service items with Material-UI icons and colors
const serviceItems: ServiceItem[] = [
  {
    id: 1,
    label: "DMT",
    icon: <AttachMoneyIcon />,
    color: "#2196F3", // Blue
    path: "/services/dmt",
  },
  {
    id: 2,
    label: "M ATM",
    icon: <LocalAtmIcon />,
    color: "#4CAF50", // Green
    path: "/services/m-atm",
  },
  {
    id: 3,
    label: "AePS",
    icon: <FingerprintIcon />,
    color: "#FF9800", // Orange
    path: "/services/aeps",
  },
  {
    id: 8,
    label: "Pan Card",
    icon: <CreditCardIcon />,
    color: "#00BCD4", // Cyan
    path: "/services/pan-card",
  },
  {
    id: 5,
    label: "Insurance",
    icon: <HealthAndSafetyIcon />,
    color: "#F44336", // Red
    path: "/services/insurance",
  },
  {
    id: 6,
    label: "PG",
    icon: <BusinessCenterIcon />,
    color: "#673AB7", // Deep Purple
    path: "/services/pg",
  },
  {
    id: 7,
    label: "Utility Bills",
    icon: <BoltIcon />,
    color: "#FFEB3B", // Yellow
    path: "/services/utility-bills",
  },
  
  {
    id: 4,
    label: "Travel Services",
    icon: <FlightIcon />,
    color: "#9C27B0", // Purple
    path: "/services/travel",
  },
];

// Styled components
const StyledAppBar = styled(AppBar)<StyledAppBarProps>(
  ({ theme, scrolled }) => ({
    background: scrolled
      ? theme.palette.background.paper // Solid background when scrolled
      : `linear-gradient(90deg, ${alpha(
          theme.palette.primary.light,
          0.2
        )} 0%, ${alpha(theme.palette.primary.light, 0.4)} 100%)`, // Transparent gradient when at top
    boxShadow: scrolled ? theme.shadows[4] : "none", // Only show shadow when scrolled
    transition: "background 0.3s ease, box-shadow 0.3s ease", // Smooth transition
  })
);

const NavButton = styled(Button)<{ active: number }>(({ theme, active }) => ({
  color: theme.palette.primary.main,
  fontWeight: 500,
  fontSize: "1rem",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  position: "relative",
  "&:hover": {
    backgroundColor: "transparent",
    color: theme.palette.primary.dark,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: active ? "100%" : "0%",
    height: "2px",
    backgroundColor: theme.palette.primary.dark,
    transition: "width 0.3s ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

// Modified IconContainer that works on mobile too
const IconContainer = styled(Box)<IconContainerProps>(
  ({ theme, color, isHovered }) => ({
    width: "48px",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    border: isHovered ? `2px solid ${color}` : "none",
    backgroundColor: isHovered ? "transparent" : color,
    transition: "all 0.3s ease-in-out",
    marginBottom: "12px",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.1)",
    },
    boxShadow: theme.shadows[4],
    className: "service-icon",
  })
);

// Service Text styling with color change on hover
const ServiceText = styled(Typography)<ServiceTextProps>(
  ({ theme, isHovered }) => ({
    marginTop: "8px",
    fontSize: "0.875rem",
    fontWeight: 500,
    textAlign: "center",
    color: isHovered ? theme.palette.primary.main : theme.palette.text.primary,
    transition: "color 0.3s ease-in-out",
    className: "service-text",
  })
);

// ServiceItemBox styled component
const ServiceItemBox = styled(Box)(({ theme }) => ({
  width: "max-content",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "14px",
  padding: "10px",
  borderRadius: theme.shape.borderRadius,
  transition: "all 0.3s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
  },
}));

// Mobile Service Item styled component
const MobileServiceItem = styled(ListItem)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(1.5),
  borderBottom: `1px solid ${theme.palette.divider}`,
  "&:last-child": {
    borderBottom: "none",
  },
}));

const CustomHeader = () => {
  const router = useRouter();
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(1);
  const [hoveredServiceItem, setHoveredServiceItem] = useState<number | null>(
    null
  );
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<HTMLElement | null>(
    null
  );
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);

  // Effect to handle scroll
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10; // Adjust threshold as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Create theme with light mode only
  const theme = createTheme({
    palette: {
      mode: "light",
      primary: {
        main: "#1565C0", // Deeper blue for a stronger appearance
        light: "#42A5F5", // Keeping the light blue shade
        dark: "#0D47A1", // Strong contrast for dark
      },
      secondary: {
        main: "#FFB400", // A richer golden yellow for a premium feel
        light: "#FFD54F",
        dark: "#F57F17",
      },
      info: {
        main: "#17A2B8", // Balanced cyan for a sleek UI
        light: "#4FC3F7",
        dark: "#0277BD",
      },
      background: {
        default: "#FAFAFA", // Softer white for better readability
        paper: "#FFFFFF", // Keeping paper solid white
      },
    },
  });

  const handleServiceMenuOpen = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setAnchorEl(event.currentTarget);
    setIsDropdownOpen(true);
  };

  const handleServiceMenuClose = () => {
    setAnchorEl(null);
    setIsDropdownOpen(false);
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setMobileMenuAnchor(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMenuAnchor(null);
    setMobileServicesOpen(false);
  };

  const handleMobileServiceClick = (path: string) => {
    router.push(path);
    handleMobileMenuClose();
  };

  const toggleMobileServices = () => {
    setMobileServicesOpen(!mobileServicesOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar position="fixed" scrolled={scrolled}>
        <Container maxWidth="lg">
          <Toolbar disableGutters>
            {/* Logo */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                flexGrow: { xs: 1, md: 0 },
              }}
            >
              <img
                src="https://bc.rizingpay.com//assets/logo.png"
                alt="Rizing Pay Logo"
                style={{ height: "40px", width: "auto" }}
              />
              <Typography
                variant="h6"
                sx={{
                  ml: 2,
                  fontWeight: 700,
                  color: "primary.main",
                }}
              >
                Rizing Pay
              </Typography>
            </Box>

            {/* Desktop Navigation */}
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                justifyContent: "center",
              }}
            >
              {navItems.map((item) =>
                item.label === "Services" ? (
                  <Box key={item.id}>
                    <NavButton
                      active={activeItem === item.id ? 1 : 0}
                      aria-controls="services-menu"
                      aria-haspopup="true"
                      onClick={handleServiceMenuOpen}
                      onMouseEnter={handleServiceMenuOpen}
                      endIcon={
                        <KeyboardArrowDownIcon
                          sx={{
                            transform: isDropdownOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s",
                          }}
                        />
                      }
                    >
                      {item.label}
                    </NavButton>
                    <Menu
                      id="services-menu"
                      anchorEl={anchorEl}
                      open={isDropdownOpen}
                      onClose={handleServiceMenuClose}
                      MenuListProps={{
                        onMouseLeave: handleServiceMenuClose,
                      }}
                      sx={{
                        "& .MuiPaper-root": {
                          width: 600,
                          mt: 6.4,
                          borderRadius: 2,
                          boxShadow: 8,
                          bgcolor: "rgba(245, 250, 255, 0.97)",
                          backdropFilter: "blur(8px)",
                        },
                      }}
                      PaperProps={{
                        elevation: 8,
                        sx: {
                          p: 2,
                        },
                      }}
                      anchorOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                      transformOrigin={{
                        vertical: "top",
                        horizontal: "center",
                      }}
                    >
                      <Typography
                        variant="overline"
                        sx={{
                          display: "block",
                          textAlign: "center",
                          color: "grey.600",
                          backgroundColor: "#f0f0f0",
                          padding: "8px 16px",
                          borderRadius: "8px",
                          fontWeight: "bold",
                          boxShadow: 3,
                        }}
                      >
                        Our Services
                      </Typography>

                      <Grid container spacing={1} justifyContent="center">
                        {serviceItems.map((service: any) => (
                          <Grid item key={service.id}>
                            <ServiceItemBox
                              onMouseEnter={() =>
                                setHoveredServiceItem(service.id)
                              }
                              onMouseLeave={() => setHoveredServiceItem(null)}
                              onClick={() => router.push(service.path)}
                            >
                              <IconContainer
                                isHovered={hoveredServiceItem === service.id}
                                color={service.color}
                              >
                                {React.cloneElement(service.icon, {
                                  sx: {
                                    color:
                                      hoveredServiceItem === service.id
                                        ? service.color
                                        : theme.palette.common.white,
                                    fontSize: "1.5rem",
                                  },
                                })}
                              </IconContainer>
                              <ServiceText
                                isHovered={hoveredServiceItem === service.id}
                              >
                                {service.label}
                              </ServiceText>
                            </ServiceItemBox>
                          </Grid>
                        ))}
                      </Grid>
                    </Menu>
                  </Box>
                ) : (
                  <NavButton
                    key={item.id}
                    active={activeItem === item.id ? 1 : 0}
                    href={item.path}
                    onClick={() => setActiveItem(item.id)}
                  >
                    {item.label}
                  </NavButton>
                )
              )}
            </Box>

            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleMobileMenuOpen}
              sx={{ display: { md: "none" } }}
            >
              <MenuIcon />
            </IconButton>

            {/* Mobile Menu */}
            <Menu
              anchorEl={mobileMenuAnchor}
              open={Boolean(mobileMenuAnchor)}
              onClose={handleMobileMenuClose}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  width: "80%",
                  maxWidth: 300,
                },
              }}
            >
              {navItems.map((item) =>
                item.label === "Services" ? (
                  <Box key={item.id}>
                    <MenuItem
                      onClick={toggleMobileServices}
                      sx={{ color: "primary.main" }}
                    >
                      <Typography>{item.label}</Typography>
                      <Box sx={{ flexGrow: 1 }} />
                      <KeyboardArrowDownIcon
                        sx={{
                          transform: mobileServicesOpen
                            ? "rotate(180deg)"
                            : "rotate(0deg)",
                          transition: "transform 0.3s",
                        }}
                      />
                    </MenuItem>
                    <Collapse
                      in={mobileServicesOpen}
                      timeout="auto"
                      unmountOnExit
                    >
                      <List component="div" disablePadding>
                        {serviceItems.map((service: any) => (
                          <MobileServiceItem
                            key={service.id}
                            onClick={() =>
                              handleMobileServiceClick(service.path)
                            }
                            sx={{ pl: 4 }}
                          >
                            <Box
                              sx={{
                                width: 32,
                                height: 32,
                                borderRadius: "8px",
                                backgroundColor: service.color,
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                mr: 2,
                              }}
                            >
                              {React.cloneElement(service.icon, {
                                sx: { color: "white", fontSize: "1.2rem" },
                              })}
                            </Box>
                            <Typography>{service.label}</Typography>
                            <Box sx={{ flexGrow: 1 }} />
                            <KeyboardArrowRightIcon
                              fontSize="small"
                              color="action"
                            />
                          </MobileServiceItem>
                        ))}
                      </List>
                    </Collapse>
                  </Box>
                ) : (
                  <MenuItem
                    key={item.id}
                    onClick={() => {
                      router.push(item.path);
                      handleMobileMenuClose();
                    }}
                    sx={{ color: "primary.main" }}
                  >
                    <Typography textAlign="center">{item.label}</Typography>
                  </MenuItem>
                )
              )}
            </Menu>
          </Toolbar>
        </Container>
      </StyledAppBar>
      {/* Add toolbar placeholder to prevent content from hiding behind AppBar */}
      <Toolbar />
    </ThemeProvider>
  );
};

export default CustomHeader;
