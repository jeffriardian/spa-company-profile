const Services = () => (
  <section id="services" className="py-20 bg-white">
    <h2 className="text-3xl font-bold text-center mb-10">Layanan Kami</h2>
    <div className="grid md:grid-cols-3 gap-8 px-4">
      {['Massage', 'Creambath', 'Facial'].map((service) => (
        <div key={service} className="p-6 border rounded-lg shadow hover:shadow-lg transition">
          <h3 className="text-xl font-semibold">{service}</h3>
          <p className="mt-2 text-gray-600">Deskripsi singkat layanan {service}.</p>
        </div>
      ))}
    </div>
  </section>
);
export default Services;