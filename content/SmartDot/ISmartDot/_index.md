+++
title = "ISmartDot Interface"
weight = 100
description = 'Information about the ISmartDot interface'
+++

The ISmartDot interface will allow a layer of abstraction between the Application and the SmartDot or SmartDotSimulator.<!--more-->
The sole function of this interface is to allow reading and writing from pages of memory stored on the SmartDot, and make / maintain connections to the SmartDot hardware.

### ISmartDot interface

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

### SmartDotTransactionResult enumeration

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

### ConnectionParameters class

```C#
/// <summary>
/// Parameters necessary to successfully connect to the correct SmartDot hardware
/// </summary>
public class ConnectionParameters
{
    
}
```

The SmartDotAPI will be responsible for interpreting data sent and received from an ISmartDot interface implementor by accessing the version # on the first memory page.
