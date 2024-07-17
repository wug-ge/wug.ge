---
title: "Tutorial: Docker PHP Development setup for the generation TikTok attention span users"
description: Years after the mainstream adoption of Docker I still stumble about so many fresh beginner programmers using XAMPP or WAMP for their PHP Dev setups - and having issues with that. This tutorial is meant to show you how easy a Docker setup actually can be for your development environment and what problems it will solve.
---

# Tutorial: Docker PHP Development setup for the generation TikTok attention span users

<br>
<p>Years after the mainstream adoption of Docker I still stumble about so many fresh beginner programmers using XAMPP or WAMP for their PHP Dev setups - and having issues with that. This tutorial is meant to show you how easy a Docker setup actually can be for your development environment and what problems it will solve.</p>
<br>
<p>This tutorial is not meant to show you how to PROPERLY use Docker. It is meant for beginners who don't want to hassle around with another new thing to learn but are having problems or just don't want to use XAMPP or WAMP. Don't use this setup in production bla bla bla...</p>
<br>
<b>Your feedback is required!</b><br> 
<p>This tutorial is meant to be an absolute idiots guide to the topic. While I'm trying to make it as simple as possible, please contact me if you are falling in any pitfall! I'm very open to helping you personally with your pitfall and adjust the tutorial accordingly. Don't give up, I don't bite!</p>
<br>
<b>Let's start! It's short and painless, I promise!</b>
<br><br>

## Why you should even bother about it instead of other solutions

<p>
If you don't care, you can skip this section!
While your current solution might offer some of this advantages already, it won't have all of them. This are some of the advantages Docker will give you:
<ul>
  <li>
    Encapsulate different projects!
    <ul>
      <li>Don't ever create weird subfolders in a httpdocs root for different projects!</li>
      <li>Don't ever create another vhost and hosts entry on your host machine Just run different docker containers for each project locally and access them over different ports.</li>
    </ul>
  </li>
  <li>
    Run multiple PHP versions
    <ul>
      <li>Even at the same time! Just change the version you want for your project in an .env file, restart/build your containers with one command and you got the version your heart desires!</li>
    </ul>
  </li>
    
<li>
  No more weird logs or unknown things happening
  <ul>
    <li>Just run a single command and your containers are running, showing you the log live!</li>
    <li>It's in the terminal which might seem scary, but trust me, it's actual easier then trying to figure out what a UI is doing or why it's showing something weird.</li>
  </ul>
</li>
    
<li>
  Have a proper Linux environment
  <ul>
    <li>While you might not even know anything about Linux right now - Trust me you want your development environment to be in Linux. It's fine if you are using Windows or those apple thingies, having Linux will only have   advantages and you will rarely have to touch it.</li>
  </ul>
</li>
    
</ul>
</p>
<br>

## Install Docker & Docker Compose

<p>
I'm pretty sure you can figure this one out, you can download Docker:
<a href="https://docs.docker.com/get-docker/" target="_blank">Get Docker here!</a>
(or in your package manager if you are using any)
<br>
Here comes a downside for Windows Users: Since Docker for Windows requires Hyper-V, you won't be able to use VirtualBox and Docker at the same time. You have to enable/disable Hyper-V an reboot your PC in order to use one of them. 
<br>
<b>Only if you are using Linux:</b> You'll have to install Docker Compose seperately, get it <a href="https://docs.docker.com/compose/install/" target="_blank">here</a>.
<br>
Make sure Docker is properly installed by opening a Command Prompt/Terminal and running:

```bash
docker --version
```

<br><br>

</p>

## Get your environment

<p>
Now that you got Docker, it's time for the actual development setup.
I prepared an environment for you <a href="https://github.com/wug-ge/php-apache-mariadb-project-base" target="_blank">here</a>.
If you know about git, you know what you do. If you don't: no worries!

Just click this link to download it: <a href="https://github.com/wug-ge/php-apache-mariadb-project-base/archive/refs/heads/main.zip" target="_blank">Your super cool future dev environment</a>
<br><br>

</p>

## Configure your environment

<p>
I'm sorry, but yes you have to do some configuration:
<ul>
<li>Rename the folder to the name of your project</li>
<li>- Copy the file ".env.example" to a new file called only ".env" (the dot is important)</li>
<li>- Open the file ".env" and set the variables accordingly, if you are fine with the defaults you can also keep them! Still a short explanation of the different variables:
<ul>
    <li>PHP_VERSION=latest -> this means you'll automatically download the current latest PHP version when you start your environment. You can change this to "PHP_VERSION=8" or any other version you might desire</li>
    <li>APACHE_HTTP_PORT=80 -> the webserver will open on port 80 per default, so you can just type "localhost" in your browsers address bar and be there. You might want to change this in case your port 80 is already occupied</li>
    <li>MYSQL_PORT=3306 -> same as with APACHE_HTTP_PORT, but for MYSQL</li>
    <li>MYSQL_ROOT_PASSWORD=root -> the password for MYSQL's default "root" user you can login with</li>
    <li>MYSQL_VERSION=latest -> same as with PHP_VERSION, but for MYSQL</li>
    <li>MYSQL_DATABASE=default -> the environment will create an empty database for you at startup. You can always create another one with SQL, but if you already know the name of your database you can change it here (or leave it if you don't care)</li>
    </ul>
    </li>
    </ul>
</p>

<br>

## Run your environment

<p>
Here comes the scary part: How do you run this thing?
There is no button you can press, but contact me and I'll make if you if you really want one. But if you manage to overcome your fear, run the following in the <b>root directory of your project</b> (in the folder you renamed):

```bash
docker-compose up
```

If everything works fine, you should see a couple of progress bars and logs. You don't even have to worry about it for now, but for the future you can view the live logs of your application in this window, so don't close it! You might want to call this in your IDE's terminal actually, so you can view your logs while you code!

Now go and visit <a href="http://localhost" target="_blank">http://localhost</a> (don't forget to add your custom port in case you changed it) and you should see a friendly "Hello World!"
Where does this come from you might ask?
In your project root there in the directory /src/public there is a file called "index.php" in which you can now run your custom PHP code. Try it out!

You can also connect to your database now, if you left everything by default try connecting to it with your favourite SQL client! (I recommend <a href="https://www.heidisql.com/" target="_blank">HeidiSQL</a> )

Your database credentials are (if you left everything at default settings):
Username: root
Password: root
Database host: localhost
Database name: default
Database port: 3306

<b>If you are connecting from localhost!</b>

If you are connecting from inside your PHP (not your local installed mysql client), your Database host will ALWAYS be "mysql", NOT "localhost".
Also, your database port inside PHP will ALWAYS be 3306, no matter what you set in your .env file.
<br><br>

</p>

## Stopping the environment

<p>
Just press Strg+C and that's it, the environment will stop.
</p>
<br>

## I'm stuck at [insert pitfall], what do I do?

<p>
Contact me wherever you like, I might have forgotten about something and I'm very happy if this tutorial does actually help you.
</p>
<br>

## I have other questions about the setup

<p>
Want to know how to install PHP extensions? How to do a composer update?
How to SSH into your Linux environment?

Again: just contact me and I'll explain. I'm not sure til what level people will actually use this tutorial before they create their own.
I'm very happy to add it to the tutorial, it's easy, trust me!

</p>
