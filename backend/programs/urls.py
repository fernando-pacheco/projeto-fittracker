from rest_framework.routers import DefaultRouter
from django.urls import path, include
from .views import SectionsViewSet, ExercisesViewSet, WorkoutsViewSet

router = DefaultRouter()
router.register(r'sections', SectionsViewSet)
router.register(r'exercises', ExercisesViewSet)
router.register(r'workouts', WorkoutsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]
