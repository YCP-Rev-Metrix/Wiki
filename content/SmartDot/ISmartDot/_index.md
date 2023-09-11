+++
title = "ISmartDot Interface"
weight = 100
+++

The ISmartDot interface will allow a layer of abstraction between the Application and the SmartDot or SmartDotSimulator.
The sole function of this interface is to allow reading and writing from pages of memory stored on the SmartDot.
As such, the interface will only have two functions, read & write.

```C#
public interface ISmartDot
{
    /// <summary>
    /// Asynchronous method to write one page to the SmartDot implementation
    /// </summary>
    /// <param name="address">The page start address in memory</param>
    /// <param name="bytes">Bytes to write to the SmartDot implementations page (must not exceed page size)</param>
    /// <returns>A bool representing if call was successful</returns>
    public Task<bool> WriteBytes(long address, byte[] bytes);

    /// <summary>
    /// Asynchronous method to read one page from the SmartDot implementation
    /// </summary>
    /// <param name="address">The page start address in memory</param>
    /// <param name="bytes">Out bytes read from the SmartDot implementations page (one page size)</param>
    /// <returns>A bool representing if call was successful</returns>
    public Task<bool> ReadBytes(long address, [NotNullWhen(true)] out byte[] bytes);
}
```




The SmartDotAPI will be responsible for interpreting data sent and recieved from an ISmartDot interface implementor by accessing the version # on the first memory page.