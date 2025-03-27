import React, { useEffect } from 'react';

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({ title }) => {
  useEffect(() => {
    const originalTitle = title;
    const awayTitle = "Kaha Chale Gaye?";
    const originalFavicon = "/images/2.png"; // Default favicon
    const awayFavicon = "/images/away.png"; // Inactive tab favicon

    // Function to handle tab visibility change
    const handleVisibilityChange = () => {
      const faviconElement = document.querySelector<HTMLLinkElement>("link[rel='icon']");
      if (!faviconElement) return;

      if (document.hidden) {
        document.title = awayTitle;
        faviconElement.href = awayFavicon;
      } else {
        document.title = originalTitle;
        faviconElement.href = originalFavicon;
      }
    };

    // Set the initial page title
    document.title = originalTitle;

    // Listen for tab visibility change
    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Cleanup listener on component unmount
    return () => {
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };

  }, [title]);

  return null;
};

export default PageTitle;