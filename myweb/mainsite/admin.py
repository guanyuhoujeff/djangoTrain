from django.contrib import admin
from .models import Post,  historyPrice

# Register your models here.

class PostAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'pub_date']

class historyPriceAdmin(admin.ModelAdmin):
    list_display = ["date", "price", "blueP", "redP"]


admin.site.register(historyPrice, historyPriceAdmin)
admin.site.register(Post, PostAdmin)