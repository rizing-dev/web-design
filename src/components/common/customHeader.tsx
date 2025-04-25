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
  Chip,
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
// import Logo from "../../../public/customers image/Rizing Pay (1).svg";
import logo1 from "../../../public/customers image/Rizing Pay (4).svg";

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
  { id: 3, path: "/services", label: "Services" },
  { id: 4, path: "/careers", label: "Careers" },
  { id: 5, path: "/agent", label: "Become an Agent" },
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
    id: 4,
    label: "Pan Card",
    icon: <CreditCardIcon />,
    color: "#00BCD4", // Cyan
    path: "/services/pan-card",
  },
  {
    id: 5,
    label: "Insurance",
    icon: <HealthAndSafetyIcon />,
    color: "#FF9800", // Red
    path: "/services/insurance",
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
    label: "Travel Services",
    icon: <FlightIcon />,
    color: "#9C27B0", // Purple
    path: "/services/travel",
  },
];

// Styled components
const StyledAppBar = styled(AppBar)<StyledAppBarProps>(
  ({ theme, scrolled }) => ({
    background: "linear-gradient(135deg, #001F3F, #4B0082, #8A2BE2)",
    boxShadow: scrolled ? theme.shadows[4] : "none",
    transition: "background 0.3s ease, box-shadow 0.3s ease",
  })
);

