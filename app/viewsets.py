''' 
2023/8/24
googvilla01 
viewsets.py
by yhlin
'''
from rest_framework import viewsets

from app.models import MajorItem, SubItem, DetailItem
from app.serializers import MajorItemSerializer, SubItemSerializer, DetailItemSerializer


class MajorItemViewSet(viewsets.ModelViewSet):
    queryset = MajorItem.objects.all()
    serializer_class = MajorItemSerializer


class SubItemViewSet(viewsets.ModelViewSet):
    queryset =  SubItem.objects.all()
    serializer_class = SubItemSerializer


class DetailItemViewSet(viewsets.ModelViewSet):
    queryset = DetailItem.objects.all()
    serializer_class = DetailItemSerializer


