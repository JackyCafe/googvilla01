# Generated by Django 4.2.4 on 2023-08-05 06:56

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='MajorItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('item', models.CharField(max_length=8)),
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
        migrations.CreateModel(
            name='DetailItem',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('detail', models.CharField(max_length=40)),
                ('sub_item', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='subitem_id', to='app.subitem')),
            ],
        ),
    ]
