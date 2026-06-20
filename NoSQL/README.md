# NoSQL - MongoDB Project

This project focuses on managing and manipulating data in a document-oriented database using **MongoDB** and Python (**PyMongo**).

## Learning Objectives
* Understand the differences between NoSQL and RDBMS.
* Perform CRUD operations in MongoDB.
* Query, filter, sort, and paginate data.
* Work with MongoDB aggregation pipelines and indexing.
* Query MongoDB using Python scripts.

## Requirements
* OS: Ubuntu 20.04 LTS
* Python: version 3.8.5 (styled with PyCodeStyle)
* MongoDB: version 4.4.x

## Project Structure

### MongoDB Scripts (Mandatory)
* `0-list_databases`: Lists all databases.
* `1-use_or_create_database`: Selects or creates `my_db`.
* `2-insert`: Inserts a document into `school`.
* `3-all`: Lists all documents in `school`.
* `4-match`: Filters documents by name.
* `5-count`: Counts documents in `school`.
* `6-update`: Adds an attribute to a document.
* `7-delete`: Deletes specific documents.

### Python / PyMongo Scripts (Mandatory)
* `8-all.py`: Returns all documents in a collection.
* `9-insert_school.py`: Inserts a document using kwargs.
* `10-update_topics.py`: Changes all topics of a school document.
* `11-schools_by_topic.py`: Lists schools matching a specific topic.
* `12-log_stats.py`: Provides metric statistics on Nginx logs stored in MongoDB.
