from django.shortcuts import render
import random
# Create your views here.
def index(request):
    return render(request, 'index.html')

def greeting(request):
    
    foods = ['apple','banana','coconut']
    info = {
        'name' : 'Alice'
    }
    context = {
        'foods' : foods,
        'info' : info,
    }
    return render(request, 'greeting.html', context)

def dinner(request):

    foods = ['족발','햄버거']
    pick = random.choice(foods)
    context = {
        'foods' : foods,
        'pick' : pick
    }
    return render(request, 'dinner.html', context)

def throw(request):
    return render(request, 'throw.html')

def catch(request):
    message = request.GET.get('message')
    context = {
        'meessage' : message,
    }
    return render(request, 'catch.html', context)

def hello(request, name):
    context = {
        'name' : name,
    }
    return render(request, 'hello.html', context)