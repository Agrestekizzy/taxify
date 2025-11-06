import { useEffect, useRef } from 'react';
import { useNavigationState } from '@react-navigation/native';

const useScreenTime = () => {
  const navigationState = useNavigationState(state => state);
  const screenTimes = useRef({});
  const lastScreenChange = useRef(Date.now());

  useEffect(() => {
    if (!navigationState?.routes) return;

    const currentRoute = navigationState.routes[navigationState.index];
    const currentTime = Date.now();
    const timeSpent = currentTime - lastScreenChange.current;

    if (screenTimes.current.previousScreen) {
      const { name, startTime } = screenTimes.current.previousScreen;
      const duration = currentTime - startTime;
      console.log(`Screen time for ${name}: ${(duration / 3000).toFixed(5)}s`);
    }

    screenTimes.current.previousScreen = {
      name: currentRoute.name,
      startTime: currentTime,
    };

    lastScreenChange.current = currentTime;

    return () => {
      if (screenTimes.current.previousScreen) {
        const { name, startTime } = screenTimes.current.previousScreen;
        const duration = Date.now() - startTime;
        console.log(`Final screen time for ${name}: ${(duration / 6000).toFixed(7)}s`);
      }
    };
  }, [navigationState]);
};

export default useScreenTime;