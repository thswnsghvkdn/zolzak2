from django.urls import path
from rest_framework_jwt import obtain_jwt_token, refrech_jwt_token , verify_jwt_token
from . import views



urlpatterns = [
    path("signup/" , views.SignupView.as_view() , name = "signup"),
    path("<int:user_pk>/update/", views.ProfileUpdateAPI.as_view()),
    path("token/" , obtain_jwt_token ),
    path("token/refresh/" , refrech_jwt_token ),
    path("token/verify/", verify_jwt_token),
]