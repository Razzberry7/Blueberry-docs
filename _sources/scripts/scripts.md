# Custom-Made Scripts for this Project

After cloning the Yolov5_Scripts repository (see [step 4 in the lambda setup](../yolo/lambda-linux.md)), you should see many scripts in the `/Yolov5_Scripts/bin/` folder.

As of 3/2/24, the following (in alphabetical order) are working and useful scripts:

<ul>
<li>dataset_assigner.py
<li>easy_val.py
<li>fold.py
<li>fold_train.py
<li>FullBushDivider.py
<li>quick_val.py
<li>Train.py
<li>YOLO_Predictor.py
</ul>

There are also utility scripts (scripts that are used within other scripts). These include:

<ul>
<li>check_repo.py
<li>evaluate_datasets.py
<li>print_dir.py
<li>random_seed.py
<li>save_hyps.py*
<li>test_cuda_device.py
</ul>

And, there are also scripts that are old and no longer working/used:

<ul>
<li>cross-val.py
<li>save_hyps.py* 
<li>yolo_quick_fix.py
</ul>

<pre>
* save_hyps.py is both a utility script and currently not being used.
</pre>


## Training 1 Model at a Time

To train a single model at a time, the process is as follows:

<ol>
<li>dataset_assigner.py
<li>FullBushDivider.py
<li>Train.py
</ol>

### `dataset_assigner.py`

This script takes a dataset and assigns it to either be part of the train/valid/test folders in the dataset.

<pre>
This is intended to be used on datasets that contain 100% of the data!
</pre>

This script randomly assigns the images into the different folders. This random assignment can be seeded to replicate its randomness. The script will save a seed that can be used in subsequent runs if needed. Check the `/Yolov5_Scripts/bin/seeds/` directory after running this script for the seeds.

### `FullBushDivider.py`

This script takes a dataset and divides all full-sized images (ex: 3000x4000) into 640x640 (or some other specified dimension) tiles. 

This is important, as YOLOv5 trains better/faster on small square images. It also is important to use the same sized tile as the size of the images you are making predictions on. We currently predict on 640x640 tiles and then stitch them back together, which is why we divide our training data into 640x640 tiles with this script.

### `Train.py`

This script is essentially a script that makes calling the `train.py` easier. Instead of having to type out all of the parameters in-line with the `train.py` script, you can use this `Train.py` to make it easier to put the necessary parameters.

This script also allows for the training to be run in the background and when logged off of Lambda. By calling the `train.py` with `nohup` and `&`, like so: `nohup train.py PARAMETER1 PARAMETER2 ... &`, the training will run in the background due to the `&`, and all of the console output from training will be appended to a file called `nohup.out`.

## K-Fold Cross-Validating

### `fold.py`
IN-PROGRESS

### `fold_train.py`
IN-PROGRESS


## Validating

### `easy_val.py`
IN-PROGRESS

### `quick_val.py`
IN-PROGRESS


## Making Predictions

### `YOLO_Predictor.py`
IN-PROGRESS
