interface LandingProps {
  children: JSX.Element;
}

const Landing = ({ children }: any): JSX.Element => {
  return <div className="landing">{children}</div>;
};

export default Landing;
