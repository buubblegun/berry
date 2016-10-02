from eventbrite import Eventbrite

def eb_fetch(latitude, longitude, radius):
    eventbrite = Eventbrite('LMYQEYROBA7SA3GQA2DR')
    user = eventbrite.get_user()
    my_id = eventbrite.get_user()['id']
    events = eventbrite.event_search(**{'location.latitude': str(latitude), 'location.longitude': str(longitude), 'location.within': str(radius)+"mi", 'start_date.keyword': "this_week"})
    events = events['events']
    events_output = []
    for event in events:
        eventDate = event['start']['local']
        events_output.append({'eventName': event['name']['text'], 'eventLocation': 'null', 'eventType': event['description']['text'], 'eventLink': event['resource_uri'], 'eventDate': eventDate[:eventDate.index('T')]})
    return events_output
