FROM python:3.10-slim
WORKDIR /

COPY requirements.txt .
RUN pip install -r requirements.txt

COPY . /

CMD ["python3", "voice-bot.py", "start"]