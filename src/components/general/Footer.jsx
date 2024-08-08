const Footer = () => {
  const thisYear = new Date().getFullYear();

  return (
    <footer className="w-full text-center py-6 border-t-1 text-sm text-slate-500">
      <p>
        &copy; <time dateTime="2024">{thisYear}</time> - Easy Wash Laundry
      </p>
    </footer>
  );
};

export default Footer;
