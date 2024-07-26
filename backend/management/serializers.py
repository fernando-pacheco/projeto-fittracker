from rest_framework import serializers
from .models import Users, Groups, Categories, UserGroup, GroupCategory
from django.contrib.auth.hashers import make_password

class CategoriesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Categories
        fields = '__all__'

class UserGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserGroup
        fields = '__all__'

class GroupsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Groups
        fields = '__all__'

class GroupCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = GroupCategory
        fields = '__all__'

class UsersSerializer(serializers.ModelSerializer):
    avatar = serializers.ImageField(required=False)
    password = serializers.CharField(write_only=True, required=True)

    class Meta:
        model = Users
        fields = [
            'id', 'username', 'name', 'surname', 'gender', 'cpf', 'address',
            'email', 'bday', 'created_at', 'avatar', 'password'
        ]
        read_only_fields = ('created_at',)

    def create(self, validated_data):
        password = validated_data.pop('password')
        validated_data['password'] = make_password(password)
        user = Users.objects.create(**validated_data)
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        if password:
            instance.password = make_password(password)
        instance.save()
        return instance