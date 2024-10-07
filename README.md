# Expo Dev Starter

🚀 A Starter template for React Native, Expo, NativeWind and TypeScript - Made with developer experience first

### Features

- ⚡ [Expo](https://expo.dev) for mobile development
- 🅰 [Expo Router](https://docs.expo.dev/routing/introduction/) file-based navigation
- ⚛️ [React Native](https://reactnative.dev) for building native apps using React
- 🔥 Type checking [TypeScript](https://www.typescriptlang.org)
- 💎 Integrate with [NativeWind](https://www.nativewind.dev), Tailwind CSS for React Native
- 📁 File-based routing with Expo Router
- 📏 Linter with [ESLint](https://eslint.org)
- 💖 Code Formatter with [Prettier](https://prettier.io)
- 🦊 Husky for Git Hooks
- 🚫 Lint-staged for running linters on Git staged files
- 💡 Absolute Imports using `@` prefix
- 🌄 [React Native SVG](https://github.com/software-mansion/react-native-svg) for SVG rendering
- 🗂 VSCode configuration: Settings, Tasks and extension for PostCSS, ESLint, Prettier, TypeScript, Jest


### Requirements

- Node.js v20+ and npm v9+
- [iOS Simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Android Studio Emulator](https://docs.expo.dev/workflow/android-studio-emulator/)

### Getting started

Run the following command on your local environment:

```shell
git clone --depth=1 https://github.com/globalfaisal/expo-dev-starter.git my-project-name
cd my-project-name
npm install
``` 

Then, you can run locally in development mode with live reload:

```shell
npm run ios
# Or
npm run android
```
Or 

```shell
npx expo start -c 
```

This will open the app in the iOS simulator or Android emulator.

### VSCode information (optional)

If you are VSCode users, you can have a better integration with VSCode by installing the suggested extension in `.vscode/extension.json`. The starter code comes up with Settings for a seamless integration with VSCode. The Debug configuration is also provided for frontend and backend debugging experience.

With the plugins installed on your VSCode, ESLint and Prettier can automatically fix the code and show you the errors. Same goes for testing, you can install VSCode Jest extension to automatically run your tests and it also show the code coverage in context.

Pro tips: if you need a project wide type checking with TypeScript, you can run a build with <kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>B</kbd> on Mac.

### Contributions

Everyone is welcome to contribute to this project. Feel free to open an issue if you have question or found a bug. Totally open to any suggestions and improvements.

### License

Licensed under the MIT License, Copyright © 2023

See [LICENSE](LICENSE) for more information.

---

Made with ♥ by [globalfaisal](https://github.com/globalfaisal)