const Footer = () => {
  return (
    <footer className="bg-[#E8F5E9] font-semibold text-[#1B5E20] text-center p-4">
      <p className="text-sm">
        All rights reserved &copy; {new Date().getFullYear()}{" "}
        <a
          href="https://fajlerabbifahim.netlify.app"
          className="hover:underline"
          target="_blank"
        >
          @Fajle Rabbi Fahim
        </a>
      </p>
    </footer>
  );
};

export default Footer;
