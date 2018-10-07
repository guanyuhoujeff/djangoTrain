from django.db import models
from django.utils import timezone

# Create your models here.

    
class Post(models.Model):
    title    = models.CharField(max_length=200)
    slug     = models.CharField(max_length=200)
    body     = models.TextField()
    pub_date = models.DateTimeField(default=timezone.now)

    class Meta:
        ordering = ('-pub_date', )
    
    def __str__(self):
        return self.title



class historyPrice(models.Model):
    id     = models.CharField(max_length=200, primary_key=True)
    date   = models.CharField(max_length=200)
    price  = models.IntegerField()
    blueP  = models.IntegerField()
    redP   = models.IntegerField()

    class Meta:
        ordering = ('-date', )
    
    def __str__(self):
        return self.date