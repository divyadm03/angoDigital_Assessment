const Footer = () => {
  return (
    <div className="bg-gray-200 text-center w-full p-3 border border-t-2 block z-[1010] fixed bottom-0">
      <h1 className="text-md">&copy; Copyright {new Date().getFullYear()}</h1>
    </div>
  );
};

export default Footer;
