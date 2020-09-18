from django.contrib import admin
from django.urls import path
from .views import debate_index, debate_create, debate_detail, debate_create_comment, debate_delete_comment, debate_vote_1, debate_vote_2


urlpatterns = [
    path('index/', debate_index, name="debate_index"),
    path('create/', debate_create, name="debate_create"),
    path('detail/<int:debate_id>', debate_detail, name="debate_detail"),


    #댓글 기능
    path('create_comment/<int:debate_id>/', debate_create_comment, name="debate_create_comment"),
    path('delete_comment/<int:debate_id>/<int:com_pre_id>', debate_delete_comment, name="debate_delete_comment"),

    #좋아요 기능
    path('debate_vote_1/<int:debate_id>', debate_vote_1, name="debate_vote_1"),
    path('debate_vote_2/<int:debate_id>', debate_vote_2, name="debate_vote_2"),

] 