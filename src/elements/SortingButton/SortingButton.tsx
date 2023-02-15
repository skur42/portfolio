import { useCallback, useRef, useState } from "react";
import clsx from "clsx";
import Arrow from "@/atoms/Arrow";
import useClickOutside from "@/hooks/useClickOutside";
import { SortOption } from "./typings/sorting.types";
import { sleep } from "@/utils/function";

const sortingOptions: Record<string, SortOption>  = {
  featured: {
    id: 'featured',
    name: 'Featured',
    label: 'Featured'
  },
  lowFirst: {
    id: 'lowFirst',
    name: 'Price: Low to High',
    label: '$ Low to High'
  },
  highFirst: {
    id: 'highFirst',
    name: 'Price: High to Low',
    label: '$ High to Low'
  },
  customerReviews: {
    id: 'customerReviews',
    name: 'Avg. Customer Reviews',
    label: 'Customer Reviews'
  },
};

export const SortingButton = () => {
  const [currentSortingOption, setCurrentSortingOption] = useState<string>('featured');
  const [isSortingOptionsVisible, setIsSortingOptionsVisible] = useState<boolean>(false);
  const [isSorting, setIsSorting] = useState<boolean>(false);

  const baseRef = useRef<HTMLDivElement>(null);

  const handleSortingOptions = useCallback(() => {
    setIsSortingOptionsVisible((value) => !value);
  }, []);

  const handleCloseSortingOptions = useCallback(() => {
    setIsSortingOptionsVisible(false)
  }, []);

  const handleSortOptionChange = useCallback((sortOption: string) => async () => {
    if (sortOption === currentSortingOption) {
      setIsSortingOptionsVisible(false);
    } else {
      setIsSorting(true);
      setIsSortingOptionsVisible(false);
      await sleep(3000);
      setCurrentSortingOption(sortOption);
      setIsSorting(false);
    }
  }, [currentSortingOption]);

  useClickOutside(baseRef, handleCloseSortingOptions);

  return (
    <div className="w-1/2 h-2/3 border border-gray-200 flex pt-20 justify-center rounded-2xl">
      <div className="relative w-[26.4rem]" ref={baseRef}>
        <div className={clsx(isSortingOptionsVisible ? 'rounded-t-lg transition-all duration-100 ease-in-out' : 'rounded-lg transition-all duration-1000 ease-in-out', 'w-full bg-black flex items-center justify-between px-8 py-6')}>
          <div className={clsx(isSorting ? 'animate-bounce' : '', 'font-lexend font-normal text-2xl text-white')}>{isSorting ? 'Sorting...' : `Sort by : ${sortingOptions[currentSortingOption].label}`}</div>
          <Arrow iconProps="w-4 h-4 fill-white" variant={isSortingOptionsVisible ? 'up' : 'down'} onClick={handleSortingOptions} />
        </div>
        <div className={clsx(!isSortingOptionsVisible ? 'max-h-0' : 'max-h-56 pb-4', "overflow-hidden duration-300 ease-in-out absolute left-0 w-full bg-black rounded-b-lg")}>
          {Object.keys(sortingOptions).map((key, index) => (
            <button key={index} className='px-8 w-full text-left font-lexend font-normal text-lg text-white py-2.5 hover:bg-gray-500' onClick={handleSortOptionChange(sortingOptions[key].id)}>
              {sortingOptions[key].name}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SortingButton;