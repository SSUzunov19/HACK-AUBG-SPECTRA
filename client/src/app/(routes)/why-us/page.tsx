import React from "react";
import {
  FaRegLightbulb,
  FaChartLine,
  FaPuzzlePiece,
  FaRegHandshake,
  FaLeaf,
  FaDollarSign,
} from "react-icons/fa";

const WhyUs = () => {
  return (
    <div className="px-60 py-20">
      <h1 className="text-5xl font-bold text-center mb-12">Why Choose Us?</h1>
      <div className="space-y-8">
        <section className="flex items-center gap-4">
          <FaRegLightbulb className="text-[60px] text-green-500" />
          <div>
            <h2 className="text-3xl font-semibold ">Unique Focus</h2>
            <p className="text-lg">
              Specialized in Fashion: Our system is laser-focused on the fashion
              industry, evaluating sustainability with precision. We go beyond
              general metrics, diving deep into what truly matters for clothing
              manufacturers.
            </p>
          </div>
        </section>

        <hr className="border-2 border-gray-300" />

        <section className="flex items-center gap-4">
          <FaChartLine className="text-[60px] text-red-500" />
          <div>
            <h2 className="text-3xl font-semibold ">Advanced Analytics</h2>
            <p className="text-lg">
              Insightful & Actionable: Powered by advanced analytics, our
              platform turns complex sustainability data into clear, actionable
              insights. Understand your sustainability performance like never
              before.
            </p>
          </div>
        </section>

        <hr className="border-2 border-gray-300" />

        <section className="flex items-center gap-4">
          <FaPuzzlePiece className="text-[60px] text-blue-500" />
          <div>
            <h2 className="text-3xl font-semibold ">
              Customization for Clients
            </h2>
            <p className="text-lg">
              Tailored Solutions: We recognize the unique challenges and goals
              of each client. Our system offers customization options that allow
              businesses to focus on what’s most important to them, ensuring
              relevance and impact.
            </p>
          </div>
        </section>

        <hr className="border-2 border-gray-300" />

        <section className="flex items-center gap-4">
          <FaRegHandshake className="text-[60px] text-orange-500" />
          <div>
            <h2 className="text-3xl font-semibold ">Evolving Regulations</h2>
            <p className="text-lg">
              Stay Ahead: The landscape of sustainability regulations is
              constantly changing. Our system stays updated with the latest
              standards and practices, helping you remain compliant and
              competitive.
            </p>
          </div>
        </section>

        <hr className="border-2 border-gray-300" />

        <section className="flex items-center gap-4">
          <FaLeaf className="text-[60px] text-green-600" />
          <div>
            <h2 className="text-3xl font-semibold ">Consumer Demand</h2>
            <p className="text-lg">
              Meet Expectations: Today`&apos;s consumers are more
              environmentally conscious than ever. Our system helps you align
              with consumer values, demonstrating your commitment to
              sustainability and boosting brand loyalty.
            </p>
          </div>
        </section>

        <hr className="border-2 border-gray-300" />

        <section className="flex items-center gap-4">
          <FaDollarSign className="text-[60px] text-yellow-500" />
          <div>
            <h2 className="text-3xl font-semibold ">Return on Investment</h2>
            <p className="text-lg">
              Quantifiable Benefits: Investing in sustainability is not just
              good for the planet—it’s good for business. Our system helps
              identify areas for improvement that can lead to cost savings,
              operational efficiencies, and enhanced brand value.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default WhyUs;
