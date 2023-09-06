"""
URL configuration for googvilla01 project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import include, path
from rest_framework.routers import DefaultRouter

from app.views import create_work_record, detail_view, index, subitem_view
from app.viewsets import (DetailItemViewSet, MajorItemViewSet, SubItemViewSet,
                          WorkRecordViewSet, WorkRecordByDateViewSet, WorkRecordSummaryView)

app_name='app'
router = DefaultRouter()
router.register('major',viewset=MajorItemViewSet),
router.register(r'subitem/(?P<major_id>\d+)', SubItemViewSet, basename='subitem'),
# router.register('subitem/<int:major_id>/',viewset=SubItemViewSet,basename='subitem'),
router.register(r'detail/(?P<subitem_id>\d+)', DetailItemViewSet, basename='detail'),
router.register(r'workrecord/(?P<detail_id>\d+)',WorkRecordViewSet,basename='workrecord'),
router.register(r'workrecord/(?P<working_date>\d{4}-\d{2}-\d{2})',WorkRecordByDateViewSet,basename='workrecord_by_date'),
# router.register(r'summary/(?P<working_date>\d{4}-\d{2}-\d{2})', WorkRecordSummaryView.as_view({'get': 'summary'}), basename='summary')


urlpatterns = [
    path('', index,name='index'),
    path('sub_view/<int:id>', subitem_view,name='sub_view'),
    path('detail_view/<int:id>', detail_view,name='detail_view'),
    path('create_work_record/<int:id>', create_work_record,name='create_work_record'),
    path('api/',include(router.urls)),
    path('api/summary/<str:working_date>/', WorkRecordSummaryView.as_view({'get': 'summary'}),
         name='workrecord-summary'),

]
