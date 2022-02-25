FROM python:3.10-alpine3.15

RUN addgroup app && adduser -S -G app app
USER app

COPY app /app
WORKDIR /app

RUN pip install -r requirements.txt

EXPOSE 5000

CMD ["python", "app.py"]