import React from 'react';
import { FaClock, FaHeartbeat, FaUsers } from 'react-icons/fa';

const features = [
  {
    icon: <FaUsers className="text-3xl text-indigo-600" />,
    title: "50+ Expert Doctor",
    description: "Our team includes over 50 highly skilled doctors."
  },
  {
    icon: <FaClock className="text-3xl text-indigo-600" />,
    title: "24/7 Instant Support",
    description: "We ensure you receive prompt and effective care."
  },
  {
    icon: <FaHeartbeat className="text-3xl text-indigo-600" />,
    title: "Expert Medical Team",
    description: "Helping you manage your health at every stage of life."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="w-full bg-white py-16 px-12 md:px-12 lg:px-24">
      <div className="mx-auto flex flex-col md:flex-row items-start justify-between">
        {/* Left Side Content */}
        <div className="md:w-1/2 text-left max-w-[600px]">
          <h3 className="text-indigo-600 text-lg font-semibold flex items-center gap-2">
            <span role="img" aria-label="stethoscope">🩺</span> Why Choose Us
          </h3>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Why patients trust us with their care
          </h2>
          <p className="text-gray-600 mt-4">
            Our commitment to excellence, compassion, and personalized treatment
            has earned the trust of countless patients. Discover what sets our care apart.
          </p>
        </div>

        {/* Right Side List */}
        <div className="mt-10 md:w-1/2 text-left max-w-[600px]">
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center gap-2">✔️ We offer flexible hours to fit your busy schedule.</li>
            <li className="flex items-center gap-2">✔️ Our team is committed to making you feel comfortable.</li>
            <li className="flex items-center gap-2">✔️ We ensure you receive prompt and effective care.</li>
            <li className="flex items-center gap-2">✔️ Helping you manage your health at every stage of life.</li>
          </ul>
        </div>
      </div>

      <div className='mt-10 rounded-3xl overflow-hidden relative'>
        <img
          src="/images/doctorInWard.jpg"
          alt="Medical Team"
          className="w-full h-[500px] object-cover max-w-[1200px] mx-auto"
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
            ▶️
          </div>
        </button>
      </div>

      <div className='mt-6 grid md:grid-cols-3 gap-6 max-w-[1200px] mx-auto'>
        {features.map((feature, index) => (
          <div
            key={index}
            className="p-6 bg-indigo-50 rounded-2xl text-center shadow-sm"
          >
            <div className="flex justify-center mb-3">{feature.icon}</div>
            <h4 className="font-semibold text-lg">{feature.title}</h4>
            <p className="text-gray-600 text-sm mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;