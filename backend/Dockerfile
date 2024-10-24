FROM python:3.13-alpine AS python_builder

RUN apk update

COPY ./requirements.txt ./requirements.txt

RUN python3.13 -m pip install --upgrade pip \
&& pip install -r requirements.txt

FROM python:3.13-alpine
ENV TZ=America/Sao_Paulo

RUN apk update

WORKDIR /app

COPY --from=python_builder /usr/local /usr/local

COPY . .

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]