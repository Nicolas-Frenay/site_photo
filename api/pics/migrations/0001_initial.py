# Generated by Django 4.1.1 on 2022-09-30 08:34

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Picture',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=32)),
                ('scope', models.CharField(choices=[('newton150', 'Sky-Watcher Newton 150-750'), ('refractor360', 'William Optics Zenithstar 61'), ('photo', 'Pentax 55-300')], max_length=32)),
                ('camera', models.CharField(choices=[('ASI183', 'ZWO ASI183MC Pro'), ('ASI294', 'ZWO ASI294MM Pro'), ('K1', 'Pentax K1')], max_length=32)),
                ('mount', models.CharField(choices=[('SA', 'Sky-Watcher Star Adventurer'), ('gem28', 'Ioptron GEM28')], max_length=32)),
                ('tracking', models.BooleanField(default=True)),
                ('location', models.CharField(max_length=64)),
                ('image', models.ImageField(upload_to='medias/')),
                ('date_created', models.DateTimeField(auto_now_add=True)),
            ],
        ),
    ]