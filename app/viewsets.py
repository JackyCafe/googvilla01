''' 
2023/8/24
googvilla01 
viewsets.py
by yhlin
'''
from rest_framework import viewsets

from app.models import MajorItem, SubItem, DetailItem, WorkRecord
from app.serializers import MajorItemSerializer, SubItemSerializer, DetailItemSerializer,WorkRecordSerializer


class MajorItemViewSet(viewsets.ModelViewSet):
    queryset = MajorItem.objects.all()
    serializer_class = MajorItemSerializer


class SubItemViewSet(viewsets.ModelViewSet):
    # queryset =  SubItem.objects.all()
    serializer_class = SubItemSerializer
    def get_queryset(self):
        major_id = self.kwargs['major_id']
        return SubItem.objects.filter(major_id=major_id)


class DetailItemViewSet(viewsets.ModelViewSet):
    # queryset = DetailItem.objects.all()
    serializer_class = DetailItemSerializer

    def get_queryset(self):
        sub_item_id = self.kwargs['subitem_id']
        return DetailItem.objects.filter(sub_item_id=sub_item_id)


class WorkRecordViewSet(viewsets.ModelViewSet):
    serializer_class = WorkRecordSerializer

    def get_queryset(self):
        detail_id = self.kwargs['detail_id']
        return WorkRecord.objects.filter(detail_id=detail_id)