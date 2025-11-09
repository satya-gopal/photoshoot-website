import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import { Header } from "../Desktop/Header";
import Footer from "../Desktop/Footer";

export const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="relative w-full h-[300px] md:h-[400px] bg-[#0d1c28] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-['Playfair',Helvetica] font-light text-white text-4xl md:text-6xl lg:text-7xl tracking-[0] leading-tight mb-4">
            Contact Us
          </h1>
          <p className="font-['Montserrat',Helvetica] font-medium text-white text-base md:text-lg tracking-[0] leading-[normal]">
            We'd Love to Hear From You
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="font-['Playfair',Helvetica] text-3xl md:text-4xl font-light text-[#0d1c28] mb-4">
                Get In Touch
              </h2>
              <p className="font-['Montserrat',Helvetica] text-gray-600 leading-relaxed">
                Have a question or want to book a session? Fill out the form and
                we'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0d1c28] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0d1c28] text-lg mb-1">
                    Phone
                  </h3>
                  <p className="font-['Montserrat',Helvetica] text-gray-600">
                    +91 9000375893 || +91 9000375863
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0d1c28] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0d1c28] text-lg mb-1">
                    Email
                  </h3>
                  <p className="font-['Montserrat',Helvetica] text-gray-600">
                  info@shootingzonehyderabad.com
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-[#0d1c28] rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0d1c28] text-lg mb-1">
                    Location
                  </h3>
                  <p className="font-['Montserrat',Helvetica] text-gray-600">
                    Door No: 25-35/3/D, 5th Floor, Sekhar Archade IT Cell,
                    Mumbai High Way 65, RC Reddy Colony
                    <br />
                    Near Beeramguda Kaman, Hyderabad - 502032.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-gray-50 rounded-lg">
              <h3 className="font-['Poppins',Helvetica] font-semibold text-[#0d1c28] text-xl mb-3">
                Studio Hours
              </h3>
              <div className="space-y-2 font-['Montserrat',Helvetica] text-gray-600">
                <p className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">Closed</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 md:p-8 rounded-lg">
            <h2 className="font-['Playfair',Helvetica] text-2xl md:text-3xl font-light text-[#0d1c28] mb-6">
              Send Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block font-['Poppins',Helvetica] font-medium text-[#0d1c28] mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent transition-all font-['Montserrat',Helvetica]"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block font-['Poppins',Helvetica] font-medium text-[#0d1c28] mb-2"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent transition-all font-['Montserrat',Helvetica]"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block font-['Poppins',Helvetica] font-medium text-[#0d1c28] mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent transition-all font-['Montserrat',Helvetica]"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block font-['Poppins',Helvetica] font-medium text-[#0d1c28] mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent transition-all font-['Montserrat',Helvetica]"
                  placeholder="What's this about?"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block font-['Poppins',Helvetica] font-medium text-[#0d1c28] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent transition-all resize-none font-['Montserrat',Helvetica]"
                  placeholder="Tell us more about what you need..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#0d1c28] text-white py-3 px-6 rounded-lg font-['Poppins',Helvetica] font-semibold hover:bg-[#1a2f3f] transition-colors flex items-center justify-center gap-2"
              >
                <span>Send Message</span>
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 w-full h-[300px] md:h-[400px] bg-gray-200 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3804.958493260812!2d78.2990164!3d17.509494699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb939d6cb7c611%3A0x6c5b86d986ca1e93!2sShooting%20Zone%20Hyderabad!5e0!3m2!1sen!2sin!4v1761116396637!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Baby Shooting Zone Location"
          ></iframe>
        </div>
      </div>

      {/* Floating WhatsApp & Call Icons */}
      <div className="fixed bottom-20 right-8 flex flex-col gap-12 z-50">
        {/* Phone Icon */}
        <a
          href="tel:+919000375893"
          className="relative w-14 h-14 rounded-full flex items-center justify-center bg-[#007bff] text-white shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Call Us"
        >
          <span className="absolute inset-0 rounded-full animate-ripple bg-[#007bff]/40"></span>
          <Phone className="w-6 h-6 relative z-10" />
        </a>

        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/9000375863"
          target="_blank"
          rel="noopener noreferrer"
          className="relative w-14 h-14 rounded-full flex items-center justify-center bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Chat on WhatsApp"
        >
          <span className="absolute inset-0 rounded-full animate-ripple bg-[#25D366]/40"></span>
          <svg viewBox="0 0 24 24" className="w-7 h-7  fill-white">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>
      </div>

      <Footer />
    </div>
  );
};
