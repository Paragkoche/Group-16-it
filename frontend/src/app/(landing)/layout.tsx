import "./style/globule.css";
import "./style/style.css";
const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <html
      lang="en"
      className="js sizes customelements history pointerevents postmessage webgl websockets cssanimations csscolumns csscolumns-width csscolumns-span csscolumns-fill csscolumns-gap csscolumns-rule csscolumns-rulecolor csscolumns-rulestyle csscolumns-rulewidth csscolumns-breakbefore csscolumns-breakafter csscolumns-breakinside flexbox picture srcset webworkers"
    >
      <body>{children}</body>
    </html>
  );
};

export default Layout;
