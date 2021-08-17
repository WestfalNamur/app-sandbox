# --- Copy type definitions from source to shared ---
# gempy BaseModel to shared JSONSchemas
cp -r services/gempy_model/app/types/exports/json_schemas/* shared/data_schemas/gempy_model/

# --- Copy type definitions from shared to consumers ---
# shared to client
cp -r shared/data_schemas/gempy_model/* client/src/types/gempyBaseModelsSchemas 

# --- Convert to custom lanuage types ---
# Clean up existing ones to avoide error in json2ts
rm -rf client/src/types/gempyBaseModelsSchemas/*.ts
# Create Typescript schemas
json2ts -i client/src/types/gempyBaseModelsSchemas/ -o client/src/types/gempyBaseModelsSchemas/