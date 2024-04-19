const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="col mb-[4.5rem] mt-[2.5rem] text-[1rem] flex justify-between">
      <p className="font-[500]">&copy;Matt Sullivan - {currentYear}</p>
      <a
        className="font-[700] underline transition hover:text-primary-blue"
        target="_blank"
        href="https://www.privacypolicies.com/live/92a704fb-cf22-45ad-9660-59fbfac3cda9"
        rel="noreferrer">
        Privacy Policy
      </a>
    </footer>
  );
};

export default Footer;
