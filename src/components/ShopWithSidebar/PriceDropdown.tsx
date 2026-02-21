import { useState, useEffect, useRef } from 'react';
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

interface PriceDropdownProps {
  minPrice: number;
  maxPrice: number;
  onPriceChange: (min: number, max: number) => void;
}

const PriceDropdown = ({ minPrice, maxPrice, onPriceChange }: PriceDropdownProps) => {
  const [toggleDropdown, setToggleDropdown] = useState(true);
  const [selectedPrice, setSelectedPrice] = useState({
    from: minPrice,
    to: maxPrice,
  });
  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setSelectedPrice({
      from: minPrice,
      to: maxPrice,
    });
  }, [minPrice, maxPrice]);

  // Cleanup debounce timer on unmount
  useEffect(() => {
    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-gray-50/80 border border-gray-100 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setToggleDropdown(!toggleDropdown)}
        className="w-full cursor-pointer flex items-center justify-between py-3.5 pl-4 pr-3 text-left hover:bg-gray-100/80 transition-colors rounded-xl"
        id="price-dropdown-btn"
        aria-label="Toggle price range"
        aria-expanded={toggleDropdown}
      >
        <span className="font-semibold text-dark flex items-center gap-2">
          <span className="w-0.5 h-4 rounded-full bg-[#FF0000]" />
          Price
        </span>
        <span className={`text-dark-4 transition-transform duration-200 ${toggleDropdown ? 'rotate-180' : ''}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M6 9l6 6 6-6" />
          </svg>
        </span>
      </button>

      <div className={`px-4 pb-4 pt-0 ${toggleDropdown ? 'block' : 'hidden'}`}>
        <div id="pricingOne">
          <div className="price-range">
            <RangeSlider
              id="range-slider-gradient"
              className="margin-lg"
              min={0}
              max={10000}
              step={100}
              value={[selectedPrice.from, selectedPrice.to]}
              onInput={(e) => {
                const newPrice = {
                  from: Math.floor(e[0]),
                  to: Math.ceil(e[1]),
                };
                // Update local state immediately for responsive UI
                setSelectedPrice(newPrice);
                
                // Clear existing debounce timer
                if (debounceTimerRef.current) {
                  clearTimeout(debounceTimerRef.current);
                }
                
                // Debounce the URL update (500ms delay)
                debounceTimerRef.current = setTimeout(() => {
                  onPriceChange(newPrice.from, newPrice.to);
                }, 500);
              }}
            />

            <div className="price-amount flex items-center justify-between gap-3 pt-4">
              <div className="flex-1 flex items-center rounded-lg border-2 border-gray-200 bg-gray-50 px-3 py-2 focus-within:border-[#FF0000] focus-within:bg-white transition-colors">
                <span className="text-dark-4 text-sm mr-1">₹</span>
                <span id="minAmount" className="text-sm font-medium text-dark">
                  {selectedPrice.from.toLocaleString('en-IN')}
                </span>
              </div>
              <span className="text-gray-400">–</span>
              <div className="flex-1 flex items-center rounded-lg border-2 border-gray-200 bg-gray-50 px-3 py-2 focus-within:border-[#FF0000] focus-within:bg-white transition-colors">
                <span className="text-dark-4 text-sm mr-1">₹</span>
                <span id="maxAmount" className="text-sm font-medium text-dark">
                  {selectedPrice.to.toLocaleString('en-IN')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PriceDropdown;
