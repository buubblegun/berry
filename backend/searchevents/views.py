from django.shortcuts import render
from django.http import HttpResponse

def index(request): 
    return HttpResponse("Hello, world. You're about to start searching for events!")


# Create your views here.
