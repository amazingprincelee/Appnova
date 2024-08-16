import { FaLinkedinIn, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a23] text-white py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="md:col-span-2 lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Appnovia</h2>
          <p className="mb-4">
            Creating cutting-edge & future-proof digital solutions for you.
          </p>
          <address className="text-sm not-italic mb-4">
            4A Etim Okpoyo Close, Furniture Square, after Total Filling Station
            By Aba Express Road, Port Harcourt, Rivers
          </address>
          <div className="flex space-x-4 mt-6">
            <a
              href="#"
              className="bg-white text-[#0a0a23] p-2 rounded-full hover:bg-[#0a0a23] hover:text-white transition-colors"
            >
              <FaLinkedinIn size={16} />
            </a>
            <a
              href="#"
              className="bg-white text-[#0a0a23] p-2 rounded-full hover:bg-[#0a0a23] hover:text-white transition-colors"
            >
              <FaTwitter size={16} />
            </a>
            <a
              href="#"
              className="bg-white text-[#0a0a23] p-2 rounded-full hover:bg-[#0a0a23] hover:text-white transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="font-bold mb-2">Products</h3>
          <ul className="space-y-2 text-sm">
            <li>Novia Care</li>
            <li>Novia Book</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="font-bold mb-2">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>Enterprise Resource Planning</li>
            <li>Human Resource</li>
            <li>Inventory Management</li>
            <li>Ecommerce</li>
            <li>Electronic Medical Record</li>
            <li>Learning Management System</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="font-bold mb-2">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="flex flex-col space-y-4">
          <h3 className="font-bold mb-2">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
