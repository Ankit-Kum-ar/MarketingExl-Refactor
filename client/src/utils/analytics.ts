import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_TRACKING_ID; // Replace with your Measurement ID

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = (page: string) => {
  ReactGA.send({ hitType: "pageview", page });
};

// You can add more functions to track custom events if needed
export const logEvent = (category: string, action: string, label?: string) => {
  ReactGA.event({
    category,
    action,
    label,
  });
};
