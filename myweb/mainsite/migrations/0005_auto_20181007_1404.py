# Generated by Django 2.1.2 on 2018-10-07 06:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('mainsite', '0004_auto_20181007_1357'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='historyprice',
            name='index',
        ),
        migrations.AddField(
            model_name='historyprice',
            name='id',
            field=models.AutoField(auto_created=True, default=1, primary_key=True, serialize=False, verbose_name='ID'),
            preserve_default=False,
        ),
    ]