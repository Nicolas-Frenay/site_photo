from rest_framework.serializers import ModelSerializer
from .models import Picture

class CreatePictrureSerializer(ModelSerializer):
    """
    Serializer for creating pictures
    """

    class Meta:
        model = Picture
        fields = '__all__'