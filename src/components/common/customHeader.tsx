import React, { useState } from "react";
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
  Paper,
  Avatar,
  ListItemIcon,
  ListItemText,
  Switch,
  FormControlLabel,
  useTheme,
  ThemeProvider,
  createTheme,
  alpha,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";
import FingerprintIcon from "@mui/icons-material/Fingerprint";
import FlightIcon from "@mui/icons-material/Flight";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import BoltIcon from "@mui/icons-material/Bolt";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import BadgeIcon from "@mui/icons-material/Badge";

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
}

interface IconContainerProps {
  themeMode: 'light' | 'dark';
  color: string;
  isHovered: boolean;
}

interface ServiceTextProps {
  isHovered: boolean;
}

interface StyledAppBarProps {
  darkMode: boolean;
}

interface NavButtonProps {
  active: number;
  darkMode: boolean;
}

interface ThemeToggleButtonProps {
  darkMode: boolean;
}

// Navigation items
const navItems: NavItem[] = [
  { id: 1, path: "#", label: "Home" },
  { id: 2, path: "#", label: "About" },
  { id: 3, path: "#", label: "Services" },
  { id: 4, path: "#", label: "Contact" },
];

// Service items with Material-UI icons and colors
const serviceItems: ServiceItem[] = [
  {
    id: 1,
    label: "DMT",
    icon: <AttachMoneyIcon />,
    color: "#2196F3", // Blue
  },
  {
    id: 2,
    label: "Micro ATM",
    icon: <LocalAtmIcon />,
    color: "#4CAF50", // Green
  },
  {
    id: 3,
    label: "AePS",
    icon: <FingerprintIcon />,
    color: "#FF9800", // Orange
  },
  {
    id: 4,
    label: "Travel Services",
    icon: <FlightIcon />,
    color: "#9C27B0", // Purple
  },
  {
    id: 5,
    label: "Insurance",
    icon: <HealthAndSafetyIcon />,
    color: "#F44336", // Red
  },
  {
    id: 6,
    label: "CMS",
    icon: <BusinessCenterIcon />,
    color: "#673AB7", // Deep Purple
  },
  {
    id: 7,
    label: "Utility Bills",
    icon: <BoltIcon />,
    color: "#FFEB3B", // Yellow
  },
  {
    id: 8,
    label: "Credit Cards",
    icon: <CreditCardIcon />,
    color: "#00BCD4", // Cyan
  },
];

