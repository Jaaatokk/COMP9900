from django.db import models
from partial_date import PartialDateField, PartialDate
import uuid


class Book(models.Model):
    book_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=40, null=False)
    description = models.TextField()
    price = models.EmailField(null=False)
    published_time = PartialDateField()
    publisher = models.CharField(max_length=40, null=False)
    author = models.CharField(max_length=40, null=False)

    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Book List"

    def __str__(self):
        return self.book_id


class Category(models.Model):
    cate_id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=40, null=False)

    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Category"

    def __str__(self):
        return self.cate_id


class Book_cate(models.Model):
    # book_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    # cate_id = models.UUIDField(default=uuid.uuid4, editable=False)
    book_id = models.ForeignKey(Book, null=False, on_delete=models.CASCADE)
    cate_id = models.ForeignKey(Category, default=0, on_delete=models.SET_DEFAULT)

    class Meta:
        # Gives the proper plural name for admin
        verbose_name_plural = "Book's Category"
