from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import UsersViewSet, GroupsViewSet, CategoriesViewSet, GroupCategoryViewSet, UserGroupViewSet

router = DefaultRouter()
router.register(r'users', UsersViewSet, basename='users')
router.register(r'groups', GroupsViewSet, basename='groups')
router.register(r'categories', CategoriesViewSet, basename='categories')
router.register(r'user-group', UserGroupViewSet, basename='user-group')
router.register(r'group-category', GroupCategoryViewSet, basename='group-category')

urlpatterns = [
    path('', include(router.urls))
]