// Styled components
const StyledAppBar = styled(AppBar)<StyledAppBarProps>(({ theme, darkMode }) => ({
  background: darkMode
    ? `linear-gradient(90deg, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
    : `linear-gradient(90deg, ${alpha(
        theme.palette.primary.light,
        0.2
      )} 0%, ${alpha(theme.palette.primary.light, 0.4)} 100%)`,
  boxShadow: theme.shadows[4],
}));

const NavButton = styled(Button)<NavButtonProps>(({ theme, active, darkMode }) => ({
  color: darkMode ? theme.palette.common.white : theme.palette.primary.main,
  fontWeight: 500,
  fontSize: "1rem",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  position: "relative",
  "&:hover": {
    backgroundColor: "transparent",
    color: darkMode
      ? theme.palette.secondary.light
      : theme.palette.primary.dark,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: active ? "100%" : "0%",
    height: "2px",
    backgroundColor: darkMode
      ? theme.palette.secondary.light
      : theme.palette.primary.dark,
    transition: "width 0.3s ease-in-out",
  },
  "&:hover::after": {
    width: "100%",
  },
}));

// Modified IconContainer to have dark background initially and light on hover
const IconContainer = styled(Box)<IconContainerProps>(
  ({ theme, color, isHovered, themeMode }) => ({
    width: "48px",
    height: "48px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
    // Initially a filled container (dark), on hover it becomes outlined
    border: isHovered 
      ? `2px solid ${themeMode === "light" ? color : theme.palette.info.main}`
      : 'none',
    // Initially dark background, on hover it becomes light/transparent
    backgroundColor: isHovered
      ? "transparent" // Transparent on hover (for outlined effect)
      : themeMode === "light" ? color : theme.palette.info.main, // Initially filled with color
    transition: "all 0.3s ease-in-out",
    marginBottom: "12px",
    position: "relative",
    overflow: "hidden",
    "&:hover": {
      transform: "scale(1.1)", // Scale the icon slightly
    },
    boxShadow: theme.shadows[4], // Always have shadow for better appearance
    className: "service-icon",
  })
);

// Service Text styling with color change on hover
const ServiceText = styled(Typography)<ServiceTextProps>(({ theme, isHovered }) => ({
  marginTop: "8px",
  fontSize: "0.875rem",
  fontWeight: 500,
  textAlign: "center",
  color: isHovered ? theme.palette.primary.main : theme.palette.text.primary, // Change text color on hover
  transition: "color 0.3s ease-in-out",
  className: "service-text",
}));

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

const ThemeToggleButton = styled(Box)<ThemeToggleButtonProps>(({ theme, darkMode }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
  backgroundColor: darkMode
    ? theme.palette.primary.dark
    : alpha(theme.palette.primary.light, 0.7),
  color: darkMode ? theme.palette.common.white : theme.palette.primary.main,
  padding: theme.spacing(0.5, 2),
  borderRadius: 50,
  cursor: "pointer",
  transition: "all 0.3s",
}));

const CustomHeader = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<number>(1);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);
  const [hoveredServiceItem, setHoveredServiceItem] = useState<number | null>(null);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [mobileMenuAnchor, setMobileMenuAnchor] = useState<HTMLElement | null>(null);

  // Create theme based on dark/light mode
  const theme = createTheme({
    palette: {
      mode: isDarkMode ? "dark" : "light",
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
    },
  });

  const handleServiceMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
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

  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <StyledAppBar position="fixed" darkMode={isDarkMode}>
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
                  color: isDarkMode ? "common.white" : "primary.main",
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
                      darkMode={isDarkMode}
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
                          // Replace the basic background color with these options:
                          bgcolor: isDarkMode 
                            ? 'rgba(30, 40, 50, 0.95)'  // Dark rich blue-gray with slight transparency
                            : 'rgba(245, 250, 255, 0.97)', // Very light blue-white with slight transparency
                          backdropFilter: 'blur(8px)', // Optional: adds a subtle blur effect
                        },
                      }}
                      PaperProps={{
                        elevation: 8,
                        sx: {
                          p: 2,
                        },
                      }}
                      anchorOrigin={{
                        vertical: "top", // Align the menu to the top of the anchor
                        horizontal: "center", // Center the menu horizontally
                      }}
                      transformOrigin={{
                        vertical: "top", // Align the menu's top edge with the anchor
                        horizontal: "center", // Center the menu horizontally
                      }}
                    >
                      <Typography
                        variant="overline"
                        sx={{
                          display: "block",
                          textAlign: "center",
                          // mb: 2,
                          color: isDarkMode ? "grey.400" : "grey.600",
                          backgroundColor: isDarkMode ? "#333" : "#f0f0f0", // Background color
                          padding: "8px 16px", // Padding for better spacing
                          borderRadius: "8px", // Rounded corners
                          fontWeight: "bold", // Make the font bold
                          boxShadow: 3, // Add subtle shadow for contrast
                        }}
                      >
                        Our Services
                      </Typography>

                      <Grid container spacing={1} justifyContent="center">
                        {serviceItems.map((service:any) => (
                          <Grid item key={service.id}>
                            <ServiceItemBox
                              onMouseEnter={() => setHoveredServiceItem(service.id)}
                              onMouseLeave={() => setHoveredServiceItem(null)}
                            >
                              <IconContainer
                                isHovered={hoveredServiceItem === service.id}
                                themeMode={isDarkMode ? "dark" : "light"}
                                color={service.color}
                              >
                                {/* Change icon color based on hover state */}
                                {React.cloneElement(service.icon, {
                                  sx: {
                                    color: hoveredServiceItem === service.id 
                                      ? (isDarkMode ? theme.palette.info.main : service.color) 
                                      : theme.palette.common.white, // White for better contrast on dark backgrounds
                                    fontSize: "1.5rem",
                                  },
                                })}
                              </IconContainer>
                              <ServiceText isHovered={hoveredServiceItem === service.id}>
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
                    darkMode={isDarkMode}
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
                    color: isDarkMode ? "common.white" : "primary.main",
                  }}
                >
                  <Typography textAlign="center">{item.label}</Typography>
                </MenuItem>
              ))}
              <MenuItem>
                <FormControlLabel
                  control={
                    <Switch
                      checked={isDarkMode}
                      onChange={handleThemeToggle}
                      color="primary"
                    />
                  }
                  label={isDarkMode ? "Light Mode" : "Dark Mode"}
                />
              </MenuItem>
            </Menu>

            {/* Theme Toggle Button */}
            <ThemeToggleButton
              darkMode={isDarkMode}
              onClick={handleThemeToggle}
              sx={{ display: { xs: "none", md: "flex" } }}
            >
              {isDarkMode ? (
                <>
                  <Brightness7Icon fontSize="small" />
                  <Typography variant="body2" fontWeight={500}>
                    Light Mode
                  </Typography>
                </>
              ) : (
                <>
                  <Brightness4Icon fontSize="small" />
                  <Typography variant="body2" fontWeight={500}>
                    Dark Mode
                  </Typography>
                </>
              )}
            </ThemeToggleButton>
          </Toolbar>
        </Container>
      </StyledAppBar>
      {/* Add toolbar placeholder to prevent content from hiding behind AppBar */}
      <Toolbar />
    </ThemeProvider>
  );
};

export default CustomHeader;