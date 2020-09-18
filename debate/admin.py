from django.contrib import admin
# 다른 파일에서 모델 들고오기
from main.models import Debate, Comment_debate, Vote

# admin page에 model 등록
admin.site.register(Debate)
admin.site.register(Comment_debate)
admin.site.register(Vote)