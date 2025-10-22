import { Clock, Send, UserRound } from 'lucide-react';

function Testmonials() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Stat 1 */}
          <div className="text-center">
            <div className="text-[#FFA500] text-8xl font-light mb-6">2000+</div>
            <div className="text-white text-xl tracking-[0.3em] font-light">SHOOTS COMPLETED</div>
          </div>

          {/* Divider */}
          <div className="hidden md:block border-l border-gray-700"></div>

          {/* Stat 2 */}
          <div className="text-center">
            <Clock className="w-32 h-32 text-[#FFA500] mx-auto mb-6" strokeWidth={1.5} />
            <div className="text-white text-xl tracking-[0.3em] font-light">24/7 ACCESS TO CONTACT</div>
          </div>

          {/* Divider */}
          <div className="hidden md:block border-l border-gray-700"></div>

          {/* Stat 3 */}
          <div className="text-center">
            <Send className="w-32 h-32 text-[#FFA500] mx-auto mb-6 rotate-45" strokeWidth={1.5} />
            <div className="text-white text-xl tracking-[0.3em] font-light">IN TIME DELIVERY</div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="max-w-7xl mx-auto px-8 py-16">
        <h2 className="text-5xl text-center mb-16 tracking-[0.2em] font-light">STUDIO REVIEWS</h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Review Card 1 */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center mb-3">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full mr-3">
                  <UserRound className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-black text-sm font-semibold">Christopher L.</div>
                  <div className="text-gray-500 text-xs">1 year ago</div>
                </div>
              </div>
              <p className="text-gray-800 text-xs leading-relaxed mb-3">
                I signed up for the Art of Documentary in 2020. I was just starting to explore documentary and begin my journey as a filmmaker. The courses are amazing, the community is so nice and helpful, and the...
              </p>
              <div className="text-blue-600 text-xs mb-3">Read more</div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FFA500] text-sm">★</span>
                  ))}
                </div>
                <div className="text-blue-600 font-bold text-xl">G</div>
              </div>
            </div>
          </div>

          {/* Review Card 2 */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center mb-3">
              <div className="w-8 h-8 flex items-center justify-center bg-orange-200 rounded-full mr-3">
                  <UserRound className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-black text-sm font-semibold">Danny R.</div>
                  <div className="text-gray-500 text-xs">1 year ago</div>
                </div>
              </div>
              <p className="text-gray-800 text-xs leading-relaxed mb-3">
                AOD has been incredibly helpful to me as a filmmaker. I have learned so much through their courses, zoom calls, YouTube videos, and even from some fellow scholars. I cannot thank the master d...
              </p>
              <div className="text-blue-600 text-xs mb-3">Read more</div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FFA500] text-sm">★</span>
                  ))}
                </div>
                <div className="text-blue-600 font-bold text-xl">G</div>
              </div>
            </div>
          </div>

          {/* Center Rating Display */}
          <div className="flex flex-col items-center justify-center">
            <div className="text-[#FFA500] text-9xl font-light mb-4">4.9</div>
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FFA500] text-4xl">★</span>
              ))}
            </div>
            <div className="text-white text-xl tracking-[0.2em] mb-8">1,397 REVIEWS</div>
            <button className="bg-[#FFA500] text-black px-8 py-3 rounded-full font-semibold tracking-wider hover:bg-[#FF8C00] transition-colors">
              VIEW ALL REVIEWS
            </button>
          </div>

          {/* Review Card 3 */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center mb-3">
              <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full mr-3">
                  <UserRound className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <div className="text-black text-sm font-semibold">Christopher L.</div>
                  <div className="text-gray-500 text-xs">1 year ago</div>
                </div>
              </div>
              <p className="text-gray-800 text-xs leading-relaxed mb-3">
                I signed up for the Art of Documentary in 2020. I was just starting to explore documentary and begin my journey as a filmmaker. The courses are amazing, the community is so nice and helpful, and the...
              </p>
              <div className="text-blue-600 text-xs mb-3">Read more</div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FFA500] text-sm">★</span>
                  ))}
                </div>
                <div className="text-blue-600 font-bold text-xl">G</div>
              </div>
            </div>
          </div>

          {/* Review Card 4 */}
          <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-6 shadow-2xl">
            <div className="bg-white rounded-xl p-4">
              <div className="flex items-center mb-3">
              <div className="w-8 h-8 flex items-center justify-center bg-orange-200 rounded-full mr-3">
                  <UserRound className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <div className="text-black text-sm font-semibold">Danny R.</div>
                  <div className="text-gray-500 text-xs">1 year ago</div>
                </div>
              </div>
              <p className="text-gray-800 text-xs leading-relaxed mb-3">
                AOD has been incredibly helpful to me as a filmmaker. I have learned so much through their courses, zoom calls, YouTube videos, and even from some fellow scholars. I cannot thank the master d...
              </p>
              <div className="text-blue-600 text-xs mb-3">Read more</div>
              <div className="flex items-center justify-between">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-[#FFA500] text-sm">★</span>
                  ))}
                </div>
                <div className="text-blue-600 font-bold text-xl">G</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testmonials;
