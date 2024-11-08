# Import smtplib for the actual email sending function
import smtplib, ssl

from fastapi import FastAPI, Response, status
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

from email.mime.text import MIMEText
import config

origins = [
    "https://samokat.amg.net.ru",
    "https://www.samokat.amg.net.ru",
]

app = FastAPI()

# CORS middleware для размещения бекенда и фронта на одном домене
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class FormFields(BaseModel):
    name: str
    city: str
    phone_number: str
    sex: str
    age: int
    transport: str

def send_smtp_mail(form_fields):
    port = 465  # For SSL
    smtp_server = "smtp.timeweb.ru"
    sender_email = "samokat-robot@amg.net.ru"  # Enter your address
    receiver_email = "hr@amg.net.ru"  # Enter receiver address
    password = config.SMTP_PASSWORD

    text_type = 'plain' # or 'html'
    text = (f"ФИО: {form_fields['name']}\n"
    f"Город: {form_fields['city']}\n"
    f"Номер телефона: {form_fields['phone_number']}\n"
    f"Пол: {form_fields['sex']}\n"
    f"Возраст: {form_fields['age']}\n"
    f"Транспорт: {form_fields['transport']}")
    msg = MIMEText(text, text_type, 'utf-8')
    msg['Subject'] = 'Анкета соискателя samokat'
    msg['From'] = sender_email
    msg['To'] = receiver_email

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, password)
        server.send_message(msg)



@app.post("/send-email")
async def send_email(form_fields: FormFields):
    send_smtp_mail(form_fields.model_dump())
    
    return Response(status_code=status.HTTP_204_NO_CONTENT)
