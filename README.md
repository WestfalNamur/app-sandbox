# cs50-final

Final CS50 project.

This is a client-server style application to interact with a geological model made with [GemPy](https://github.com/cgre-aachen/gempy).


# Geo-Model service

We setup our model as a function of data and the GemPy interpolator. This is a bit diffrent from GemPy where a model is an object. Each model has its own server instance. Here we only have one model but later we could solve this via proxies. i.e. www.MYDOMAINNAME.com/model-x/ would guide you to the model-x instance. 

Concepts: 
 
- model = interpolator(model_data)  // The data are the model; Seperate data and functionality;
- model_data = [meta_data, gempy_data]
- endpoints to manipulate model_data and request a new realization.
- archictuce: program as a sequence of (pure?)-functions. 
- caching: functions are cached and checked by thier input hash if they can be reused.


Tools:

- FastAPI stack: WebApi functinality
- GemPy & SciPy stack: The model
- PostgreSQL: persistant storage
- Quality tool run in order: MyPy, black, isort, wemake-python-styleguide, bandit, Pydantic, pandera? (runtime), lgtm.com (github action.


# Client

UI for our geomodel.

Concepts:

- Arcitecture: State => View => Actions (inspired by Elm) & Next.js conventions.
- State:
  - Source of truth on server? RTK : Redux
- View:
  - React
  - Material-Ui
- Quality:
  - Typescript
  - Runtypes on outside communication
  - Jest for Tests


# TODOs

- GemPy data endpoints && UI-Tables
- Docker
- PostgreSQL
- Cypress
- Github actions
- react-three-fiber
