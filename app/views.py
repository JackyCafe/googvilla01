import sys

from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404, get_list_or_404

# Create your views here.
import logging

from app.models import MajorItem, SubItem, DetailItem

logging.basicConfig(level=logging.INFO,
                    format='%(asctime)s %(levelname)s %(message)s ',
                    datefmt='%Y-%m-%d %H:%M',
                    handlers=[
                        logging.FileHandler("mylog.log"),
                        logging.StreamHandler(sys.stdout)
                    ]
                    )


def index(request):
    major = MajorItem.objects.all()
    return  render(request,'app/index.html',{'major':major})


def subitem_view(request,id):
    item = get_list_or_404(SubItem,major_id=id)
    logging.info(str(item))
    return  render(request,'app/sub_views.html',{'subitems':item})


def detail_view(request,id):
    item = get_list_or_404(DetailItem,sub_item_id=id)
    logging.info(str(item))
    return  render(request,'app/detail_views.html',{'detailitems':item})
