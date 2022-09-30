from rest_framework.viewsets import ModelViewSet
from .serializers import *


class PictureViewset(ModelViewSet):

    def get_serializer_class(self):
        if self.action == 'create':
            return CreatePictureSerializer
        else:
            return GetPictrureSerializer

    def get_queryset(self):
        return Picture.objects.all()
