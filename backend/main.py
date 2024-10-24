from fastapi import FastAPI, Response, status
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Import smtplib for the actual sending function
import smtplib, ssl


origins = [
    "http://samokat.amg.net.ru",
    "http://www.samokat.amg.net.ru",
]

app = FastAPI()

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
    password = "r60787vE1"
    from email.mime.text import MIMEText

    text_type = 'plain' # or 'html'
    text = """\
    ФИО: {name}
    Город: {city}
    Номер телефона: {phone_number}
    Пол: {sex}
    Возраст: {age}
    Транспорт: {transport}""".format(**form_fields)
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
