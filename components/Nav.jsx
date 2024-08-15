import Link from "next/link";

const Nav = () => {
  return (
    <nav className="bg-[#070527]  shadow-md font-sans">
      <div className="container mx-auto flex items-center  justify-between py-4 px-12">
        <div className="text-2xl font-semibold text-white leading-[36px]">
          <Link href="/">Appnova</Link>
        </div>

        <ul className="flex space-x-8 text-white">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/solutions">Solutions</Link>
          </li>
          <li>
            <Link href="/services">Services</Link>
          </li>
          <li>
            <Link href="/testimonies">Testimonies</Link>
          </li>
          <li>
            <Link href="/contact">Contact Us</Link>
          </li>
        </ul>

        {/* Get Started Button Section */}
        <div>
          <Link
            href="/get-started"
            className=" text-[#00C6C3] py-2 px-4 rounded-md "
            style={{border:"1px solid #00C6C3"}}
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
