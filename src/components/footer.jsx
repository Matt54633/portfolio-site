const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="col mb-[4.5rem] mt-[2.5rem] flex justify-between text-[1rem]">
      <p className="font-[500]">&copy;Matt Sullivan - {currentYear}</p>
      <a
        className="font-[700] underline transition hover:text-primary-blue"
        href="/portfolioPrivacyPolicy">
        Privacy Policy
      </a>
    </footer>
  );
};

export default Footer;
