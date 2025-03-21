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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FlightIcon from "@mui/icons-material/Flight";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BoltIcon from "@mui/icons-material/Bolt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BadgeIcon from "@mui/icons-material/Badge";
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
  { id: 2, path: "/about", label: "About" },
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
    label: "Micro ATM",
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
    id: 4,
    label: "Travel Services",
    icon: <FlightIcon />,
    color: "#9C27B0", // Purple
    path: "/services/travel",
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
    id: 8,
    label: "Credit Cards",
    icon: <CreditCardIcon />,
    color: "#00BCD4", // Cyan
    path: "/services/credit-card",
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

// Modified IconContainer with light background initially and color on hover
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
        main: "#1976d2",
        light: "#42a5f5",
        dark: "#0d47a1",
      },
      secondary: {
        main: "#f9ce1d",
        light: "#ffeb3b",
      },
      info: {
        main: "#29b6f6",
      },
      background: {
        paper: "#ffffff", // Solid white background when scrolled
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
              {navItems.map((item) => (
                <MenuItem
                  key={item.id}
                  onClick={handleMobileMenuClose}
                  sx={{
                    color: "primary.main",
                  }}
                >
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}
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
