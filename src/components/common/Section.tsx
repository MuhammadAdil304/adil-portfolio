import { Box, Container, Typography } from "@mui/material";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

export const sectionHeadingColor = "secondary.light";

type SectionProps = PropsWithChildren<{
  id?: string;
  title: string;
  centered?: boolean;
  subtitle?: string;
  contentMaxWidth?: number | string;
}>;

export const Section = ({
  id,
  title,
  children,
  centered = false,
  subtitle,
  contentMaxWidth,
}: SectionProps) => (
  <Box component="section" id={id} sx={{ py: { xs: 7, md: 9 } }}>
    <Container maxWidth="lg">
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.4 }}
        sx={{ mb: 4, textAlign: centered ? "center" : "left" }}
      >
        <Typography variant="h3" sx={{ fontSize: { xs: 30, md: 38 }, color: sectionHeadingColor }}>
          {title}
        </Typography>
        {subtitle ? (
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              mt: 1.5,
              lineHeight: 1.75,
              maxWidth: centered ? 620 : undefined,
              mx: centered ? "auto" : undefined,
            }}
          >
            {subtitle}
          </Typography>
        ) : null}
      </Box>
      <Box
        sx={{
          width: "100%",
          ...(contentMaxWidth ? { maxWidth: contentMaxWidth, mx: "auto" } : {}),
        }}
      >
        {children}
      </Box>
    </Container>
  </Box>
);
