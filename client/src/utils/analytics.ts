import ReactGA from 'react-ga';

const trackingId = import.meta.env.VITE_GA_TRACKING_ID; // Use the tracking ID from the environment variable
ReactGA.initialize(trackingId);

export const trackPageView = (page: string) => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};