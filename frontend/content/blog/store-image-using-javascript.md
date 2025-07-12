---
title: "How to store an image using JavaScript? (Nuxt and Express)?"
description: "A friend of mine got this interview question recently. I thought it's actually a really good question, especially for especially for senior developers. What is the proper way to save an image with Nuxt and Express?"
---

# How to store an image using JavaScript?
## Part 1: The Protocol (with Nuxt and Express example)

<br>
<p>A friend of mine went to a job interview as a web developer recently. One of the questions he got was "How do you save an image?"<br>
This is a really good question to me, since I keep changing my mind on this topic and to be honest: I'm still unsure how to save an image "properly".<br>
In this post, I want to explain my way of saving and displaying images with an example implementation in Nuxt and Express, answering the following:<br>
<ul style="font-weight:400;">
<li>Which protocol to use?<br></li>
<li>How to save (server side)<br></li>
<li>How to display (client side)<br></li>
<li>Additional Concerns (Authentication,...)<br></li>
</ul>
</p>
<br>

# Which protocol to use?
<p>The first question one should ask is how to get the image from the client side to the server. There are several options with drawbacks and benefits:<br>
<ul>
<li>multipart/form-data</li>
<li>application/octet-stream or image/[image-type]</li>
<li>application/json (encoded as string)</li>
<li>application/x-www-form-urlencoded</li>
<li>in websockets as chunked binary data</li>
</ul>
<br>

Let's eliminate the objectively "bad" options first, which would be "application/json" and "x-www-form-urlencoded". Both of these options can't handle binary data meaning the image has to be base64 (or one of the less common more efficient algorithms like base85 or base122) encoded. This is only acceptable in edge cases, like when you HAVE to use JSON for some specific reason, but generally not a good option to save an image.<br>
<br>
We're left with 3 valid options:<br>

## multipart/form-data
This is a good option, but Multipart is a complex protocol. Multipart uploads support binaries (most important), uploading multiple files in one request, adding metadata to a file, upload progress tracking,...
It is one of my favorite protocols used for uploading small files, however it also comes with some caveats, once you're trying to upload a really large file:
- it doesn't natively support chunking the uploaded data (splitting it in multiple requests, this is especially a problem once you have to deal with things like Cloudflare's 100MB Upload Body Size limit)
- it doesn't support resumable uploads out of the box and it's hard to implement given the protocol's complexity
<br>
<br>

## application/octet-stream

This is basically just sending the binary directly to the server. This makes some things easier, like creating resumable file uploads. While it's probably the simplest method to use, I don't like it for the following reasons:
- it doesn't support adding any metadata, you have to create an extra endpoint (JSON or similar) where you can upload the metadata
- it doesn't support multiple files in a single request
<br>
<br>

## in websockets as chunked binary data
This is a method I once implemented for a complex upload system which can support a lot of metadata, huge videos and so on via a custom protocol. The chunked binary data is temporarily saved as blob parts with byte tracking in the app's database. While this works surprisingly fine and supports resumable uploads in an efficient way, it also has its drawbacks:
- the implementation is complex and so prone to errors
- my solution needs to store the data temporarily in the database, causing a lot of database load when it's time to aggregate the chunks on upload finish
<br><br>
So basically all of our options are limited?<br>
Yes, unfortunately this is the case...
<br>
<br>

<client-only><!-- A in H2 causes nuxt to have hydration issues, reproduce and open nuxt issue -->

## introducing <a href="https://tus.io" target="_blank" class="blog-link">tus.io</a>
While researching this issue, I found this project offering a HTTP based protocol for handling file uploads, offering a JavaScript client library supporting all of our needs: handling metadata, supporting upload progress tracking, supports resumable and chunked uploads as well as supporting multiple files: <a href="https://github.com/tus/tus-js-client" target="_blank" class="blog-link">tus/tus-js-client</a><br>
Lucky for us, tus also has a NodeJS server implementation ready for us: <a href="https://github.com/tus/tus-node-server" target="_blank" class="blog-link">tus/tus-node-server</a><br>
<br>
While this is a more complex solution and probably overkill for some simple apps, if you handle a lot of uploads especially with larger files, in my testing this performs very well to solve all your upload protocol problems.
I've prepared a repository utilizing a tus-upload here: <a href="https://github.com/wug-ge/nuxt-express-image-uploader" target="_blank" class="blog-link">wug-ge/nuxt-express-image-uploader</a>
<br> 
In my future projects, <a href="https://tus.io" target="_blank" class="blog-link">tus.io</a> will definitely be the solution of choice for me to handle complex uploads.
<br>
</p>
<br>

## final thoughts
In my opinion: Use multipart if you don't have to chunk or upload large files. Use <a href="https://tus.io" target="_blank" class="blog-link">tus.io</a> if you have to support big files, chunking, resumable uploads,...
</client-only>

<br>
Now that we've solved the protocol question, in the next part, we'll discover how to save an image on the server side, compress it properly,... (WIP, Part 2 not yet published, will be linked here once finished)