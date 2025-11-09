import { X } from "lucide-react";
import { useState } from "react";

interface PreRegisterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PreRegisterModal = ({ isOpen, onClose }: PreRegisterModalProps) => {
      const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        gender: "",
        photoshootType: "",
        preferredDate: "",
        preferredTime: "",
        participants: "",
        locationType: "",
        locationAddress: "",
        specialRequests: "",
        photographer: "",
        package: "",
        termsAccepted: false,
        marketingConsent: false,
      });
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        alert("Pre-registration submitted successfully!");
        onClose();
      };
    
      const handleChange = (e: any) => {
        const { name, value, type } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: type === "checkbox" ? e.target.checked : value,
        }));
      };
    
      if (!isOpen) return null;
    
      return (
        <div className="fixed inset-0 z-50 flex items-end justify-center">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
    
          <div
            className={`relative max-w-[1440px] w-full bg-white rounded-t-3xl shadow-2xl transform transition-all duration-500 ease-out
            ${isOpen ? "translate-y-0" : "translate-y-full"}
            h-[75vh] sm:h-[80vh] overflow-hidden flex flex-col`}
          >
            <div className=" sticky top-0 z-10 bg-gradient-to-r from-[#0d1c28] to-[#1a3a4a] px-4 sm:px-6 md:px-8 py-4 sm:py-5 flex items-center justify-between shadow-lg">
              <div>
                <h2 className="font-['Playfair',Helvetica] text-xl sm:text-2xl md:text-3xl font-semibold text-white">
                  Pre-Registration
                </h2>
                <p className="font-['Montserrat',Helvetica] text-xs sm:text-sm text-gray-300 mt-1">
                  Reserve your perfect photo session
                </p>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Close"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </button>
            </div>
    
            <div className="flex-1 overflow-y-auto px-4 sm:px-6 md:px-8 py-6 sm:py-8">
              <div className="space-y-6 sm:space-y-8">
                <section>
                  <h3 className="font-['Poppins',Helvetica] text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#0d1c28] text-white flex items-center justify-center text-sm mr-3">
                      1
                    </span>
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        First Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        required
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica]"
                        placeholder="Enter first name"
                      />
                    </div>
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        Last Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        required
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica]"
                        placeholder="Enter last name"
                      />
                    </div>
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica]"
                        placeholder="your.email@example.com"
                      />
                    </div>
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica]"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        Gender (Optional)
                      </label>
                      <select
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica] bg-white"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                  </div>
                </section>
    
                <section>
                  <h3 className="font-['Poppins',Helvetica] text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#0d1c28] text-white flex items-center justify-center text-sm mr-3">
                      2
                    </span>
                    Photoshoot Details
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        Type of Photoshoot <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="photoshootType"
                        required
                        value={formData.photoshootType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica] bg-white"
                      >
                        <option value="">Select type</option>
                        <option value="couple">Couple</option>
                        <option value="baby">Baby Shoot</option>
                        <option value="newborn">Newborn</option>
                        <option value="maternity">Maternity</option>
                        <option value="cake-smash">Cake Smash</option>
                        <option value="model">Model Photoshoot</option>
                        <option value="pre-wedding">Pre-Wedding</option>
                        <option value="post-wedding">Post-Wedding</option>
                        <option value="half-saree">Half Saree</option>
                        <option value="family">Family</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="date"
                        name="preferredDate"
                        required
                        value={formData.preferredDate}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica]"
                      />
                    </div>
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        Preferred Time <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="time"
                        name="preferredTime"
                        required
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica]"
                      />
                    </div>
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        Number of Participants <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="participants"
                        required
                        min="1"
                        value={formData.participants}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica]"
                        placeholder="e.g., 2"
                      />
                    </div>
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        Location Preference <span className="text-red-500">*</span>
                      </label>
                      <select
                        name="locationType"
                        required
                        value={formData.locationType}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica] bg-white"
                      >
                        <option value="">Select location</option>
                        <option value="studio">Studio</option>
                        <option value="outdoor">Outdoor</option>
                        <option value="on-location">On-Location</option>
                      </select>
                    </div>
                    {formData.locationType === "on-location" && (
                      <div>
                        <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                          Location Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="locationAddress"
                          required
                          value={formData.locationAddress}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica]"
                          placeholder="Enter address"
                        />
                      </div>
                    )}
                  </div>
                </section>
    
                <section>
                  <h3 className="font-['Poppins',Helvetica] text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#0d1c28] text-white flex items-center justify-center text-sm mr-3">
                      3
                    </span>
                    Additional Requests
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                        Special Instructions / Requests
                      </label>
                      <textarea
                        name="specialRequests"
                        rows={4}
                        value={formData.specialRequests}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica] resize-none"
                        placeholder="Tell us about props, themes, outfits, or any special requirements..."
                      />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                          Preferred Photographer (Optional)
                        </label>
                        <input
                          type="text"
                          name="photographer"
                          value={formData.photographer}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica]"
                          placeholder="Photographer name"
                        />
                      </div>
                      <div>
                        <label className="block font-['Montserrat',Helvetica] text-sm font-medium text-gray-700 mb-2">
                          Package Selection <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="package"
                          required
                          value={formData.package}
                          onChange={handleChange}
                          className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0d1c28] focus:border-transparent outline-none transition-all font-['Montserrat',Helvetica] bg-white"
                        >
                          <option value="">Select package</option>
                          <option value="basic">Basic Package</option>
                          <option value="standard">Standard Package</option>
                          <option value="premium">Premium Package</option>
                          <option value="deluxe">Deluxe Package</option>
                          <option value="custom">Custom Package</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </section>
    
                <section>
                  <h3 className="font-['Poppins',Helvetica] text-base sm:text-lg font-semibold text-gray-800 mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[#0d1c28] text-white flex items-center justify-center text-sm mr-3">
                      4
                    </span>
                    Consent & Agreement
                  </h3>
                  <div className="space-y-3">
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="termsAccepted"
                        required
                        checked={formData.termsAccepted}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-[#0d1c28] focus:ring-[#0d1c28] cursor-pointer"
                      />
                      <span className="font-['Montserrat',Helvetica] text-sm text-gray-700 group-hover:text-gray-900">
                        I agree to the{" "}
                        <span className="text-[#0d1c28] font-semibold hover:underline cursor-pointer">
                          Terms & Conditions
                        </span>{" "}
                        and{" "}
                        <span className="text-[#0d1c28] font-semibold hover:underline cursor-pointer">
                          Cancellation Policy
                        </span>{" "}
                        <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <label className="flex items-start gap-3 cursor-pointer group">
                      <input
                        type="checkbox"
                        name="marketingConsent"
                        checked={formData.marketingConsent}
                        onChange={handleChange}
                        className="mt-1 w-5 h-5 rounded border-gray-300 text-[#0d1c28] focus:ring-[#0d1c28] cursor-pointer"
                      />
                      <span className="font-['Montserrat',Helvetica] text-sm text-gray-700 group-hover:text-gray-900">
                        I consent to the use of my photos for promotional purposes (Optional)
                      </span>
                    </label>
                  </div>
                </section>
    
                <div className="pb-20"></div>
              </div>
            </div>
    
            <div className="sticky bottom-0 bg-white pt-6 pb-4 px-4 sm:px-6 md:px-8 border-t border-gray-200 shadow-lg">
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#0d1c28] to-[#1a3a4a] text-white font-['Poppins',Helvetica] font-semibold py-3.5 sm:py-4 rounded-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300 text-base sm:text-lg"
              >
                Submit Pre-Registration
              </button>
            </div>
          </div>
        </div>
      );
    };