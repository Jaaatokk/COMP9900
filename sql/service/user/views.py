from django.shortcuts import render
from django.http import HttpResponse
from . import models
import json
import uuid
from django.core import serializers
from django.core.serializers.json import DjangoJSONEncoder


def write_server(request):
    data = json.loads(request.body)
    email = data['email']
    if serializers.serialize('python', models.Myuser.objects.filter(email=email)):
        res = {
            'success': False,
            'message': 'The email is existed.'
        }
    else:
        data['id'] = uuid.uuid4()
        models.Myuser.objects.create(**data)
        res = {
            'success': True,
            'message': 'Register successfully.',
        }
    return HttpResponse(json.dumps(res), content_type='application/json')



def read_server(request):
    data = json.loads(request.body)
    email = data['email']
    password = data['password']
    data = serializers.serialize('python', models.Myuser.objects.filter(email=email, password=password))
    if not data:
        res = {
            'success': False,
            'message': 'Login failed.',
        }
    else:
        res ={
            'success': True,
            'message': 'Login successfully.',
        }
    return HttpResponse(json.dumps(res, cls=DjangoJSONEncoder), content_type='application/json')
