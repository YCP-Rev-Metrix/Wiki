+++
title = "Database Observation Data"
weight = 100
description = 'All data collected from database engine stress testing'
+++

Below is all of the data collected from our database engine stress testing 


#### Making 100-million entries in each database engine
The Databases orginally tested were PostgreSQL, MySQL, and MongoDB.
| ![Large Data](UserTableForLargeData.png?width=40vw&lightbox=false) |
|:--:|

MongoDB was removed from the list of candidates for our database due to the read/write speeds of the others being significantly faster than its own.

#### Delete, Update, and Add operations in PostgreSQL & MySQL
| ![Delete, Update, Add](DeleteUpdateAdding.png?width=50vw&lightbox=false)|
|:--:|

#### PostgreSQL and MySQL tables and performance graphs
| ![PostgreSQL vs MySQL](PostgreSQLvsMySQL.png?width=100vw&lightbox=false)|
|:--:|

Due to the large performance difference between PostgreSQL and MySQL, the MySQL database engine was most likely to be removed.  However, we continued to test it against the other engines in the event that at higher rates/speeds, it out performed them.

SQL Server was recommended by Professor Hake, so we looked into it and began testing it against the PostgreSQL and MySQL engines.

#### SQL Server tables and performance graphs
| ![SQL Server Tables and Graphs](SQLServer.png?width=100vw&lightbox=false)|
|:--:|

#### Adding a single row in each engine
| ![Adding single row](AddingSingleRow.png?width=35vw&lightbox=false)|
|:--:|

Due to the significant differences in speed between SQL Server and PostgreSQL, along with MySQL, we have decided to use SQL Server as our primary database engine for RevMetrix.
