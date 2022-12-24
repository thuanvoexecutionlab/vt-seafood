import { TypographyOptions } from "@mui/material/styles/createTypography";
import { Montserrat } from "@next/font/google";

export const MontserratFont = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const typography: TypographyOptions = {
  fontFamily: MontserratFont.style.fontFamily,
};

export default typography;
