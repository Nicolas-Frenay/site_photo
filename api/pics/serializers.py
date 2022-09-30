from rest_framework.serializers import ModelSerializer, ImageField
from .models import Picture


class CreatePictureSerializer(ModelSerializer):
    class Meta:
        model = Picture
        fields = '__all__'


class GetPictrureSerializer(ModelSerializer):
    """
    Serializer for creating pictures
    """

    image = ImageField(max_length=None, use_url=True)

    class Meta:
        model = Picture
        # fields = '__all__'
        fields = [
            'image',
            'name',
            'scope',
            'camera',
            'mount',
            'tracking',
            'location'
        ]

    def get_image(self, obj):
        return obj.image.url
