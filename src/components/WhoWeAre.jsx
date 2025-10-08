import React from "react";
import { FaHeart, FaUsers, FaShield } from "react-icons/fa";

function WhoWeAre() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-white to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Who We Are
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Adplus.aqua brings style and identity to every sip. We design and
            deliver custom-labeled bottled water for hotels, restaurants,
            events, and campaigns — because every bottle can speak your brand's
            story.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Feature 1 */}
          <div className="text-center p-6">
            <div className="bg-cyan-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaHeart className="text-cyan-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To deliver purity with personality - combining premium quality
              water with custom branding that tells your unique story.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="text-center p-6">
            <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaUsers className="text-blue-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To be the most trusted partner for custom branded water solutions
              across hospitality, corporate, and events industry.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="text-center p-6">
            <div className="bg-green-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
              <FaShield className="text-green-600 text-3xl" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Our Promise
            </h3>
            <p className="text-gray-600">
              Every drop passes through 7 advanced stages of purification,
              ensuring the highest quality for your brand.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">
                7+
              </div>
              <div className="text-gray-600 font-semibold">
                Purification Stages
              </div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">
                500+
              </div>
              <div className="text-gray-600 font-semibold">Min Order</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">
                2
              </div>
              <div className="text-gray-600 font-semibold">Bottle Sizes</div>
            </div>

            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-600 mb-2">
                24/7
              </div>
              <div className="text-gray-600 font-semibold">Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhoWeAre;
