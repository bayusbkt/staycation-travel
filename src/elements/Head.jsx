import { Helmet } from "react-helmet";

const Head = ({ children }) => {
  return (
    <Helmet>
      <title>{children}</title>
      <link rel="icon" type="image/png" href="../../public/website_icon.png" />
    </Helmet>
  );
};



export default Head;
