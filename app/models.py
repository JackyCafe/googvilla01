from django.db import models

# Create your models here.
# 大分類
class MajorItem(models.Model):
    item = models.CharField(max_length=8,blank=False)

    def __str__(self):
        return self.item


class SubItem(models.Model):
    major = models.ForeignKey(MajorItem,on_delete=models.CASCADE, related_name='major_id')
    sub_items = models.CharField(max_length=20,null=False)

    def __str__(self):
        return self.sub_items


class DetailItem(models.Model):
    sub_item = models.ForeignKey(SubItem,on_delete=models.CASCADE,related_name='subitem_id')
    detail = models.CharField(max_length=40,null=False)
    comment = models.CharField(max_length=40,null=False,blank=False,default='')

    def __str__(self):
        return self.detail