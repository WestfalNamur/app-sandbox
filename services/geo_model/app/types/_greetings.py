from pydantic import BaseModel


class Greeting(BaseModel):
    greeting_id: int
    text: str
    urgency: int
