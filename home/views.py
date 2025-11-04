# from django.http import HttpResponse, Http404
# from django.template import loader, Template
# from django.template.exceptions import TemplateDoesNotExist


# def index(request) -> HttpResponse:
#     try:
#         template: Template = loader.get_template("home/index.html")
#     except TemplateDoesNotExist:
#         return Http404()
#     return HttpResponse(template.render(request=request))


# def about(request) -> HttpResponse:
#     try:
#         template: Template = loader.get_template("home/about.html")
#     except TemplateDoesNotExist:
#         return Http404()
#     return HttpResponse(template.render(request=request))


# from django.shortcuts import render

# def index(request):
#     return render(request, "home/index.html")
# home/views.py
from django.views.generic import View
from django.http import FileResponse
import os
from django.conf import settings

class FrontendAppView(View):
    def get(self, request):
        index_path = os.path.join(settings.BASE_DIR, 'staticfiles', 'index.html')
        return FileResponse(open(index_path, 'rb'))
