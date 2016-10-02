from django.shortcuts import render
from django.http import HttpResponse
from eb_fetch import eb_fetch
def index(request): 
    lat = request.GET.get('lat','@37.7576171') #default SF
    lon = request.GET.get('long','-122.5776829')
    radius = request.GET.get('radius','5') #defaulted to 5 miles
    return eb_fetch(lat, lon, radius)

def searchevents(location, radius):
    print "hello"
    return HttpResponse("{[]}")

