import { Clock, Send, UserRound } from "lucide-react";

function Testimonials() {
  return (
    // <div className="h-[813px] flex items-center justify-center bg-black">
    <div className="md:h-[813px] flex items-center justify-center bg-black">

      {/* Inner container grows with content */}
      <div className="w-full max-w-[1440px] text-white flex flex-col">
        {/* Stats Section */}
        <div className="px-8 py-16 flex flex-wrap justify-center items-center gap-12 text-center">
          <div>
            <div className="text-[#FFA500] text-8xl font-light mb-4">2000+</div>
            <div className="text-white text-xl tracking-[0.3em] font-light">
              SHOOTS COMPLETED
            </div>
          </div>

          <div className="hidden md:block border-l h-24 border-gray-700"></div>

          <div>
            <Clock
              className="w-24 h-24 text-[#FFA500] mx-auto mb-4"
              strokeWidth={1.5}
            />
            <div className="text-white text-xl tracking-[0.3em] font-light">
              24/7 ACCESS TO CONTACT
            </div>
          </div>

          <div className="hidden md:block border-l h-24 border-gray-700"></div>

          <div>
            <Send
              className="w-24 h-24 text-[#FFA500] mx-auto mb-4 rotate-45"
              strokeWidth={1.5}
            />
            <div className="text-white text-xl tracking-[0.3em] font-light">
              IN TIME DELIVERY
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="px-8 py-16">
          <h2 className="text-5xl text-center mb-16 tracking-[0.2em] font-light">
            STUDIO REVIEWS
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 mx-auto">
            <ReviewCard
              name="Christopher L."
              text="I signed up for the Art of Documentary in 2020. I was just starting to explore documentary..."
            />

            <ReviewCard
              name="Danny R."
              text="AOD has been incredibly helpful to me as a filmmaker. I have learned so much through..."
            />

            <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl flex flex-col items-center justify-center">
              <div className="text-[#FFA500] text-7xl font-light mb-4">4.9</div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-[#FFA500] text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <div className="text-white text-sm tracking-[0.2em] mb-6">
                1,397 REVIEWS
              </div>
              <button className="bg-[#FFA500] text-black px-5 py-2 rounded-full font-semibold tracking-wider hover:bg-[#FF8C00] transition-colors text-sm">
                VIEW ALL REVIEWS
              </button>
            </div>

            <ReviewCard
              name="Christopher L."
              text="The courses are amazing and the community is so supportive. Great experience!"
            />

            <ReviewCard
              name="Danny R."
              text="AOD has been incredibly helpful to me as a filmmaker. I cannot thank them enough."
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function ReviewCard({ name, text }: { name: string; text: string }) {
  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-5 shadow-2xl flex flex-col justify-between">
      <div className="bg-white rounded-xl p-4 h-full flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 flex items-center justify-center bg-gray-200 rounded-full mr-3">
              <UserRound className="w-5 h-5 text-gray-600" />
            </div>
            <div>
              <div className="text-black text-sm font-semibold">{name}</div>
              <div className="text-gray-500 text-xs">1 year ago</div>
            </div>
          </div>
          <p className="text-gray-800 text-xs leading-relaxed mb-3">{text}</p>
        </div>
        <div>
          <div className="text-blue-600 text-xs mb-3">Read more</div>
          <div className="flex items-center justify-between">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-[#FFA500] text-sm">
                  ★
                </span>
              ))}
            </div>
            <div className="text-blue-600 font-bold text-xl">G</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
