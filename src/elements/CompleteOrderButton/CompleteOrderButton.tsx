import { useCallback, useState } from "react";
import Lottie from "lottie-react";
import { OrderStatus } from "./typings/orderStatus.types";
import TickAnimation from './assets/lottie/tick.json';
import { sleep } from "@/utils/function";
import clsx from "clsx";

export const CompleteOrderButton = () => {
  const [currentState, setCurrentStatus] = useState<OrderStatus>('initial');

  const handleCurrentStateChange = useCallback(async () => {
    if (currentState === 'initial') {
      setCurrentStatus('processing');
      await sleep(4000);
      setCurrentStatus('placed');
      await sleep(2000);
      setCurrentStatus('initial');
    }
  }, [currentState]);

  return (
    <div className="w-1/2 h-2/3 border border-gray-200 flex pt-20 justify-center rounded-2xl">
      <button type="button" className={clsx(currentState === 'processing' ? 'max-h-4 rounded-none' : 'max-h-20 rounded-lg', "transition-all duration-1000 ease-in-out w-[18.6rem] bg-slate-800 text-white font-normal text-2xl flex items-center justify-center overflow-hidden")} onClick={handleCurrentStateChange}>
        {currentState === 'initial' ? 'Complete Order' : currentState === 'placed' ? 'Order Placed' : ''}
        {currentState === 'placed' ? <Lottie loop={false} animationData={TickAnimation} autoPlay style={{ width: '4.8rem', height: '4.8rem', marginTop: '-0.6rem', marginLeft: '-0.8rem', marginRight: '-1.2rem' }} /> : null}
      </button>
    </div>
  )
}

export default CompleteOrderButton;