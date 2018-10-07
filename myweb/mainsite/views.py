from django.shortcuts import render
from django.http import HttpResponse
from .models import Post
import datetime



# Create your views here.


def home(request):
    s = "Hello World!"
    return HttpResponse(s)  ## 類似document.write()

def index(request):
    now = datetime.datetime.now()
    return render(request, 'index.html', locals()) ## render ：放變數到哪個html

def login(request):
    return render(request, 'login.html')

def charts(request):
    return render(request, 'charts.html')

def tables(request):
    return render(request, 'tables.html')



