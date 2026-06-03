/**
 * Analytics service for tracking lead conversion events.
 * This can be easily extended to integrate with GA4, Mixpanel, etc.
 */

const ANALYTICS_ENABLED = true;

/**
 * Log an event to the analytics system.
 * @param {string} eventName - Name of the event (e.g., 'lead_form_submission')
 * @param {Object} properties - Additional data about the event
 */
export const trackEvent = (eventName, properties = {}) => {
  if (!ANALYTICS_ENABLED) return;

  const timestamp = new Date().toISOString();
  const eventData = {
    event: eventName,
    ...properties,
    timestamp,
    url: window.location.href,
    path: window.location.pathname,
  };

  // Local verification - logging to console
  console.log(`[Analytics] ${eventName}`, eventData);

  // Future integration point:
  // if (window.gtag) {
  //   window.gtag('event', eventName, properties);
  // }
};

/**
 * Specifically track lead magnet interactions.
 * @param {string} magnetName - Name of the lead magnet
 * @param {string} action - Type of action ('view', 'start', 'submit', 'download')
 * @param {Object} metadata - Additional metadata
 */
export const trackLeadMagnet = (magnetName, action, metadata = {}) => {
  trackEvent(`lead_magnet_${action}`, {
    magnet_name: magnetName,
    ...metadata,
  });
};
