from rest_framework.viewsets import ModelViewSet
from .serializers import *

class PictureViewset(ModelViewSet):

    serializer_class = CreatePictrureSerializer
    def get_queryset(self):
        return Picture.objects.all()
