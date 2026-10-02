/**
 * App Store support page configuration.
 * Update these values before submitting to App Store Connect.
 */
export const APP_SUPPORT = {
  /** App Store display name */
  appName: 'PushLab',
  /** Optional product subtitle */
  productSubtitle: 'Train anything. Track everything.',
  /** Developer / company */
  company: 'DOARBO',
  companyOwner: 'doarbo',
  bundleId: 'app.doarbo.fitnesstracker',
  /** Replace with your monitored support inbox */
  supportEmail: 'support@doarbo.com',
  /** Stable paths (set FINAL_SUPPORT_URL in App Store Connect to match) */
  supportPath: '/fitness-tracker/support',
  privacyPath: '/fitness-tracker/privacy',
  termsPath: '/fitness-tracker/terms',
  responseTime: 'We reply within 2 business days.',
} as const;
