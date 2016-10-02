from django.shortcuts import render
from django.http import HttpResponse

def index(request): 
    location = request.GET.get('lat','@37.7576171,-122.5776829,11z') #default SF
    radius = request.GET.get('radius','5') #defaulted to 5 miles
    return searchevents(location, radius)

def searchevents(location, radius)
    print "hello"
    return HttpResponse("{[]}")

