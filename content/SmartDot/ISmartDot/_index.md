+++
title = "ISmartDot Interface"
weight = 100
description = 'Information about the ISmartDot interface'
+++

The ISmartDot interface will allow a layer of abstraction between the Application and the SmartDot or SmartDotSimulator.<!--more-->
The sole function of this interface is to allow reading and writing from pages of memory stored on the SmartDot, and make / maintain connections to the SmartDot hardware.

### ISmartDot interface

```C#
/**
 * Interface representing the basic functionality of the Bluetooth connection between the mobile 
 * application and a SmartDot implementation (Simulator & Hardware)
 */
public interface ISmartDot {
    /**
     * Summary: Attempts to create a connection to the SmartDot hardware
     * Params:  connectionParameters
     * Returns: Version representing the SmartDot hardware version (APIs use), null 
     *          if unable to connect
     */
    public Task<Version?> Connect(ConnectionParameters connectionParameters);
    
    /**
     * Summary: Tests if the connection to the SmartDot hardware is present
     * Params:  connectionParameters
     * Returns: Boolean representing if there is a connection to SmartDot hardware
     */
    public Task<bool> IsConnected();

    /**
     * Summary: Asynchronous method to write one page to the SmartDot implementation
     * Params:  address -> The page start addess in memory
     *          buffer  -> Data (byte[]) to write to the SmartDot implementations page
     *          bytes   -> Length of data to write from
     * Returns: A bool representing if call was successful
     */
    public Task<SmartDotTransactionResult> WriteBytes(long address, byte[] buffer, long bytes);

    /**
     * Summary: Asynchronous method to read one page from the SmartDot implementation
     * Params:  address -> The page start addess in memory
     *          buffer  -> Ref data (byte[]) read from the SmartDot implementations page (will attempt
                           to fill completely)
     *          bytes   -> Length of data to read into
     * Returns: A bool representing if call was successful
     */
    public Task<SmartDotTransactionResult> ReadBytes(long address, ref byte[] buffer, long bytes);

    /**
     * Summary: Sends a command to the SmartDot hardware
     * Params:  command -> The string command to send to the SmartDot hardware
     * Returns: Result from the command execution on the SmartDot hardware
     */
    public Task<string> OutgoingSmartDotCommand(string command);

    /**
     * Summary: Invokes IncomingSmartDotCommandCallback method. Should be executed only from the 
     *          implementor.
     * Params:  command -> String command called from SmartDot hardware
     * Returns: n/a
     */
    protected virtual void RaiseIncomingSmartDotCommand(string command) => IncomingSmartDotCommandCallback?.Invoke(command);

    /**
     * Summary: Incoming command callback (from SmartDot hardware). Signals from the SmartDot hardware 
     *          that something important happened.
     * Params:  none
     * Returns: n/a
     */
    public Action<string>? IncomingSmartDotCommandCallback { get; set; }
}
```

### SmartDotTransactionResult enumeration

```C#
/**
 * Enum representing the transaction result state of a communication with SmartDot hardware
 */
public enum SmartDotTransactionResult : byte {
    /**
     * SmartDot transaction succeeded
     */
    SUCCESS,

    /**
     * SmartDot transaction failed - unknown cause
     */
    FAILURE_UNKNOWN,

    /**
     * SmartDot transaction failed - data corruption
     */
    FAILURE_PERMISSION_ERROR,

    /**
     * SmartDot transaction failed - device disconnected
     */
    FAILURE_DISCONNECTED,

    /**
     * SmartDot transaction failed - data corruption
     */
    FAILURE_DATA_CORRUPTION
}
```

### ConnectionParameters class

```C#
/**
 * Parameters necessary to successfully connect to the correct SmartDot hardware
 */
public class ConnectionParameters {
    
}
```

The SmartDotAPI will be responsible for interpreting data sent and received from an ISmartDot interface implementor by accessing the version # on the first memory page.
