import { FaRegHospital, FaChartLine, FaBoxes, FaSchool, FaShoppingCart, FaBook } from 'react-icons/fa';

const Services = () => {
  const services = [
    {
      icon: <FaRegHospital size={32} />,
      title: 'EMR Solutions',
      description: 'Streamline patient care with our advanced electronic medical records system',
    },
    {
      icon: <FaChartLine size={32} />,
      title: 'Financial Management',
      description: 'Optimize your financial processes with our software, designed for accuracy and efficiency in all aspects of finance',
    },
    {
      icon: <FaBoxes size={32} />,
      title: 'ERP Systems',
      description: 'Centralize and simplify your business operations with our integrated ERP solutions',
    },
    {
      icon: <FaSchool size={32} />,
      title: 'School Management',
      description: 'Enhance educational administration with our comprehensive school management tools',
    },
    {
      icon: <FaShoppingCart size={32} />,
      title: 'E-Commerce',
      description: 'Drive online sales and improve customer experience with our tailored e-commerce solutions',
    },
    {
      icon: <FaBook size={32} />,
      title: 'E-Book Services',
      description: 'Expand your digital content offerings with our platform, making e-books more accessible and engaging',
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-6 md:px-12 text-center" style={{width: "900px"}}>
        <h2 className="text-2xl md:text-3xl font-bold mb-12">Unique Software Solutions for Your Businesses</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="p-6 bg-gray-50 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-primary mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
