---
title: WPF - Update ObservableCollection from another Thread
tags:
- WPF
- C#
- Threads
emoji: 🧵
link: https://pragmaticdevs.wordpress.com/2015/08/25/modifying-observablecollection-from-worker-threads-in-wpf/
---

# Modify Observable Collection on multithreaded WPF Apps
* If you try to update the collection from outside the UI thread you get the following error: 
```System.NotSupportedException : This type of CollectionView does not support changes to its SourceCollection from a thread different from the Dispatcher thread.```

* For WPF 4.5 we only need to:
  * Create the ObservableCollection in the main thread (Usually ViewModel)

  ```C#
    DeviceList = new ObservableCollection<KasaaDevice>();
  ```

  * Use BindingOperations.EnableCollectionSynchronization

  ```C#
    BindingOperations.EnableCollectionSynchronization(DeviceList, _lock);
  ```

  * Don't forget to add the lock object to class

  ```C#
    private static object _lock = new object();
  ```
