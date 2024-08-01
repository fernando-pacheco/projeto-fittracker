from rest_framework import serializers
from .models import Exercises, Sections, Workouts

class WorkoutsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Workouts
        fields = '__all__'
        
class SectionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sections
        fields = '__all__'


class ExercisesSerializer(serializers.ModelSerializer):
    label = serializers.CharField(required=False)
    class Meta:
        model = Exercises
        fields = '__all__'