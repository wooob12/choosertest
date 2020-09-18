from django.db import models 
from django.contrib.auth.models import User
# 페이지네이션
from django.core.paginator import Paginator
# 회원

# 회원
# User 모델 사용

# 취향 페이지
class Topic(models.Model):
    topic_id = models.AutoField(primary_key=True)# PK
    topic_content = models.TextField()
    topic_start_date = models.DateTimeField(auto_now_add=True)
    topic_end_date = models.DateTimeField()

class Prefer(models.Model):
    prefer_id = models.AutoField(primary_key=True) # PK
    # prefer_topic = models.ForeignKey(Topic, on_delete=models.CASCADE)
    prefer_member_id = models.ForeignKey(User, on_delete=models.CASCADE)
    prefer_title = models.CharField(max_length=50)
    prefer_date = models.DateTimeField(auto_now_add=True) # 수정해도 날짜가 안바뀜
    prefer_content = models.TextField()
    prefer_file =  models.ImageField(blank=True, upload_to='Img/')
    # like 기능
    # prefer_like_user
    # https://tothefullest08.github.io/django/2019/06/11/Django21_relations3_many_to_many/
    

class Comment_prefer(models.Model):
    com_pre_id = models.AutoField(primary_key=True) # PK
    com_pre_member_id = models.ForeignKey(User, on_delete=models.CASCADE) # FK(member_id)
    com_pre_prefer_id = models.ForeignKey(Prefer, on_delete=models.CASCADE) # FK(prefer_id)
    com_pre_content = models.TextField()


# 토론 페이지
class Debate(models.Model):
    debate_id = models.AutoField(primary_key=True) # PK
    debate_pre_date = models.DateTimeField(auto_now_add=True) # 수정해도 날짜가 안바뀜
    debate_img1 = models.ImageField(blank=True, upload_to='Img/')
    debate_img2 = models.ImageField(blank=True, upload_to='Img/')
    debate_img1_name1 = models.CharField(max_length=20)
    debate_img2_name2 = models.CharField(max_length=20)

class Comment_debate(models.Model):
    com_deb_id = models.AutoField(primary_key=True) # PK
    com_deb_member_id = models.ForeignKey(User, on_delete=models.CASCADE) # FK(member_id)
    com_deb_debate_id = models.ForeignKey(Debate, on_delete=models.CASCADE) # FK(debate_id)
    com_deb_result = models.CharField(max_length = 1)
    com_deb_content = models.TextField()
    con_deb_date = models.DateTimeField(auto_now_add=True) # 수정해도 날짜가 안바뀜

class Vote(models.Model):
    vote_id = models.AutoField(primary_key=True) # PK
    vote_member_id = models.ForeignKey(User, on_delete=models.CASCADE)# FK(member_id)
    vote_debate_id = models.ForeignKey(Debate, on_delete=models.CASCADE)# FK(debate_id)
    vote_result_1 = models.IntegerField(default=0)# BooleanField(참거짓)으로 구분할 수 있을까? 언제든지 취소 수정 가능?
    vote_result_2 = models.IntegerField(default=0)# BooleanField는 Ture, False로 구분 되며 변경 가능합니다.


class Mood(models.Model):
    mood_id = models.AutoField(primary_key=True) # PK
    mood_val = models.CharField(max_length=10) # 기분수치
    mood_state = models.CharField(max_length=50) # 기분 이름
    mood_content = models.TextField() # 기분 내용
    mood_date = models.DateTimeField(auto_now=True) # 기분 시간
    mood_member_id=models.ForeignKey(User, on_delete=models.CASCADE) # FK(member_id)


# author = models.ForeignKey(User, on_delete=models.CASCADE)

# 날짜 모델 변경
# 투표 결과 정수형으로 한 거 모델 한글에 써놓기
# 모델에 있는 주석들 다 보기


