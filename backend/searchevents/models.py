from __future__ import unicode_literals

from django.db import models

# Create your models here


class Event(models.Model):
    eventName = models.CharField(max_length=200)
    eventLocation = models.CharField(max_length=200)
    eventDate = models.DateTimeField('date published')
    eventType = models.CharField(max_length=200)
    eventDescription = models.CharField(max_length=2000)
    eventLink = models.CharField(max_length=2000)

