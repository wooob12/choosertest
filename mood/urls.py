from django.contrib import admin
from django.urls import path
from mood.views import mood, month, to_main
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', mood , name="mood"),
    path('month/', month, name="month"),
    path('to_main/' ,to_main, name="to_main"),
] + static(settings.MEDIA_URL, document_root = settings.MEDIA_ROOT)
 