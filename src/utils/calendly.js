// Calendly utility function
export const openCalendlyPopup = () => {
  if (window.Calendly) {
    window.Calendly.initPopupWidget({
      url: 'https://calendly.com/saumya-28-media/30min?hide_landing_page_details=1&hide_gdpr_banner=1'
    });
  } else {
    console.warn('Calendly is not loaded yet');
    // Fallback: redirect to Calendly page
    window.open('https://calendly.com/saumya-28-media', '_blank');
  }
};

// Check if Calendly is available
export const isCalendlyAvailable = () => {
  return typeof window !== 'undefined' && window.Calendly;
};
