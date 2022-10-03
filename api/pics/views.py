from rest_framework.viewsets import ModelViewSet
from .serializers import *
from rest_framework.permissions import IsAuthenticated


class PictureViewset(ModelViewSet):

    # permission_classes = []
    #
    def get_permissions(self):
        actions = ['create', 'update', 'partial_update', 'destroy']
        if self.action in actions:
            self.permission_classes = [IsAuthenticated]
        return super().get_permissions()

    def get_serializer_class(self):
        if self.action == 'create':
            return CreatePictureSerializer
        else:
            return GetPictrureSerializer

    def get_queryset(self):
        return Picture.objects.all()
