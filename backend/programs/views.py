from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework import status
from .serializers import SectionsSerializer, ExercisesSerializer, WorkoutsSerializer
from .models import Exercises, Sections, Workouts

class ExercisesViewSet(viewsets.ModelViewSet):
    queryset = Exercises.objects.all()
    serializer_class = ExercisesSerializer

class SectionsViewSet(viewsets.ModelViewSet):
    queryset = Sections.objects.all()
    serializer_class = SectionsSerializer

    def get_section_data(self, section):
        # Retrieve exercises related to the section
        exercises = Exercises.objects.filter(section_id=section.id)
        exercises_serializer = ExercisesSerializer(exercises, many=True)

        return {
            'id': section.id,
            'title': section.title,
            'exercises': exercises_serializer.data
        }

    def retrieve(self, request, pk=None):
        try:
            section = Sections.objects.get(pk=pk)
            section_data = self.get_section_data(section)
            return Response(section_data)
        except Sections.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def list(self, request):
        sections = Sections.objects.all()
        sections_serializer = SectionsSerializer(sections, many=True)
        sections_data = []

        for section in sections_serializer.data:
            section_instance = Sections.objects.get(id=section['id'])
            section_data = self.get_section_data(section_instance)
            sections_data.append(section_data)

        return Response(sections_data)
        
class WorkoutsViewSet(viewsets.ModelViewSet):
    queryset = Workouts.objects.all()
    serializer_class = WorkoutsSerializer

    def get_workout_data(self, workout):
        # Retrieve sections related to the workout
        sections = Sections.objects.filter(workout_id=workout.id)
        sections_serializer = SectionsSerializer(sections, many=True)

        # Add exercises to sections
        for section in sections_serializer.data:
            exercises = Exercises.objects.filter(section_id=section['id'])
            exercises_serializer = ExercisesSerializer(exercises, many=True)
            section['exercises'] = exercises_serializer.data

        return {
            'id': workout.id,
            'title': workout.title,
            'sections': sections_serializer.data
        }

    def retrieve(self, request, pk=None):
        try:
            workout = Workouts.objects.get(pk=pk)
            workout_data = self.get_workout_data(workout)
            return Response(workout_data)
        except Workouts.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)

    def list(self, request):
        workouts = Workouts.objects.all()
        serializer = WorkoutsSerializer(workouts, many=True)
        workouts_data = []
        
        for workout in serializer.data:
            workout_instance = Workouts.objects.get(id=workout['id'])
            workout_data = self.get_workout_data(workout_instance)
            workouts_data.append(workout_data)

        return Response(workouts_data)
