# Generated by Django 4.2.4 on 2023-09-03 03:52

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0004_alter_workrecord_end_time_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='workrecord',
            name='end_time',
            field=models.TextField(verbose_name='結束時間'),
        ),
        migrations.AlterField(
            model_name='workrecord',
            name='spend_time',
            field=models.IntegerField(default=0, verbose_name='花費時間'),
        ),
        migrations.AlterField(
            model_name='workrecord',
            name='start_time',
            field=models.TextField(verbose_name='起始時間'),
        ),
        migrations.AlterField(
            model_name='workrecord',
            name='working_date',
            field=models.DateField(default=datetime.datetime(2023, 9, 3, 3, 52, 24, 551271, tzinfo=datetime.timezone.utc), verbose_name='工作日期'),
        ),
    ]