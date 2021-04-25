from django.contrib import admin
from .models import Myuser


class PersonAdmin(admin.ModelAdmin):
    list_display = ['id', 'username', 'email', 'password', 'user_type']

    class Meta:
        model = Myuser


admin.site.register(Myuser, PersonAdmin)
