# Nativewind App

A React Native app styled with NativeWind (Tailwind CSS for React Native).

**Tech Stack**
- React Native
- NativeWind
- TypeScript

**Getting Started**

1. Install dependencies
```sh
npm install
```

2. Start Metro
```sh
npm start
```

3. Run the app
```sh
# Android
npm run android

# iOS
npm run ios
```

**iOS Setup**
If you are running iOS for the first time or after native dependency changes:
```sh
bundle install
bundle exec pod install
```

**NativeWind Setup Notes**
- Global styles live in `src/utils/global.css`.
- Tailwind configuration is in `tailwind.config.js`.
- Metro config is wired for NativeWind in `metro.config.js`.

**Project Structure**
- Shared components: `src/components/common`
- Project-specific components: `src/components/custom`
- Screens: `src/screens`
- Utilities: `src/utils`
- Services (API calls only): `src/services`

**Development Tips**
- Edit `App.tsx` or any screen in `src/screens` to get started.
- Fast Refresh is enabled by default.

**Troubleshooting**
- If Metro gets stuck, restart with cache reset:
```sh
npm start -- --reset-cache
```
