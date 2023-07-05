# Environment Setup

## Cloning The Environment

To setup your Python environment and have all the libraries ready to go, copy the environment to any destination of your choosing with:
```md
cp -r /data/drone/tranch29/python_env [destination-path]
```
I recommend copying it to your personal directory in the `/data/drone` project directory, but if you have a directory that you prefer, feel free to move it there.

## Using The Environment

In order to start use the environment, `cd` into wherever your `python_env` is located. Then, run:
```md
source python_env/bin/activate
```
Now, on the left-side of your terminal input, you should see a `(python_env)` tag. Whenever you use the `python` command, it will use this environment and all of its installed libraries.

## Exiting The Environment
In order to exit the environment, simply run:
```md
deactivate
```
Now, the `python` command will execute whatever the default Python binary is.
