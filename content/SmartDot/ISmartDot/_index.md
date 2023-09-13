+++
title = "ISmartDot Interface"
weight = 100
+++

The ISmartDot interface will allow a layer of abstraction between the Application and the SmartDot or SmartDotSimulator.<!--more-->
The sole function of this interface is to allow reading and writing from pages of memory stored on the SmartDot.
As such, the interface will only have two functions, read & write.

```C#
using System.Diagnostics.CodeAnalysis;

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
    public Task<bool> WriteBytes(long address, byte[] data);

    /// <summary>
    /// Asynchronous method to read one page from the SmartDot implementation
    /// </summary>
    /// <param name="address">The page start address in memory</param>
    /// <param name="bytes">The length of data to read</param>
    /// <param name="data">Out data (byte[]) read from the SmartDot implementations page (length of bytes parameter)</param>
    /// <returns>A bool representing if call was successful</returns>
    public Task<bool> ReadBytes(long address, long bytes, [NotNullWhen(true)] out byte[] data);
}
```




The SmartDotAPI will be responsible for interpreting data sent and received from an ISmartDot interface implementor by accessing the version # on the first memory page.
