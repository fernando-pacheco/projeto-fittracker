from django.db import models
import uuid
from django.contrib.auth.hashers import make_password


class Users(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    username = models.CharField(max_length=150, unique=True)
    name = models.CharField(max_length=150)
    surname = models.CharField(max_length=150)
    password = models.CharField(max_length=128)
    gender = models.CharField(max_length=30)
    cpf = models.CharField(max_length=11)
    address = models.CharField(max_length=150)
    email = models.EmailField(unique=True)
    bday = models.DateField()
    created_at = models.DateField(auto_now_add=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    def save(self, *args, **kwargs):
        if self.pk is None:
            self.password = make_password(self.password)
        super(Users, self).save(*args, **kwargs)

class Groups(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=150)
    description = models.TextField()

class Categories(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    type = models.CharField(max_length=150)

class UserGroup(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(Users, on_delete=models.CASCADE)
    group = models.ForeignKey(Groups, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('user', 'group')

class GroupCategory(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    category = models.ForeignKey(Categories, on_delete=models.CASCADE)
    group = models.ForeignKey(Groups, on_delete=models.CASCADE)

    class Meta:
        unique_together = ('category', 'group')