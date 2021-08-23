# cs50-final

Final CS50 project.

# Geo-Model service

A GemPy based geo-model instance as a function of data and interpolator. <br/>
Next: Setup SurfacePoints-Table, combine it with the Pydantic BaseModel and pandera validator.

# Client

React/Redux-Toolkit <br>
**Redux** manages the data layer of our application. The state is stored in the redux **store**. **RTK-Query** (included in Redux-Toolkit) takes care to keep our store and service in sync. It does this by re-querying every second or when we do dispatch an action that changes the Gempy-Model related data. **React** renders the view layer which is made up of mainly **Material-Ui** components. The overall architecture follows a few simple principles. React-Components render Component and / or HTML. Components do not pass data between each other but always over the store. This design is inspired by Elm. **Store** -> **View** -> **Update**. For code quality we use Typescript in strict mode, Runtypes, and ESLint.

