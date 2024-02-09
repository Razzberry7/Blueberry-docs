# Virtual Environments in Python Projects


In Python projects, it is standard practice to create a <b>virtual environment</b> for each project you work on.

A virtual environment allows a user to download packages for the scripts in the project without downloading those packages to a global environment. By creating a virtual environment and a <b>requirements.txt</b>, you can easily share Python projects with others.

So, let's learn how to set up a virtual environment and generate a requirements.txt.


## Creating and Using a Virtual Environment

<pre>
IDEs like Pycharm and Visual Studio Code will mitigate the process of creating and using a virtual environment. For this documentation, I will show the process of creating and using one from scratch.
</pre>


### Create the virtual environment

<pre>
If you don't have the virtualenv package downloaded, please run: <font color='red'>pip install virtualenv</font> first!
</pre>

Wherever you wish to put the virtual environment (on Lambda this is traditionally in <b>/data/drone/YOUR_NAME/</b>), use the following command to make a virtual environment: <font color='red'>virtualenv ./python_env2</font>

This will create an empty virtual environment called "python_env2", this name can be anything you wish, but for this example we'll use "python_env2".

### Activate the virtual environment
With a new virtual environment created, you can then use the command <font color='red'>source python_env2/bin/activate</font> to activate the virtual environment. You'll know that it is working if you see `(python_env2)` before your cursor on the command line. 

With the environment active, we can then download packages related to the project, and they should be saved within the python_env2 directories. The easiest & quickest way to ensure that you're using the right packages and their respective version numbers is by downloading packages from a <b>requirements.txt</b> file (see next section). 

### Deactivate the virtual environment
In order to exit the environment, simply run: <font color='red'>deactivate</font>

Now, the `python` command will execute whatever the default Python binary is.

## Downloading Packages from a Requirements.txt File


Fortunately, this is pretty simple. 

We can use the pip command to download all packages in the requirements.txt file by using the following command: <font color='red'>pip install -r ./requirements.txt</font>

Requirements.txt files are created manually by the owners of Python projects, so if there is not one present, then you'll unfortunately have to manually add packages as they come up within scripts.

Let's cover how you can make your own requirements.txt files, that way you can easily share your Python projects with others.


## Creating a Requirements.txt File


To create your own requirements.txt files, you need to have an active virtual environment. See above for instructions on creating/activating a virtual environment.

With a virtual environment active, execute the following command to create a requirements.txt file: <font color='red'>pip freeze > ./requirements.txt</font>

The command "<font color='red'>pip freeze</font>" will output all the currently installed packages, while the "<font color='red'>> FILENAME</font>" portion of the command will save the output of the command into a file. If the file doesn't already exist, it will create one, otherwise it will overwrite the existing one.