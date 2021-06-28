import { useEffect } from 'react';
import { useRouter } from 'next/router';

import { pageview } from '../lib/gtm';

function GoogleTagManager({ children }) {
  const router = useRouter();

  useEffect(() => {
    router.events.on('routeChangeComplete', pageview);

    return () => {
      router.events.off('routeChangeComplete', pageview);
    }
  }, [router.events]);

  return children;
}

export default GoogleTagManager;
