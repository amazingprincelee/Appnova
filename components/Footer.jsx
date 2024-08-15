import { FaLinkedinIn, FaXing, FaFacebookF } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#0a0a23] text-white py-12">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-5 gap-8"  style={{width:"1500px"}}>
        <div className="md:col-span-2">
          <h2 className="text-xl font-bold mb-4">Appnovia</h2>
          <p className="mb-4">
            Creating cutting-edge & future-proof digital solutions for you.
          </p>
          <address className="text-sm not-italic">
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
              <FaXing size={16} />
            </a>
            <a
              href="#"
              className="bg-white text-[#0a0a23] p-2 rounded-full hover:bg-[#0a0a23] hover:text-white transition-colors"
            >
              <FaFacebookF size={16} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-bold mb-4">Products</h3>
          <ul>
            <li><a href="#" className="hover:underline">Novia Care</a></li>
            <li><a href="#" className="hover:underline">Novia Book</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Services</h3>
          <ul>
            <li><a href="#" className="hover:underline">Enterprise Resource Planning</a></li>
            <li><a href="#" className="hover:underline">Human Resource</a></li>
            <li><a href="#" className="hover:underline">Inventory Management</a></li>
            <li><a href="#" className="hover:underline">Ecommerce</a></li>
            <li><a href="#" className="hover:underline">Electronic Medical Record</a></li>
            <li><a href="#" className="hover:underline">Learning Management System</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Company</h3>
          <ul>
            <li><a href="#" className="hover:underline">About Us</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-4">Legal</h3>
          <ul>
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms of Service</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
