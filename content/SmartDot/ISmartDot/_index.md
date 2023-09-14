+++
title = "ISmartDot Interface"
weight = 100
+++

The ISmartDot interface will allow a layer of abstraction between the Application and the SmartDot or SmartDotSimulator.<!--more-->
The sole function of this interface is to allow reading and writing from pages of memory stored on the SmartDot.
As such, the interface will only have two functions, read & write.

```C#
/// <summary>
/// Interface representing the basic functionality of the Bluetooth connection between the mobile application and a SmartDot implementation (Simulator or Hardware)
/// </summary>
public interface ISmartDot
{
    /// <summary>
    /// Asynchronous method to write one page to the SmartDot implementation
    /// </summary>
    /// <param name="address">The page start address in memory</param>
    /// <param name="data">Data (byte[]) to write to the SmartDot implementations page (must not exceed page size)</param>
    /// <returns>A bool representing if call was successful</returns>
    public Task<SmartDotTransactionResult> WriteBytes(long address, byte[] data);

    /// <summary>
    /// Asynchronous method to read one page from the SmartDot implementation
    /// </summary>
    /// <param name="address">The page start address in memory</param>
    /// <param name="data">Ref data (byte[]) read from the SmartDot implementations page (will attempt to fill completely)</param>
    /// <returns>A bool representing if call was successful</returns>
    public Task<SmartDotTransactionResult> ReadBytes(long address, ref byte[] data);
}

/// <summary>
/// Enum representing the transaction result state of a communicaiton with SmartDot hardware
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
    /// SmartDot transaction failed - device diconnected
    /// </summary>
    FAILURE_DISCONNECTED,

    /// <summary>
    /// SmartDot transaction failed - data corruption
    /// </summary>
    FAILURE_DATA_CORRUPTION
}
```

The SmartDotAPI will be responsible for interpreting data sent and received from an ISmartDot interface implementor by accessing the version # on the first memory page.