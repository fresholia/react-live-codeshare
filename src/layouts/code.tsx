interface LandingProps {
  children: JSX.Element;
}

const Landing = ({ children }: any): JSX.Element => {
  return <div className="code-layout">{children}</div>;
};

export default Landing;
