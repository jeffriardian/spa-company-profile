import { motion } from 'framer-motion';

const Hero = () => (
  <section className="h-screen flex items-center justify-center bg-secondary text-white">
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="text-center"
    >
      <h2 className="text-4xl font-bold">Selamat Datang di SPA Kami</h2>
      <p className="mt-4 text-lg">Nikmati pelayanan terbaik dan relaksasi maksimal.</p>
    </motion.div>
  </section>
);
export default Hero;