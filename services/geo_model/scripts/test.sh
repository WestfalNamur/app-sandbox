# Validate if in right dir
if  [ ! -f "./app/__init__.py" ]
then
    echo "You are not in the correct directory. Naviagte to portfolio/api."
    exit 1
fi

# Validate if Python enviroment is set up
if  [ ! -d "./env" ]
then
    echo "Did not find an virtual enviroment for Python under ./env/"
    exit 1
fi

# source correct python enviroment
source env/bin/activate
py_interpreter=$(which python)
echo "Running Python from: $py_interpreter"

# flake8
python3 -m flake8 app/

# run black
python3 -m black app/

# run mypy  # exit if ther is something to imporve
python3 -m mypy app/
if [ $? -eq 1 ]
then
    echo "MyPy found something."
    exit 1
fi


# run tests
python3 -m pytest --cov app/