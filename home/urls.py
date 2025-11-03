# from django.urls import path

# from . import views

# urlpatterns = [
#     path("", views.index, name="home"),
#     # path("index.html", views.index, name="index"),
#     # path("about.html", views.about, name="about"),
# ]


from django.contrib import admin
from django.urls import path, re_path
from home import views

urlpatterns = [
    path("admin/", admin.site.urls),
    path("", views.index),
    re_path(r"^.*$", views.index),  # catch-all for React Router
]

