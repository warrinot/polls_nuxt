from rest_framework.routers import DefaultRouter

from backend.core import views

router = DefaultRouter()

router.register(r'polls', views.QuestionViewSet, basename='polls')
