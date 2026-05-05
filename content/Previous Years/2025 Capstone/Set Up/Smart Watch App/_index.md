+++
title = "Smart Watch App"
weight = 100
description = 'Instructions'
+++


- To setup the Smart Watch application for development, follow these steps:
    1. Download and install Visual Studio Code
    2. Install the Flutter SDK version 3.9.2 or higher
        - Download from https://flutter.dev/docs/get-started/install
| ![Flutter](Flutter.png?width=40vw&lightbox=false) | 
|:--:|
    3. Install Dart (this step can be skipped because it comes bundled with the installation of Flutter)
    4. Instal Android Studio and set up Android SDK (Used for watch emulation)
        - Download from https://developer.android.com/about/versions/14/setup-sdk
| ![Android](Android.png?width=40vw&lightbox=false) | 
|:--:|
    5. Clone the repository for the Watch App: 
    https://github.com/YCP-Rev-Metrix/Android-Smart-Watch.git
    6. Navigate to the project directory:
        - cd flutter_prototype
    7. Install project dependencies in terminal:
        - flutter pub get
        - flutter pub run flutter_launcher_icons
        - flutter pub run flutter_native_splash:create 
You are now ready to develop the Smart Watch Application
|:--:|

- To deploy the app to an Android Smart Watch, follow these steps:
    1. On your Android Smart Watch, open the Settings app
    2. Scroll down to the bottom and select About Watch
    3. Tap Software Information
    4. Tap Build Number seven times (this will send you back to the menu of settings)
    5. Scroll down to the bottom of settings again to find Developer Options now available
    6. In Developer Options, scroll until you see a section labeled Wireless Debugging
    7. In Wireless Debuggling, turn this on, this will allow you to pair your development computer to the watch for development itself
        - FYI: The Watch and Computer have to be on the SAME wifi to allow wireless debugging!
    8. Once enabled, scroll down to pair a device and in that menu you should see an IP address and a pairing code 
    9. In your terminal write out this command:
        - adb pair xx.xx.xx.xx:xxxxx (replace with the IP address in the pairing menu)
    10. Once paired, in the initial menu of the wireless debugging there will be another IP address. IMPORTANT: this address is different from the pairing address
    11. In your terminal write out this command:
        - adb connect xx.xx.xx.xx:xxxxx (replace with the new IP address in the wireless debugging page)
    12. Once connected, write out this command to run on the connected device:
        - flutter run
You are now deployed on the Smart Watch!
|:--:|

- To deploy the app to an Emulator from VScode, follow these steps:
(IMPORTANT: Android studio and SDK tools must be downloaded prior for correct use, see section 1)
    1. In VScode, go to the extensions tab
    2. In the extensions search bar, search Android/IOS Launcher by "Yovel Ovadia" 
| ![Emulator](Emulator.png?width=40vw&lightbox=false) | 
|:--:|
    3. Once installed and enabled, you will see a phone icon in your left side hotbar
    4. In this tab, you can run different emulators directly from VScode
    5. Select the green button for whatver emulator you want to run
You are now running the emulator!





