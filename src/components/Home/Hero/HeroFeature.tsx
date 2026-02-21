import React from "react";

const CubeSendIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 shrink-0 text-[#FF0000]"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M16 12.5l-5 -3l5 -3l5 3v5.5l-5 3l0 -5.5" />
    <path d="M11 9.5v5.5l5 3" />
    <path d="M16 12.545l5 -3.03" />
    <path d="M7 9h-5" />
    <path d="M7 12h-3" />
    <path d="M7 15h-1" />
  </svg>
);

const CreditCardRefundIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 shrink-0 text-[#FF0000]"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
    <path d="M3 10h18" />
    <path d="M7 15h.01" />
    <path d="M11 15h2" />
    <path d="M16 19h6" />
    <path d="M19 16l-3 3l3 3" />
  </svg>
);

const ShieldDollarIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 shrink-0 text-[#FF0000]"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M13.018 20.687c-.333 .119 -.673 .223 -1.018 .313a12 12 0 0 1 -8.5 -15a12 12 0 0 0 8.5 -3a12 12 0 0 0 8.5 3c.433 1.472 .575 2.998 .436 4.495" />
    <path d="M21 15h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5" />
    <path d="M19 21v1m0 -8v1" />
  </svg>
);

const MessagesIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="w-5 h-5 shrink-0 text-[#FF0000]"
  >
    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
    <path d="M21 14l-3 -3h-7a1 1 0 0 1 -1 -1v-6a1 1 0 0 1 1 -1h9a1 1 0 0 1 1 1v10" />
    <path d="M14 15v2a1 1 0 0 1 -1 1h-7l-3 3v-10a1 1 0 0 1 1 -1h2" />
  </svg>
);

const featureData = [
  { icon: CubeSendIcon, title: "Free Shipping", description: "On orders above ₹499" },
  { icon: CreditCardRefundIcon, title: "Easy Returns", description: "7-day return policy" },
  { icon: ShieldDollarIcon, title: "100% Secure Payments", description: "UPI, Cards & more" },
  { icon: MessagesIcon, title: "24/7 Support", description: "All across India" },
];

const HeroFeature = () => {
  return (
    <div className="bg-[#1a0a0a] border-t border-white/10">
      <div className="max-w-[1060px] w-full mx-auto px-4 sm:px-8 xl:px-0 py-6 sm:py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {featureData.map((item, key) => {
            const Icon = item.icon;
            return (
              <div
                key={key}
                className="flex items-center justify-center sm:justify-start gap-3 min-w-0"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FF0000]/20 flex items-center justify-center border border-[#FF0000]/30">
                  <Icon />
                </div>
                <div className="min-w-0 text-center sm:text-left">
                  <h3 className="font-semibold text-sm text-white">{item.title}</h3>
                  <p className="text-xs text-white/70 mt-0.5">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroFeature;
