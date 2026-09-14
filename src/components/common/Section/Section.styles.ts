import type { SystemStyleObject, Theme } from "@mui/system";

export const sectionStyles: Record<string, SystemStyleObject<Theme>> = {
  root: { py: { xs: 7, md: 9 } },
  heading: { mb: 4, textAlign: "left" },
  centeredHeading: { textAlign: "center" },
  title: { fontSize: { xs: 30, md: 38 }, color: "secondary.light" },
  subtitle: { mt: 1.5, lineHeight: 1.75 },
  centeredSubtitle: { maxWidth: 620, mx: "auto" },
  content: { width: "100%", mx: "auto" },
};

export function contentWidthStyle(contentMaxWidth?: number | string): SystemStyleObject<Theme> {
  return contentMaxWidth ? { ...sectionStyles.content, maxWidth: typeof contentMaxWidth === "number" ? `${contentMaxWidth}px` : contentMaxWidth } : sectionStyles.content;
}
