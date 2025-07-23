---
title: "How to upload an image using JavaScript? (Part 2)"
description: "How to save the image on the server? What options do we have and which one should YOU use?"
date: '2025-07-23'
---

# Part 2: How to save the image on the server

For saving an image, we have again several options available:
- On the API servers local file system
- In the database
- On a separate storage server

Each of these offers their advantages and disadvantages, let's go through them:
<br><br>

## On the API servers local file system
This is probably the simplest method and the one we all learnt first. When the request is received by your API, you parse it (depending on which upload protocol you used, tus.io also supports saving to the local file system as well as other methods) and then save it as a file on your server.<br>
There is nothing wrong with this method per se, but we might encounter problems sooner or later:
- What if our app is under a lot of stress and we want to add a second server? How do you know which stores which files?
- What if we want to give users in different locations an option to access pictures faster? (like a CDN)
- How do we deal with backups, volumes, quotas, permissions, redundancy,...?
<br>
These are problems that you might not have with a small app or website, but you will definitely encounter them if you try to build a real world web app with a solid user base.
<br>
I've seen some people use to work around this problem with:
<br>
<br>

## Saving images in the database
This sounds like it would solve some of our problems: We can use the database across our multiple application servers, we can control permissions, we already have backups probably and so on.<br>
However I strongly advise against this method for the following reasons:
- While most databases support saving binary data and are even quite performant dealing with it, it is a pain to deal with large datasets in your database. For example, when selecting some rows, you have to always remember to exclude the image otherwise it will download all files with each SQL statement
- You can't easily view the data.
- You are not flexible with backups. (Maybe you want to do a full backup of the database data more often than with the files)
- What about file formats, different versions of a file, metadata,...? You don't have the features of a file system available.
<br>
So we are left with one last option which is surely the way to go nowadays:
<br>
<br>

## On a separate storage server
Putting all the files your application needs or users upload on a separate server is definitely the way to go if you ask me. This however requires another protocol so the API server can upload the files to the storage server when received. I will not explain all the different protocols and legacy options (like FTP) you could use to do this, but just the current state of the art method: S3.<br>
Originally coming from AWS, S3 has become the de facto standard for dealing with files and documents. That doesn't mean you have to use AWS though!<br>
For the people loving self hosting as much as I do here, I would like to introduce: <a link="https://min.io/" class="blog-link">MinIO</a><br>
MinIO is a self hosted S3 compatible server which I love and can absolutely recommend. You can spin one up in a few seconds using their Docker Container.<br>
This offers the following advantages:
- Decoupling of file requests and API requests
- Decoupling of files and database data
- Easy backups with mcli
- Supports clusters, quotas, and complex permissions
- and many more...
<br>
<br>

Now that we have found the perfect storage method for our saving needs, we can move on to part 3: Compressing the image into needed resolutions.<br> 
(Coming soon – Part 3 will be linked here once published