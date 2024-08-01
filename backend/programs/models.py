from django.db import models
import uuid

class Workouts(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.TextField(max_length=150)

class Sections(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.TextField(max_length=150)
    workout = models.ForeignKey(Workouts, on_delete=models.CASCADE)

class Exercises(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    title = models.TextField(max_length=150)
    label = models.TextField(max_length=20, blank=True)
    status = models.BooleanField(default=False)
    section = models.ForeignKey(Sections, on_delete=models.CASCADE)