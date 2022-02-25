FROM python:3.10-alpine3.15

RUN ["mkdir", "/app"]
WORKDIR /app

RUN addgroup app && adduser -S -G app app
USER app

COPY requirements.txt .
RUN pip install -r requirements.txt
COPY . .


EXPOSE 5000

CMD ["python", "app.py"]