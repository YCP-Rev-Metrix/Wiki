+++
title = "Simulation Team"
weight = 100
description = 'Project Analysis and Design specific to the simulation team'
+++

| Luke Dodson, Bryce Neptune, Enoch Sam, Ian Viveiros |
|:-:|

| ![Simulation Architecture](SimArc.png?width=60vw&lightbox=false) | 
|:--:|

### SmartDot Simulation
| ![Smartdot Architecture](SDArc.jpg?width=60vw&lightbox=false) | 
|:--:|

The SmartDot Module will be a small device that can be placed in the finger insert of a bowling ball. It will record rotational and positional data about each ball throw and transmit this data via bluetooth to the mobile device. The SmartDot will have two sensors: an 3-axis accelerometer and an ambient light sensor. The light sensor will be used to detect start up conditions by sensing light-to-dark and dark-to-light transitions. It will also help record rotational information by sensing when the ball is pointing up (light) and when the ball is pointing down (dark). The accelerometer will sense the translational acceleration (positional data) and the axis tilt (rotational data). The SmartDot will also have memory to store at least twenty-five samples of each sensor which is equal to twenty-five throws.
The SmartDot will also have a bluetooth transmitter that will communicate with the mobile device through the ISmartDot interface. The ISmartDot interface will have several methods. It will have a couple methods for the mobile device to connect with the SmartDot module. It will also have read and write methods for sending and receiving data from the SmartDot. And finally, it will have methods for sending commands to the SmartDot. These commands will be strings. This will make the system more modular. These methods will define the communication between the SmartDot module and the mobile device.

##### ISmartDot Interface
```C#
/// <summary>
/// Interface representing the basic functionality of the Bluetooth connection between the mobile application and a SmartDot implementation (Simulator & Hardware)
/// </summary>
public interface ISmartDot
{
    /// <summary>
    /// Attempts to create a connection to the SmartDot hardware
    /// </summary>
    /// <param name="connectionParameters">Connection parameters</param>
    /// <returns>version representing the SmartDot hardware version (APIs use), null if unable to connect</returns>
    public Task<Version?> Connect(ConnectionParameters connectionParameters);
    
    /// <summary>
    /// Tests if the connection to the SmartDot hardware is present
    /// </summary>
    /// <returns>Boolean representing if there is a connection to SmartDot hardware</returns>
    public Task<bool> IsConnected();

    /// <summary>
    /// Asynchronous method to write one page to the SmartDot implementation
    /// </summary>
    /// <param name="address">The page start address in memory</param>
    /// <param name="buffer">Data (byte[]) to write to the SmartDot implementations page</param>
    /// <param name="bytes">Length of data to write from <paramref name="buffer"/></param>
    /// <returns>A bool representing if call was successful</returns>
    public Task<SmartDotTransactionResult> WriteBytes(long address, byte[] buffer, long bytes);

    /// <summary>
    /// Asynchronous method to read one page from the SmartDot implementation
    /// </summary>
    /// <param name="address">The page start address in memory</param>
    /// <param name="buffer">Ref data (byte[]) read from the SmartDot implementations page (will attempt to fill completely)</param>
    /// <param name="bytes">Length of data to read into <paramref name="buffer"/></param>
    /// <returns>A bool representing if call was successful</returns>
    public Task<SmartDotTransactionResult> ReadBytes(long address, ref byte[] buffer, long bytes);

    /// <summary>
    /// Sends a command to the SmartDot hardware
    /// </summary>
    /// <param name="command">The string command to send to the SmartDot hardware</param>
    /// <returns>Result from the command execution on the SmartDot hardware</returns>
    public Task<string> OutgoingSmartDotCommand(string command);

    /// <summary>
    /// Invokes <see cref="IncomingSmartDotCommandCallback"/>. Should be executed only from the implementor.
    /// </summary>
    /// <param name="command">String command called from SmartDot hardware</param>
    protected virtual void RaiseIncomingSmartDotCommand(string command) => IncomingSmartDotCommandCallback?.Invoke(command);

    /// <summary>
    /// Incoming command callback (from SmartDot hardware). Signals from the SmartDot hardware that something important happened.
    /// </summary>
    public Action<string>? IncomingSmartDotCommandCallback { get; set; }
}
```

```C#
/// <summary>
/// Enum representing the transaction result state of a communication with SmartDot hardware
/// </summary>
public enum SmartDotTransactionResult : byte
{
    /// <summary>
    /// SmartDot transaction succeeded
    /// </summary>
    SUCCESS,

    /// <summary>
    /// SmartDot transaction failed - unknown cause
    /// </summary>
    FAILURE_UNKNOWN,

    /// <summary>
    /// SmartDot transaction failed - data corruption
    /// </summary>
    FAILURE_PERMISSION_ERROR,

    /// <summary>
    /// SmartDot transaction failed - device disconnected
    /// </summary>
    FAILURE_DISCONNECTED,

    /// <summary>
    /// SmartDot transaction failed - data corruption
    /// </summary>
    FAILURE_DATA_CORRUPTION
}
```

### Unity Visualizer
| ![Unity Visualizer UML](UVUML.png?width=50vw&lightbox=false) | 
|:--:|

The Unity Visualizer is a Unity simulation that contains a lane, a ball, gutters, and pins. The Visualizer will utilize built-in Unity physics as well as realistic implemented physics in order to make the simulation as accurate as possible to an actual throw. The SmartDot Simulator will be used inside the Visualizer to get new data. Once the Visualizer is complete, it will be used to generate video files and simulated data in order to test other components of the project. 

### Unity Camera
The Unity Camera is a virtual camera that will exist within the Unity Visualizer. This camera will be set up to record throws within the Visualizer and export the recording as a video file. The video can then be read by the file reader on the mobile device and analyzed by the Ciclops application. Having a simulated video will also allow the Frontend Team to test finding a ball path prior to using actual video footage of real throws.

### Unity Simulated Data
The Unity Simulated Data will be data that is gathered from the Unity Visualizer. When the simulation is run, data about the ball’s position, velocity, acceleration, angular velocity, and light level will be recorded and sent to the SmartDot Simulator for testing. 

### Class Methods
##### Unity Camera
- startRecord()
- endRecord()
- getVideo()
##### Unity Visualizer
- setLoft(float h)
- setInitialVelocity(Vector3 velocity)
- setCurrentVelocity(Vector3 velocity)
- setCurrentAngularVelocity(Vector3 angle)
- setThrowPos(float x, float angle)
- setBallType(int id)
- setPinsLeft(int[10] pins)
- setOilPattern(float[][] pattern)
- getPinsLeft()
- getThrowNumber()
- getThrowRotations()
- getThrowCurve()
- getThrowVelocity()
- exportSimVideo()
- exportSimBinaryData()
- start()
- rollBall()
- pauseVisualizer()
##### Unity Simulated Data
- No methods
##### Existing Binary Dump File
- No methods
##### SmartDot Memory
- read(int page)
- write(int page, int byte)
- SmartDot Bluetooth Transmitter
- readPage(int page)
- readPage(int ball_record_page)
- writePage(int page, int byte, string data)
- setDefault()
##### Ambient Light Sensor
- sample()
- get_cur_time()
- start_up()
- check_valid_activation()
##### 3-Axis Accelerometer
- sample_x()
- sample_y()
- sample_z()
- get_cur_time()
##### Real Time Clock
- get_cur_time()

