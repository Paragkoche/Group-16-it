import { CssBaseline, CssVarsProvider, StyledEngineProvider } from "@mui/joy";
import "./style.css";
const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <StyledEngineProvider injectFirst>
          <CssBaseline />
          <CssVarsProvider>{children}</CssVarsProvider>
        </StyledEngineProvider>
      </body>
    </html>
  );
};

export default layout;
