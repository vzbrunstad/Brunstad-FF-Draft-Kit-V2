from django.contrib import admin
from django.urls import path, include


urlpatterns = [
    path('admin/', admin.site.urls),
    path('draft_kit_app/', include('draft_kit_app.urls')),
]
