from fastapi import FastAPI, Response, status
from pydantic import BaseModel

# Import smtplib for the actual sending function
import smtplib, ssl


app = FastAPI()

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
    message = """\
    Subject: Анкета соискателя samokat

    ФИО: {name}
    Город: {city}
    Номер телефона: {phone_number}
    Пол: {sex}
    Возраст: {age}
    Транспорт: {transport}""".format(**form_fields)

    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(smtp_server, port, context=context) as server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email, message)



@app.post("/send-email")
async def send_email(form_fields: FormFields):
    send_smtp_mail(form_fields)
    
    return Response(status_code=status.HTTP_204_NO_CONTENT)
