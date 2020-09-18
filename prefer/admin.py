from django.contrib import admin
# 다른 파일에서 모델 들고오기
from main.models import Prefer, Topic, Comment_prefer

# admin page에 model 등록
admin.site.register(Prefer)
admin.site.register(Topic)
admin.site.register(Comment_prefer)