from django.db import models


class Picture(models.Model):
    """
    Picture model
    """

    # telescope models
    NEWTON750 = 'newton150'
    REFRACTOR = 'refractor360'
    LENS = 'photo'

    # camera models
    ASI183 = 'ASI183'
    ASI294 = 'ASI294'
    K1 = 'K1'

    #mount models
    STARADVENTURER = "SA"
    GEM28 = 'gem28'

    SCOPE_LIST = (
        (NEWTON750, 'Sky-Watcher Newton 150-750'),
        (REFRACTOR, 'William Optics Zenithstar 61'),
        (LENS, 'Pentax 55-300'),
    )

    CAMERA_LIST = (
        (ASI183, 'ZWO ASI183MC Pro'),
        (ASI294, 'ZWO ASI294MM Pro'),
        (K1, 'Pentax K1'),
    )

    MOUNT_LIST = (
        (STARADVENTURER, 'Sky-Watcher Star Adventurer'),
        (GEM28, 'Ioptron GEM28'),
    )

    name = models.CharField(max_length=32)
    scope = models.CharField(max_length=32, choices=SCOPE_LIST)
    camera = models.CharField(max_length=32, choices=CAMERA_LIST)
    mount = models.CharField(max_length=32, choices=MOUNT_LIST)
    focal: models.IntegerField()
    tracking = models.BooleanField(default=True)
    location = models.CharField(max_length=64)
    image = models.ImageField(upload_to='media/')
    date_created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
