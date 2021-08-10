## wines/serializers.py
from rest_framework import serializers
from .models import *

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['name']

class LeagueSerializer(serializers.ModelSerializer):
    class Meta:
        model = League
        fields = ['id', 'name', 'drafter', 'draft_type']
        
class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['name']

class PlayerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Player
        fields = ['name']