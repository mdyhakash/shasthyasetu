const Footer = () => {
  return (
    <footer className="bg-green-200 text-green-800 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-bold">ShasthyaSetu</h4>
            <p className="mt-2 text-Black">
              Your trusted partner in pharmacy and medical care.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="mt-2 space-y-2 text-green-800">
              <li className="cursor-pointer">Home</li>
              <li className="cursor-pointer">About</li>
              <li className="cursor-pointer">Services</li>
              <li className="cursor-pointer">Contact</li>
            </ul>
          </div>
          <div className="text-green-800">
            <h4 className="text-lg font-bold">Contact Us</h4>
            <p className="mt-2 ">(+54) 746-33986</p>
            <p className="">info@ShasthyaSetu.com</p>
            <p className="">Office Hours: 8:00 AM - 9:00 PM</p>
          </div>
        </div>

        <div className="mt-12 text-center text-green-800 text-sm">
          © {new Date().getFullYear()} ShasthyaSetu. All rights reserved by UAP_Team_Hiking.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
