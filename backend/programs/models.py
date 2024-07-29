from django.db import models
import uuid

class Sections(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.TextField(max_length=150)

class Exercises(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.TextField(max_length=150)
    label = models.TextField(max_length=20)
    status = models.BooleanField(default=False)
    section = models.ForeignKey(Sections, on_delete=models.CASCADE)