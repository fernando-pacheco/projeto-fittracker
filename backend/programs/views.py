from django.shortcuts import render
from rest_framework import viewsets
from .serializers import SectionsSerializer, ExercisesSerializer
from .models import Exercises, Sections

class ExercisesViewSet(viewsets.ModelViewSet):
    queryset = Exercises.objects.all()
    serializer_class = ExercisesSerializer


class SectionsViewSet(viewsets.ModelViewSet):
    queryset = Sections.objects.all()
    serializer_class = SectionsSerializer