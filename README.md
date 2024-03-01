# Blueberry-docs
This is a repo to host a Jupyter Notebook for the blueberry research project for the Rowan University Math Department.

To use, activate the python environment, build the book, and then import it to Github.

1. source venv/Scripts/activate
2. jupyter-book build mynewbook
3. ghp-import -n -p -f ./mynewbook/_build/html

If the above steps do not work somehow, use the documentation for jupyter-book to try and fix it:
- The steps are here for building: (https://jupyterbook.org/en/stable/start/build.html)
- The steps for pushing the changes to the website are here: (https://jupyterbook.org/en/stable/publish/gh-pages.html)


## Adding Images

Add images to the outermost images folder and use `../../images/name.png` to use the images in your markdowns. See existing markdowns for an example.


## Adding Videos

Add videos to the `mynewbook/_static/videos` folder and use `../_static/videos/vid.mp4` to use videos in your markdowns. See annotating.md for an example.
