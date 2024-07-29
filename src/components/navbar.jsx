import { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      style={{ 
        backdropFilter: isScrolled ? 'blur(12px)' : 'none',
        WebkitBackdropFilter: isScrolled ? 'blur(12px) contrast(86%)' : 'none',
        backgroundColor: isScrolled ? '' : 'rgba(44, 44, 44, 0.74)'
      }} 
      className="md-py-2  sticky top-4 z-10 m-0 flex justify-between rounded-xl px-3.5 py-2.5 text-[1.3rem] font-bold text-light-blue md:text-[1.2rem]"
    >
      <h1 className="hover:text-primary-blue transition"><a href="/">Matt Sullivan</a></h1>
      <a href="https://github.com/matt54633/" target="blank" className="flex items-center">
        <img
          src="/github.svg"
          alt="Github Logo"
          className="h-7 w-7 transition duration-200 ease-in-out hover:scale-110"
        />
      </a>
    </nav>
  );
};

export default Navbar;