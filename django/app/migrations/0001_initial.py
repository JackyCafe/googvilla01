# Generated by Django 4.2.4 on 2023-08-09 15:31

import datetime
from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='DetailItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('detail', models.CharField(max_length=40)),
                ('comment', models.CharField(default='', max_length=40)),
            ],
        ),
        migrations.CreateModel(
            name='MajorItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=8)),
            ],
        ),
        migrations.CreateModel(
            name='WorkRecord',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('working_date', models.DateField(default=datetime.datetime(2023, 8, 9, 15, 31, 33, 824006, tzinfo=datetime.timezone.utc), verbose_name='工作日期')),
                ('start_time', models.TimeField(auto_now=True, verbose_name='起始時間')),
                ('end_time', models.TimeField(auto_now=True, verbose_name='結束時間')),
                ('spend_time', models.FloatField(default=0, verbose_name='花費時間')),
                ('bonus', models.IntegerField(default=0, verbose_name='收費')),
                ('mood', models.CharField(choices=[('2', 2), ('1', 1), ('-1', -1), ('-2', -2)], default=0, max_length=3, verbose_name='能量指標')),
                ('comment', models.TextField(blank=True, max_length=200, null=True)),
                ('detail', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app.detailitem')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='user', to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='SubItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('sub_items', models.CharField(max_length=20)),
                ('major', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='major_id', to='app.majoritem')),
            ],
        ),
        migrations.AddField(
            model_name='detailitem',
            name='sub_item',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subitem_id', to='app.subitem'),
        ),
    ]
