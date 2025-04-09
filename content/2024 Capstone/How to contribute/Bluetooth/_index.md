+++
title = "Getting Started"
weight = 100
description = 'Information regarding setting up your development enviroment'
+++

### Table of Contents
{{% children containerstyle="ul" style="li" sort="title" description="true" %}}


# BLE
To communicate with the SmartDot and simulator, the RevMetrix app utilizes Bluetooth Low Energy (BLE). This is essentially bluetooth for low-power objects like smartphones, smartwatches, or sensors. Communication between BLE devices works on a client-server structure known as GATT (Generic ATTribute profile). The app and similar devices are GATT clients which can send and request data from connectable devices known as GATT servers. The GATT server can receive messages from the client and holds data for the client to read. This data is nested in characteristics inside of services which are a part of the GATT server’s profile. By knowing the UUIDs of the device, service, and characteristic, communication can be established.

## Dotnet-bluetooth-le
For in app BLE communication, we use the simple  [dotnet-bluetooth-le](https://github.com/dotnet-bluetooth-le/dotnet-bluetooth-le)plugin. This plugin can be downloaded as a nuget package in your IDE and provides the basic functions for scanning, connecting, and communicating with other BLE-enabled devices. To fully utilize the necessary BLE functions several interfaces in the plugin must be invoked. They can be read about in the official documentation, but the basics can be gathered here.

### IBluetoothLE
		This must be invoked solely to utilize bluetooth functions on your device

### IAdapter
This must be used to discover and connect to other devices. Discovery is done through scanning which will add discovered devices to a List. Devices are of the IDevice type and can be connected to with functions in IAdapter.

### IDevice
This is the type for any connected device and includes information on the connected device such as the name, UUID, and connection state. An IDevice object also functions for the client to read from its available services.

### IService
This is the type for BLE services read from a device. While services do not usually contain the data you will use, they organize the GATT server’s information and contain information about the data in their characteristics.

### Characteristic
This is the type of characteristics which will hold the meaningful data to be read or written to. Once a characteristic is discovered, information can be gathered from it. This data will be received as an array of bytes, but can also be automatically converted into a string if applicable.

While this is just the general information on each of th4ese interfaces, specific functions and information can be read on the plugin documentation page or in the interface files themselves.

MetaWear - MMC/MMS Communications
To simulate SmartDot communication with real devices, MbientLab’s MMC and MMS sensor modules are used. These small devices are fitted with various sensors used for recording acceleration, gyroscope, light, and magnetometer data. More about the modules themselves can be read on [MbientLab’s website](https://mbientlab.com/store/). We can communicate with these sensors over BLE from the app. Once the correct services and characteristics are discovered, commands can be sent to initiate recording on the sensors and data can be read back in real time. MbientLab has an official interface to communicate with the sensors known as MetaWear. Though we do not use the full interface, its [github pages](https://github.com/mbientlab/MetaWear-SDK-Cpp/tree) contain useful information for understanding basic communication with the MMS/MMC.

## Byte Arrays
Information is read from and commands are sent to the MMS/MMC in the form of byte arrays. Commands sent will always need to start with the identifier byte for the sensor you are trying to communicate with. This data can be found in the github pages, but for convenience: accelerometer = 3, ambient light sensor = 20, gyroscope = 19, and magnetometer = 21. Byte arrays read from the sensor will always begin with 2 header bytes, the first being the identifier byte for the sensor the data is coming from. The remaining bytes after the first 2 will need to be converted into decimal values. When writing to MMS/MMC certain configuration commands must be sent before starting and after stopping, these vary between sensors and will be elaborated on below.

Accelerometer: 3
When communicating with the accelerometer, the Output Data rate (ODR) and data range must be set. Currently for RevMetrix, these are set to 200 Hz and 16 Gs respectively. The accelerometer must also be set to sampling mode to properly receive the data. A subscription command must also be sent to receive the accelerometer data when it is ready. Once configured, the accelerometer can be started by writing the byte array {3, 1, 1} to the MMS/MMC. The accelerometer can then be stopped with the byte array command {3, 1, 0}. After stopping the sensor, the configuration must also be disabled.
When reading the accelerometer data, after the first 2 header bytes, the remaining 6 must be broken into pairs and converted to floats representing X, Y, and Z values. Each of these values must then be further converted with the function below
n = (n/32768.0f)*data range

Ambient Light: 20
When configuring the light sensor, the gain, integration time, and measurement time must first be set. The gain values control how much ambient light should be filtered out when recording and the measurement and integration times control how fast the data is received. The light sensor also requires a subscription command like the accelerometer. The light sensor can then be started and stopped with the commands {20, 1, 1} and {20, 1, 0} respectively. Like the accelerometer, the configuration must be disabled after recording.
The data for the light sensor must be converted from the byte array into a Lux value. This involves splitting the byte array into channels, generating a ratio from these channels, and using that ratio to decide how to convert the data. This segment of code for conversion can be found in the RevMetrix app in the ScanPage.xaml.cs file.

Gyroscope: 19
The gyroscope works very similarly to the accelerometer. The ODR and data range must first be configured. The app currently uses 200 Hz and 250 dps for the ODR and data range. Like the accelerometer, commands must be sent to enable data sampling and subscribe to the gyroscope sensor. The gyroscope can then be started and stopped with the commands {19, 1, 1} and {19, 1, 0} respectively. Once again, the configuration must be disabled after. The data for the gyroscope can then be converted using the same equation as the accelerometer data. The data range values for the gyroscope correspond to equal accelerometer values. For 250 dps, the equivalent range to be used in the equation would be 2.0f.

Magnetometer: 21
The magnetometer has yet to be implemented, but will communicate in a similar fashion to the accelerometer and gyroscope. Information on magnetometer communication can be found in the MetaWear Github pages.

The full configuration commands for all the implemented sensors can be found in ScanPage.xaml.cs file of the Revmetrix app. For other configurations and more context on how to communicate with the sensors, the [test files](https://github.com/mbientlab/MetaWear-SDK-Cpp/tree/master/test) of the MetaWear SDK can offer assistance.

	The MMS/MMC can be used either through the MetaWear app or the RevMetrix app. To use the MMS/MMC in the RevMetrix app, you must navigate to the Scan Page. This page is where most of the experimentation with bluetooth is compiled. This page can be accessed from the ball arsenal page in the bluetooth page by clicking “connect to a new device.” From here you can either scan and find a device named MetaWear using the check button or connect automatically to the MMS/MMC with the associated buttons. These buttons are linked with the UUIDs of specific modules, so make sure you use the right ones. They will hopefully be marked. Once connected as indicated in the top right corner of the screen, simply click the “Start/Stop Sensors” button and the module will begin recording. Simply click the button again to stop it and you will be taken to view the graphs.




Data Graphing

	LiveCharts2 is a cross-platform graphing package capable of turning data sets into organized graphs. These graphs are very user friendly and offer a range of customization options. Data in graphs must first be included in a Series object which the graph object in the view can reference. Livecharts requires projects using it to register with SkiaSharp, a parent graphing package, but is completely free outside of that registration.
Data is graphed using the [LiveCharts2](https://livecharts.dev/docs/maui/2.0.0-rc2/gallery) nuget package. This package makes graphing data easy by linking instances of a Series class to an object in the connected XAML file. For this app, the sensor data is read from a csv file which was written to during recording and added to the Series’ Values property. Functions for interacting with these Series objects to affect the graphs in the app can be found in the graphtest.xaml.cs file. More can also be learned about how to create these graphs on the LiveCharts website.


Simulator Communication
The simulator utilizes a Raspberry Pi as a GATT server to transmit data to the app just as the SmartDot would. To communicate with the simulator from the app, from the home page, click the “View Simulator” button. This will take you to the simulator communication page. The “Connect to Sim” button should automatically connect you to the Pi. Make sure the Pi is active before attempting to connect. Even if the Pi is active, it may take time to establish a connection. Once the app connects to the PI, a message will display in the top right corner. From this point, all you will need to do is click the “Read Data” button and the simulator data will read out into the app.
