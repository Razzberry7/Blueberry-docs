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

Wherever you wish to put the virtual environment (on Lambda this is traditionally in `/mnt/data2/drone/YOUR_NAME/`), use the following command to make a virtual environment: `virtualenv ./python_env2`

This will create an empty virtual environment called "python_env2", <u>this name can be anything you wish</u>, but for this example we'll use "python_env2".

### Activate the virtual environment
With a new virtual environment created, you can then use the command `source python_env2/bin/activate` to activate the virtual environment. You'll know that it is working if you see `(python_env2)` before your cursor on the command line. 

With the environment active, we can then download packages related to the project, and they should be saved within the python_env2 directories. The easiest & quickest way to ensure that you're using the right packages and their respective version numbers is by downloading packages from a <b>requirements.txt</b> file (see next section). 

### Deactivate the virtual environment
In order to exit the environment, run: `deactivate`

Now, the `python` command will execute scripts with whatever the default (global) environment is.

## Downloading Packages from a Requirements.txt File

Fortunately, this is pretty easy. 

We can use the pip command to download all packages in the requirements.txt file by using the following command: `pip install -r ./requirements.txt`

Requirements.txt files are created manually by the developers of Python projects, so if there is not one present, then you'll unfortunately have to manually add packages as they come up within scripts. 

<pre>
When running scripts, it will tell you in some error what package the script was expecting. However, it's possible the package it tells you it needs is not using the same name as the package found in pip. 

This is a quirk of packages in Python. 

If you try to pip install the package it tells you it needs and nothing gets installed, try googling alternative names for that package. 

"cv2" is a good example of this, where the actual package is "opencv-python".
</pre>

Let's cover how you can make your own requirements.txt files, that way you can easily share your Python projects with others.

## Creating a Requirements.txt File

To create your own requirements.txt files, you need to have an active virtual environment. See above for instructions on creating/activating a virtual environment.

With a virtual environment active, execute the following command to create a requirements.txt file: `pip freeze > ./requirements.txt`

The command `pip freeze` will output all the currently installed packages, while the `> FILENAME` portion of the command will save the output of the command into (>) a file. 

If the file doesn't already exist, it will create one, otherwise it will overwrite the existing one.