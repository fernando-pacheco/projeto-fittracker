# views.py
from rest_framework import viewsets
from .models import Users, Groups, Categories, UserGroup, GroupCategory
from .serializers import UsersSerializer, GroupsSerializer, CategoriesSerializer, GroupCategorySerializer, UserGroupSerializer

class UsersViewSet(viewsets.ModelViewSet):
    queryset = Users.objects.all()
    serializer_class = UsersSerializer

class GroupsViewSet(viewsets.ModelViewSet):
    queryset = Groups.objects.all()
    serializer_class = GroupsSerializer

class CategoriesViewSet(viewsets.ModelViewSet):
    queryset = Categories.objects.all()
    serializer_class = CategoriesSerializer

class GroupCategoryViewSet(viewsets.ModelViewSet):
    queryset = GroupCategory.objects.all()
    serializer_class = GroupCategorySerializer

class UserGroupViewSet(viewsets.ModelViewSet):
    queryset = UserGroup.objects.all()
    serializer_class = UserGroupSerializer