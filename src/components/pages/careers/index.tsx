"use client";
// pages/careers.js
import React, { useState } from "react";
import Head from "next/head";
import {
  Container,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  CardActions,
  Button,
  Chip,
  Tab,
  Tabs,
  TextField,
  InputAdornment,
  Divider,
  useTheme,
  useMediaQuery,
  Paper,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WorkIcon from "@mui/icons-material/Work";
import PublicIcon from "@mui/icons-material/Public";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import SendIcon from "@mui/icons-material/Send";
import CodeIcon from "@mui/icons-material/Code";
import BrushIcon from "@mui/icons-material/Brush";
import CampaignIcon from "@mui/icons-material/Campaign";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import StorefrontIcon from "@mui/icons-material/Storefront";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import HeadsetMicIcon from "@mui/icons-material/HeadsetMic";

// Sample job listings data
const jobListings = [
  {
    id: 1,
    title: "UI/UX Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Design intuitive and delightful user experiences across mobile and web platforms with a strong focus on user research and interaction design.",
    skills: ["Figma", "User Flows", "Prototyping", "Design Systems"],
  },
  {
    id: 2,
    title: "CRM Specialist",
    department: "Marketing",
    location: "Bengaluru",
    type: "Full-time",
    description:
      "Manage and optimize CRM platforms to enhance customer engagement, retention, and conversion through data-driven campaigns.",
    skills: [
      "Salesforce",
      "Email Marketing",
      "Customer Segmentation",
      "Automation",
    ],
  },
  {
    id: 3,
    title: "Telecom Sales Executive",
    department: "Sales",
    location: "Delhi",
    type: "Full-time",
    description:
      "Lead B2B and B2C telecom product sales by engaging clients, identifying needs, and driving revenue growth across regional markets.",
    skills: [
      "B2B Sales",
      "Customer Acquisition",
      "Lead Generation",
      "Negotiation",
    ],
  },
  {
    id: 4,
    title: "Marketing Executive",
    department: "Marketing",
    location: "Mumbai",
    type: "Full-time",
    description:
      "Execute multi-channel marketing campaigns and help drive brand awareness and product adoption through creative strategies.",
    skills: ["Campaign Management", "Content Strategy", "SEO", "Analytics"],
  },
  {
    id: 5,
    title: "Accounts & Finance Analyst",
    department: "Finance",
    location: "Hyderabad",
    type: "Full-time",
    description:
      "Handle financial planning, reporting, and compliance while supporting budgeting and internal audits.",
    skills: ["Tally", "GST Filing", "Financial Reporting", "Budgeting"],
  },
  {
    id: 6,
    title: "Insurance Advisor",
    department: "Insurance",
    location: "Chennai",
    type: "Full-time",
    description:
      "Guide clients on insurance options, manage policy renewals, and ensure compliance with industry standards.",
    skills: [
      "Risk Assessment",
      "Policy Sales",
      "Client Servicing",
      "IRDA Compliance",
    ],
  },
  {
    id: 7,
    title: "Support Executive",
    department: "Support",
    location: "Remote",
    type: "Full-time",
    description:
      "Deliver prompt, empathetic customer support and resolve queries across digital and voice channels.",
    skills: [
      "Customer Service",
      "Ticketing Systems",
      "Communication",
      "Issue Resolution",
    ],
  },
  {
    id: 8,
    title: "Software Developer - AI/ML & Deep Learning",
    department: "Engineering",
    location: "Bengaluru",
    type: "Full-time",
    description:
      "Develop intelligent systems using deep learning frameworks for computer vision, NLP, and predictive modeling applications.",
    skills: ["Python", "TensorFlow", "PyTorch", "Machine Learning"],
  },
];

// Department icons mapping
const departmentIcons: any = {
  Engineering: <CodeIcon />,
  Design: <BrushIcon />, // previously PublicIcon
  Product: <BusinessCenterIcon />,
  Marketing: <CampaignIcon />,
  Finance: <AccountBalanceIcon />,
  Sales: <StorefrontIcon />,
  Insurance: <VerifiedUserIcon />,
  Support: <HeadsetMicIcon />,
};

export default function CareersPage() {
  const [tabValue, setTabValue] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const departmentTabs = [
    "All",
    "Engineering",
    "Design",
    "Sales",
    "Marketing",
    "Finance",
    "Insurance",
    "Support",
  ];

  const filteredJobs = jobListings.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some((skill) =>
        skill.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const selectedDept = departmentTabs[tabValue];

    if (selectedDept === "All") return matchesSearch;
    return job.department === selectedDept && matchesSearch;
  });

  const handleTabChange = (event: any, newValue: any) => {
    setTabValue(newValue);
  };

  return (
    <>
      <Head>
        <title>Careers | Fintech B2B Services</title>
        <meta
          name="description"
          content="Join our team and help shape the future of B2B fintech services including AePS, DMT, and mATM solutions."
        />
      </Head>

      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, #001F3F, #4B0082)`,
          color: "white",
          py: 8,
          position: "relative",
          overflow: "hidden",
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                fontWeight="bold"
              >
                Join Our Fintech Revolution
              </Typography>
              <Typography variant="h5" paragraph>
                Help us transform B2B payment solutions across BHARAT
              </Typography>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              sx={{ display: { xs: "none", md: "block" } }}
            >
              <Box
                component="svg"
                viewBox="0 0 800 600"
                xmlns="http://www.w3.org/2000/svg"
                sx={{
                  width: "100%",
                  maxWidth: 400,
                  display: "block",
                  mx: "auto",
                }}
              >
                {/* SVG contents go here */}
                <defs>
                  <linearGradient
                    id="bgGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#e6f7ff" />
                    <stop offset="100%" stopColor="#f0f7ff" />
                  </linearGradient>
                  <linearGradient
                    id="cardGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#f5f5f5" />
                  </linearGradient>
                  <filter
                    id="shadow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feDropShadow
                      dx="0"
                      dy="4"
                      stdDeviation="10"
                      floodOpacity="0.2"
                    />
                  </filter>
                </defs>

                {/* Background */}
                <rect
                  x="0"
                  y="0"
                  width="800"
                  height="600"
                  fill="url(#bgGradient)"
                />

                {/* Abstract network lines */}
                <g stroke="#2196f3" strokeWidth="1.5" opacity="0.2">
                  <line x1="100" y1="150" x2="300" y2="100" />
                  <line x1="300" y1="100" x2="500" y2="200" />
                  <line x1="500" y1="200" x2="700" y2="150" />
                  <line x1="700" y1="150" x2="600" y2="350" />
                  <line x1="600" y1="350" x2="400" y2="400" />
                  <line x1="400" y1="400" x2="200" y2="350" />
                  <line x1="200" y1="350" x2="100" y2="150" />
                  <line x1="300" y1="100" x2="200" y2="350" />
                  <line x1="500" y1="200" x2="400" y2="400" />
                  <line x1="700" y1="150" x2="400" y2="400" />
                </g>

                {/* Main credit card element */}
                <g transform="translate(350, 250)">
                  <rect
                    x="-150"
                    y="-100"
                    width="300"
                    height="180"
                    rx="15"
                    ry="15"
                    fill="url(#cardGradient)"
                    filter="url(#shadow)"
                  />
                  <rect
                    x="-130"
                    y="-50"
                    width="60"
                    height="40"
                    rx="5"
                    ry="5"
                    fill="#ffb74d"
                    opacity="0.8"
                  />
                  <rect
                    x="-130"
                    y="10"
                    width="260"
                    height="30"
                    rx="5"
                    ry="5"
                    fill="#e0e0e0"
                  />
                  <rect
                    x="-130"
                    y="-80"
                    width="100"
                    height="20"
                    rx="3"
                    ry="3"
                    fill="#e0e0e0"
                  />
                </g>

                {/* Floating elements - coins */}
                <g>
                  <circle
                    cx="200"
                    cy="200"
                    r="25"
                    fill="#ffd54f"
                    stroke="#f57c00"
                    strokeWidth="3"
                  />
                  <text
                    x="200"
                    y="205"
                    fontFamily="Arial"
                    fontSize="20"
                    textAnchor="middle"
                    fill="#f57c00"
                  >
                    ₹
                  </text>
                </g>
                <g>
                  <circle
                    cx="600"
                    cy="180"
                    r="25"
                    fill="#ffd54f"
                    stroke="#f57c00"
                    strokeWidth="3"
                  />
                  <text
                    x="600"
                    y="185"
                    fontFamily="Arial"
                    fontSize="20"
                    textAnchor="middle"
                    fill="#f57c00"
                  >
                    ₹
                  </text>
                </g>
                <g>
                  <circle
                    cx="500"
                    cy="400"
                    r="25"
                    fill="#ffd54f"
                    stroke="#f57c00"
                    strokeWidth="3"
                  />
                  <text
                    x="500"
                    y="405"
                    fontFamily="Arial"
                    fontSize="20"
                    textAnchor="middle"
                    fill="#f57c00"
                  >
                    ₹
                  </text>
                </g>

                {/* Mobile banking icon */}
                <g transform="translate(180, 320)">
                  <rect
                    x="-30"
                    y="-50"
                    width="60"
                    height="100"
                    rx="5"
                    ry="5"
                    fill="#3f51b5"
                    filter="url(#shadow)"
                  />
                  <rect
                    x="-25"
                    y="-45"
                    width="50"
                    height="70"
                    rx="2"
                    ry="2"
                    fill="#ffffff"
                  />
                  <rect
                    x="-15"
                    y="35"
                    width="30"
                    height="8"
                    rx="4"
                    ry="4"
                    fill="#e0e0e0"
                  />
                  <circle cx="0" cy="-20" r="15" fill="#e1f5fe" />
                  <path
                    d="M-8,-20 L-3,-15 L8,-26"
                    stroke="#00acc1"
                    strokeWidth="2"
                    fill="none"
                  />
                </g>

                {/* Chart element */}
                <g transform="translate(600, 320)">
                  <rect
                    x="-50"
                    y="-50"
                    width="100"
                    height="100"
                    rx="10"
                    ry="10"
                    fill="#ffffff"
                    filter="url(#shadow)"
                  />
                  <line
                    x1="-35"
                    y1="35"
                    x2="-35"
                    y2="-35"
                    stroke="#9e9e9e"
                    strokeWidth="1"
                  />
                  <line
                    x1="-35"
                    y1="35"
                    x2="35"
                    y2="35"
                    stroke="#9e9e9e"
                    strokeWidth="1"
                  />
                  <polyline
                    points="-30,15 -15,-5 0,25 15,-15 30,5"
                    stroke="#4caf50"
                    strokeWidth="3"
                    fill="none"
                  />
                  <polyline
                    points="-30,25 -15,10 0,30 15,0 30,15"
                    stroke="#2196f3"
                    strokeWidth="3"
                    fill="none"
                    opacity="0.6"
                  />
                </g>

                {/* People silhouettes representing careers */}
                <g transform="translate(400, 480)">
                  {/* Person 1 */}
                  <circle cx="-100" cy="-30" r="20" fill="#5c6bc0" />
                  <rect
                    x="-110"
                    y="-7"
                    width="20"
                    height="40"
                    rx="5"
                    ry="5"
                    fill="#5c6bc0"
                  />
                  {/* Person 2 */}
                  <circle cx="0" cy="-40" r="25" fill="#26a69a" />
                  <rect
                    x="-15"
                    y="-10"
                    width="30"
                    height="50"
                    rx="7"
                    ry="7"
                    fill="#26a69a"
                  />
                  {/* Person 3 */}
                  <circle cx="100" cy="-30" r="20" fill="#ec407a" />
                  <rect
                    x="90"
                    y="-7"
                    width="20"
                    height="40"
                    rx="5"
                    ry="5"
                    fill="#ec407a"
                  />
                </g>

                {/* Connection lines between elements */}
                <g
                  stroke="#2196f3"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                  opacity="0.5"
                >
                  <line x1="200" y1="200" x2="180" y2="320" />
                  <line x1="500" y1="400" x2="600" y2="320" />
                  <line x1="600" y1="180" x2="600" y2="270" />
                </g>

                {/* Small decorative elements */}
                <g fill="#4caf50">
                  <circle cx="150" cy="120" r="8" />
                  <circle cx="650" cy="100" r="8" />
                  <circle cx="720" cy="300" r="8" />
                  <circle cx="80" cy="400" r="8" />
                </g>

                {/* Small code symbols */}
                <g fontFamily="monospace" fontSize="12" fill="#616161">
                  <text x="120" y="350">
                    {"{code}"}
                  </text>
                  <text x="680" y="250">
                    {"</>"}
                  </text>
                  <text x="250" y="150">
                    function()
                  </text>
                </g>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Culture Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Our Culture
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          What makes working at our fintech company different
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{ height: "100%", p: 3, textAlign: "center" }}
            >
              <Box sx={{ color: "primary.main", fontSize: 60, mb: 2 }}>🚀</Box>
              <Typography variant="h6" gutterBottom>
                Innovation First
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We empower teams to explore bold ideas and revolutionize fintech
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{ height: "100%", p: 3, textAlign: "center" }}
            >
              <Box sx={{ color: "primary.main", fontSize: 60, mb: 2 }}>🤝</Box>
              <Typography variant="h6" gutterBottom>
                Collaborative Spirit
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Cross-functional teamwork drives our success in complex B2B
                solutions
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{ height: "100%", p: 3, textAlign: "center" }}
            >
              <Box sx={{ color: "primary.main", fontSize: 60, mb: 2 }}>🌱</Box>
              <Typography variant="h6" gutterBottom>
                Growth Mindset
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Continuous learning and development are core to our identity
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Paper
              elevation={2}
              sx={{ height: "100%", p: 3, textAlign: "center" }}
            >
              <Box sx={{ color: "primary.main", fontSize: 60, mb: 2 }}>🎯</Box>
              <Typography variant="h6" gutterBottom>
                Impact Driven
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We measure success by the positive change we create in the
                fintech ecosystem
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>

      {/* Open Positions Section */}
      <Box sx={{ bgcolor: "grey.50", py: 8 }}>
        <Container maxWidth="lg">
          <Typography variant="h3" component="h2" align="center" gutterBottom>
            Open Positions
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="text.secondary"
            paragraph
          >
            Find your perfect role in our growing team
          </Typography>

          {/* Search field */}
          <Box sx={{ my: 4, display: "flex", justifyContent: "center" }}>
            <TextField
              placeholder="Search for roles, skills or keywords"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              sx={{ width: { xs: "100%", md: "60%" } }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* Department tabs */}
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            variant={isMobile ? "scrollable" : "fullWidth"}
            scrollButtons={isMobile ? "auto" : false}
            sx={{ mb: 4 }}
          >
            {departmentTabs.map((dept, index) => (
              <Tab key={index} label={dept} />
            ))}
          </Tabs>

          {/* Job listings */}
          <Grid container spacing={3}>
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Grid item xs={12} md={6} lg={4} key={job.id}>
                  <Card
                    elevation={3}
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      borderRadius: 3,
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                      "&:hover": {
                        transform: "translateY(-6px)",
                        boxShadow: 10,
                      },
                    }}
                  >
                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        {departmentIcons[job.department]}
                        <Typography
                          variant="overline"
                          color="text.secondary"
                          sx={{ ml: 1, fontWeight: 500 }}
                        >
                          {job.department}
                        </Typography>
                      </Box>

                      <Typography
                        variant="h6"
                        component="h3"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                      >
                        {job.title}
                      </Typography>

                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 1,
                          mb: 2,
                        }}
                      >
                        <Chip
                          size="small"
                          icon={<LocationOnIcon />}
                          label={job.location}
                          //   variant="soft"
                          sx={{ bgcolor: "#f0f4ff", color: "#1e3a8a" }}
                        />
                        <Chip
                          size="small"
                          icon={<WorkIcon />}
                          label={job.type}
                          //   variant="soft"
                          sx={{ bgcolor: "#fef9c3", color: "#92400e" }}
                        />
                      </Box>

                      <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                      >
                        {job.description.length > 100
                          ? job.description.slice(0, 100) + "..."
                          : job.description}
                      </Typography>

                      <Typography variant="subtitle2" sx={{ fontWeight: 500 }}>
                        Skills:
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: 0.5,
                          mt: 1,
                        }}
                      >
                        {job.skills.map((skill, idx) => (
                          <Chip
                            key={idx}
                            label={skill}
                            size="small"
                            sx={{
                              bgcolor: "primary.light",
                              color: "primary.contrastText",
                              fontSize: "0.75rem",
                              borderRadius: 1,
                            }}
                          />
                        ))}
                      </Box>
                    </CardContent>
                    <Divider />
                    <CardActions
                      sx={{ justifyContent: "flex-end", px: 3, py: 2 }}
                    >
                      <Button
                        size="medium"
                        variant="contained"
                        color="primary"
                        endIcon={<SendIcon />}
                        sx={{
                          textTransform: "none",
                          fontWeight: 500,
                          boxShadow: "none",
                          "&:hover": {
                            boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                          },
                        }}
                      >
                        Apply Now
                      </Button>
                    </CardActions>
                  </Card>
                </Grid>
              ))
            ) : (
              <Grid item xs={12}>
                <Paper sx={{ p: 4, textAlign: "center" }}>
                  <Typography variant="h6">
                    No positions found matching your search criteria
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mt: 1 }}
                  >
                    Try adjusting your search or browse all open positions
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    sx={{ mt: 2 }}
                    onClick={() => {
                      setSearchTerm("");
                      setTabValue(0);
                    }}
                  >
                    View All Positions
                  </Button>
                </Paper>
              </Grid>
            )}
          </Grid>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container maxWidth="lg" sx={{ my: 8 }}>
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Benefits & Perks
        </Typography>
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          paragraph
          sx={{ mb: 6 }}
        >
          We take care of our team so they can focus on revolutionizing fintech
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center", mb: { xs: 3, md: 0 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  p: 2,
                  borderRadius: "50%",
                  bgcolor: "primary.light",
                  color: "primary.main",
                  mb: 2,
                }}
              >
                <AccountBalanceIcon fontSize="large" />
              </Box>
              <Typography variant="h6" gutterBottom>
                Competitive Compensation
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Market-leading salary packages and ESOP options for all
                full-time employees
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center", mb: { xs: 3, md: 0 } }}>
              <Box
                sx={{
                  display: "inline-flex",
                  p: 2,
                  borderRadius: "50%",
                  bgcolor: "primary.light",
                  color: "primary.main",
                  mb: 2,
                }}
              >
                <WorkIcon fontSize="large" />
              </Box>
              <Typography variant="h6" gutterBottom>
                Flexible Work Environment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Remote-first policy with options for hybrid work at our tech
                hubs
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ textAlign: "center" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  p: 2,
                  borderRadius: "50%",
                  bgcolor: "primary.light",
                  color: "primary.main",
                  mb: 2,
                }}
              >
                <PublicIcon fontSize="large" />
              </Box>
              <Typography variant="h6" gutterBottom>
                Learning & Development
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Dedicated budget for professional growth and industry
                conferences
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Join Us CTA */}
      <Box
        sx={{
          bgcolor: "secondary.dark",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Container maxWidth="md">
          <Typography variant="h3" component="h2" gutterBottom>
            Ready to Shape the Future of Fintech?
          </Typography>
          <Typography variant="h6" paragraph sx={{ mb: 4 }}>
            Join our innovative team and help revolutionize B2B payment
            solutions across India
          </Typography>
        </Container>
      </Box>
    </>
  );
}
