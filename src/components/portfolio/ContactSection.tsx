import { Email } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import { contactDetails } from "../../data/contact";
import { Section } from "../common/Section";

const email = contactDetails.find((entry) => entry.label === "Email")?.value ?? "";

export const ContactSection = () => (
  <Section
    id="contact"
    title="Contact"
    centered
    subtitle="Feel free to reach out — I'm open to freelance projects, collaborations, and full-time opportunities."
    contentMaxWidth={560}
  >
    <Box sx={{ textAlign: "center" }}>
      <Box
        sx={{
          display: "inline-flex",
          alignItems: "center",
          gap: 1.25,
          px: 0.5,
          py: 0.5,
          color: "primary.light",
        }}
      >
        <Email fontSize="small" />
        <Link
          href={`mailto:${email}`}
          underline="hover"
          color="inherit"
          sx={{ fontSize: { xs: 17, md: 19 }, fontWeight: 700, overflowWrap: "anywhere" }}
        >
          {email}
        </Link>
      </Box>
      <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
        I usually reply within 24 hours.
      </Typography>
    </Box>
  </Section>
);
