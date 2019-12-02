from django.db import models


class Customer(models.Model):
    nombre = models.CharField(max_length=32, blank=False, default='')
    email = models.CharField(max_length=32, blank=False, default='')
    telefono = models.IntegerField(default=False)

