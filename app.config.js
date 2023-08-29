import 'dotenv/config'
const issuerUrl = process.env.KINDE_ISSUER_URL
const callbackUrl = process.env.KINDE_POST_CALLBACK_URL
const clientId = process.env.KINDE_CLIENT_ID
const logoutRedirectUrl = process.env.KINDE_POST_LOGOUT_REDIRECT_URL
export default {
  name: 'kinde_auth_example',
  slug: 'kinde_auth_example',
  version: '1.0.0',
  orientation: 'portrait',
  icon: './assets/icon.png',
  userInterfaceStyle: 'light',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'contain',
    backgroundColor: '#ffffff'
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true
  },
  android: {
    adaptiveIcon: {
      foregroundImage: './assets/adaptive-icon.png',
      backgroundColor: '#FFFFFF'
    }
  },
  web: {
    favicon: './assets/favicon.png'
  },
  extra: {
    eas: {
      projectId: '3a616f90-1033-4476-8026-2207e2ec63ef'
    },
    issuerUrl: issuerUrl || '',
    callbackUrl: callbackUrl || '',
    clientId: clientId || '',
    logoutRedirectUrl: logoutRedirectUrl || '',
    KINDE_POST_CALLBACK_URL: process.env.KINDE_POST_CALLBACK_URL,
    KINDE_CLIENT_ID: process.env.KINDE_CLIENT_ID,
    KINDE_POST_LOGOUT_REDIRECT_URL: process.env.KINDE_POST_LOGOUT_REDIRECT_URL
  },
  owner: 'ikurotime',
  plugins: ['expo-router'],
  scheme: 'your-app-scheme'
}