const NavButton = styled(Button)<{ active: number }>(({ theme, active }) => ({
  color: "white",
  fontWeight: 500,
  fontSize: "1rem",
  marginLeft: theme.spacing(2),
  marginRight: theme.spacing(2),
  position: "relative",
  "&:hover": {
    backgroundColor: "transparent",
    color: "white",
  },
  "&::after": {
    content: '""',
    position: "absolute",
    bottom: 0,
    left: 0,
    width: active ? "100%" : "0%",
    height: "2px",
    backgroundColor: "black",
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

// Responsive styling for login chip
const LoginChip = styled(Chip)(({ theme }) => ({
  backgroundColor: "#4CAF50", // Green background
  color: "#fff", // White text
  fontWeight: "bold", // Bold text
  borderRadius: "25px", // Rounded corners
  padding: "0", // Reset padding to use MUI's default
  fontSize: "16px", // Bigger text
  boxShadow: "0px 4px 8px rgba(0,0,0,0.1)", // Subtle shadow
  transition: "all 0.3s ease", // Smooth transition on hover
  "& .MuiChip-label": {
    padding: "10px 20px", // Apply padding to the label for larger touch area
    [theme.breakpoints.down("sm")]: {
      padding: "8px 12px", // Smaller padding on mobile
      fontSize: "14px", // Smaller font on mobile
    },
  },
  "&:hover": {
    backgroundColor: "#45a049", // Slightly darker green on hover
    boxShadow: "0px 6px 10px rgba(0,0,0,0.15)", // Enhanced shadow on hover
  },
  [theme.breakpoints.down("sm")]: {
    height: "auto", // Auto height for mobile
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
  const getActiveClass = (path: string) => {
    return router.asPath === path ? 1 : 0;
  };

  // Handle login button click
  const handleLoginClick = () => {
    // Open the URL in a new tab
    window.open("https://bc.rizingpay.com/users_login", "_blank");
  };

  useEffect(() => {
    // Check if we are on a service page and highlight "Services"
    const currentPath = router.asPath;
    if (currentPath.startsWith("/services")) {
      setActiveItem(3); // Set the activeItem to the "Services" button if on a services page
    } else {
      // Reset activeItem based on the exact match for the path
      navItems.forEach((item) => {
        if (item.path === currentPath) {
          setActiveItem(item.id);
        }
      });
    }
  }, [router.asPath]);
  const formatLabel = (label: string) => {
    return label
      .toLowerCase()
      .split(/[\s-]/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
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
                src={logo1.src}
                alt="Rizing Pay Logo"
                // style={{ height: "80px", width: "auto" }}
                style={{ height: "70px", width: "100px" }} // Adjust these values as needed
              />
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
                      active={getActiveClass(item.path)}
                      aria-controls="services-menu"
                      aria-haspopup="true"
                      sx={{ textTransform: "none" }}
                      onClick={handleServiceMenuOpen}
                      onMouseEnter={handleServiceMenuOpen}
                      endIcon={
                        <KeyboardArrowDownIcon
                          sx={{
                            transform: isDropdownOpen
                              ? "rotate(180deg)"
                              : "rotate(0deg)",
                            transition: "transform 0.3s",
                            textTransform: "none",
                          }}
                        />
                      }
                    >
                      {/* {item.label} */}
                      <Typography textTransform={"none"} color="white">
                        {item.label}
                      </Typography>
                      {/* {formatLabel(item.label)} */}
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
                          backdropFilter: "blur(8px)",
                          color: "white",
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
                      {/* <Typography
                        variant="overline"
                        sx={{
                          display: "block",
                          textAlign: "center",
                          padding: "8px 16px",
                          borderRadius: "8px",
                          fontWeight: "bold",
                          boxShadow: 3,
                          backgroundImage:
                            "linear-gradient(135deg, #001F3F, #4B0082, #8A2BE2)",
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontSize: "1rem",
                        }}
                      >
                        Our Services
                      </Typography> */}
                      <Box
                        sx={{
                          backgroundImage:
                            "linear-gradient(135deg, #001F3F, #4B0082, #8A2BE2)",
                          borderRadius: "8px",
                          padding: "8px 16px",
                          textAlign: "center",
                          boxShadow: 3,
                          mb: 1, // optional margin bottom
                        }}
                      >
                        <Typography
                          variant="overline"
                          sx={{
                            color: "#FFFFFF",
                            fontWeight: "bold",
                          }}
                        >
                          Our Services
                        </Typography>
                      </Box>

                      <Grid container spacing={1} justifyContent="center">
                        {serviceItems.map((service: any) => (
                          <Grid item key={service.id}>
                            <ServiceItemBox
                              onMouseEnter={() =>
                                setHoveredServiceItem(service.id)
                              }
                              onMouseLeave={() => setHoveredServiceItem(null)}
                              onClick={() => {
                                // At This Place
                                router.push(service.path);
                                setIsDropdownOpen(false);
                              }}
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
                    active={getActiveClass(item.path)}
                    href={item.path}
                    onClick={() => setActiveItem(item.id)}
                  >
                    {item.label}
                  </NavButton>
                )
              )}
            </Box>

            {/* Login Button for Desktop */}
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <LoginChip label="Login" onClick={handleLoginClick} />
            </Box>

            {/* Mobile Menu Button */}
            <Box sx={{ display: { md: "none" }, ml: 1 }}>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="start"
                onClick={handleMobileMenuOpen}
              >
                <MenuIcon />
              </IconButton>
            </Box>

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
                  bgcolor: "linear-gradient(135deg, #5C7CA6, #9370DB, #B9A9F5)",
                },
              }}
            >
              {/* Login Button in Mobile Menu */}
              <MenuItem
                onClick={() => {
                  handleLoginClick();
                  handleMobileMenuClose();
                }}
                sx={{
                  backgroundColor: "rgba(76, 175, 80, 0.1)", // Light green background
                  borderBottom: "1px solid rgba(76, 175, 80, 0.3)", // Green border
                  margin: "8px",
                  borderRadius: "4px",
                }}
              >
                <Typography
                  sx={{
                    color: "#4CAF50",
                    fontWeight: "bold",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Login
                </Typography>
              </MenuItem>

              {navItems.map((item) =>
                item.label === "Services" ? (
                  <Box key={item.id}>
                    <MenuItem
                      onClick={toggleMobileServices}
                      sx={{
                        color:
                          "linear-gradient(135deg, #5C7CA6, #9370DB, #B9A9F5)",
                      }}
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
                    sx={{
                      color:
                        "linear-gradient(135deg, #5C7CA6, #9370DB, #B9A9F5)",
                    }}
                  >
                    <Typography textAlign="center" textTransform={"none"}>
                      {formatLabel(item.label)}
                    </Typography>
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
