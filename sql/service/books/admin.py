from django.contrib import admin
from .models import Book, Book_cate, Category
from django.db import models
from tinymce.widgets import TinyMCE

'''
class BookAdmin(admin.ModelAdmin):
    fieldsets = [
        ("Book Name", {"fields": ['name', 'price', 'author', 'description']}),
        ("Publish", {"fields": ['published_time', 'publisher']}),
    ]

    formfield_overrides = {
        models.TextField: {'widget': TinyMCE()}
    }


admin.site.register(Book_cate)
admin.site.register(Category)
admin.site.register(Book, BookAdmin)
'''